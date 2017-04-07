--function for request 1

CREATE TYPE type_request1 AS (Ligue VARCHAR, Equipe VARCHAR);
CREATE OR REPLACE FUNCTION request_1() RETURNS SETOF type_request1 AS $$

BEGIN
	RETURN QUERY EXECUTE 
	'SELECT IDLeague AS Ligue, nom AS Equipe
	 FROM SPORTSDB.UsagerEquipe
	 GROUP BY IDLeague, nom
	 HAVING COUNT(IDUsager) > 17
	ORDER BY nom';
END;
$$LANGUAGE plpgsql

--function for request 2

CREATE OR REPLACE FUNCTION request_2() RETURNS INTEGER AS $$
DECLARE
	result INTEGER;
BEGIN
	 SELECT COUNT(*) AS NombreDeSmith
         FROM SPORTSDB.Usager
         WHERE nom = 'Smith' INTO result;
         RETURN result;
END;
$$LANGUAGE plpgsql

--function for request 3

CREATE OR REPLACE FUNCTION request_3() RETURNS SETOF VARCHAR AS $$

BEGIN
	RETURN QUERY EXECUTE 
	'SELECT IDTournoi
	 FROM SPORTSDB.CommanditaireTournoi t NATURAL JOIN SPORTSDB.Commanditaire c
	 WHERE c.nom = ''Ballons Inc.''
	 ORDER BY IDTournoi';
END;
$$LANGUAGE plpgsql

--function for request 4

CREATE OR REPLACE FUNCTION request_4() RETURNS INTEGER AS $$
DECLARE
	result INTEGER;
BEGIN
	 SELECT COUNT(*) AS NombreMatchArbitreParA
         FROM SPORTSDB.ArbitreMatch am NATURAL JOIN SPORTSDB.Arbitre a NATURAL JOIN SPORTSDB.Employe e
         WHERE e.prenom LIKE 'A%' INTO result;
         RETURN result;
END;
$$LANGUAGE plpgsql

--function for request 5

CREATE TYPE type_request5 AS (nom VARCHAR, prenom VARCHAR);
CREATE OR REPLACE FUNCTION request_5() RETURNS SETOF type_request5 AS $$

BEGIN
	RETURN QUERY EXECUTE 
	'SELECT u.nom AS nom, u.prenom AS prenom
         FROM SPORTSDB.Usager u, SPORTSDB.UsagerEquipe ue
         Where u.IDUsager = ue.IDUsager AND ue.IDLeague = ''L007'' AND ue.nom =''Lions''
         ORDER BY u.nom';
END;
$$LANGUAGE plpgsql

--function for request 6

CREATE TYPE type_request6 AS (nom VARCHAR, prenom VARCHAR);
CREATE OR REPLACE FUNCTION request_6() RETURNS SETOF type_request6 AS $$

BEGIN
	RETURN QUERY EXECUTE 
	'SELECT u.nom, u.prenom
         FROM SPORTSDB.EquipeTournoi et, SPORTSDB.UsagerEquipe ue, SPORTSDB.Usager u
         WHERE IDTournoi = ''T110'' 
         AND et.IDLeague = ue.IDLeague AND et.nom = ue.nom
         AND ue.IDUsager = u.IDUsager
         ORDER BY u.nom';
END;
$$LANGUAGE plpgsql

--function for request 7

CREATE OR REPLACE FUNCTION request_7() RETURNS INTEGER AS $$
DECLARE
	result INTEGER;
BEGIN
	 SELECT COUNT(*) AS NombreMatchs
         FROM SPORTSDB.Match m NATURAL JOIN SPORTSDB.MatchSaison ms
         WHERE m.date = DATE'2016-03-14' AND m.lieu <> 'Sportmax, Ottawa' INTO result;
         RETURN result;
END;
$$LANGUAGE plpgsql

--function for request 8

CREATE OR REPLACE FUNCTION request_8() RETURNS INTEGER AS $$
DECLARE
	result INTEGER;
BEGIN
	 SELECT COUNT(*) AS NombreJoueurs
         FROM SPORTSDB.Sport s, SPORTSDB.Ligue l, SPORTSDB.Equipe e
         WHERE s.nom IN ('Basketball', 'Soccer')
         AND s.IDSport = l.IDSport
         AND e.IDLeague = l.IDLeague INTO result;
         RETURN result;
END;
$$LANGUAGE plpgsql

--function for request 9

CREATE OR REPLACE FUNCTION request_9() RETURNS DATE AS $$
DECLARE
	result DATE;
BEGIN
	 SELECT p.datePaiement
         FROM SPORTSDB.Paiement p, SPORTSDB.Saison s
         WHERE p.IDSaison = s.IDSaison 
         AND p.IDLeague = 'L040' AND p.nom = 'Titans'
         AND s.dateCommencement = DATE'2016-01-12'
         AND s.IDLeague = p.IDLeague INTO result;
         RETURN result;
END;
$$LANGUAGE plpgsql

--function for request 10

CREATE OR REPLACE FUNCTION request_10() RETURNS VOID AS  $$
BEGIN
	INSERT INTO SPORTSDB.Usager VALUES('U0019', 'John', 'Smith', 'jsmith@gmail.com');
	INSERT INTO SPORTSDB.UsagerEquipe VALUES('U0019', 'L007', 'Lions');
END;
$$LANGUAGE plpgsql

--function for request 11

CREATE OR REPLACE FUNCTION request_11() RETURNS VOID AS  $$
BEGIN
	DELETE FROM SPORTSDB.Usager
	WHERE nom = 'Jones' AND prenom = 'Emilie';
END;
$$LANGUAGE plpgsql


--function for request 12

CREATE OR REPLACE FUNCTION request_12() RETURNS VOID AS  $$
BEGIN
	UPDATE SPORTSDB.Equipe
	SET nom = 'NewName'
	WHERE IDLeague = 'L022' AND nom = 'Fonceurs';
END;
$$LANGUAGE plpgsql





-----------------------TRIGGER TO COMPUTE FONDS ACCUMULES each time a new contribution occurs---------

--Trigger on table CommanditaireTournoi

CREATE FUNCTION fondsAccumules_contributionupdate() RETURNS trigger AS $fondsAccumules_contributionupdate$
    BEGIN
        -- Check that IDTournoi and contribution are given
        IF NEW.IDTournoi IS NULL THEN
            RAISE EXCEPTION 'IDTournoi cannot be null';
        END IF;
        IF NEW.contribution IS NULL THEN
            RAISE EXCEPTION '% cannot have null contribution for', NEW.IDTournoi;
        END IF;

        -- The contribution cannot be negative
        IF NEW.contribution < 0 THEN
            RAISE EXCEPTION '% cannot have a negative contribution for', NEW.IDTournoi;
        END IF;

	--update the fondsAccumules value
	UPDATE SPORTSDB.Tournoi
	SET fondsAccumules = fondsAccumules + NEW.contribution
	WHERE IDTournoi = NEW.IDTournoi;
	RETURN NEW;
    END;
$fondsAccumules_contributionupdate$ LANGUAGE plpgsql;

--The trigger is activated after insertion to make sure that the row was valid
CREATE TRIGGER fondsAccumules_contributionupdate  AFTER INSERT OR UPDATE ON SPORTSDB.CommanditaireTournoi
    FOR EACH ROW EXECUTE PROCEDURE fondsAccumules_contributionupdate ();

--Trigger on table EquipeTournoi

CREATE FUNCTION fondsAccumules_inscriptionupdate() RETURNS trigger AS $fondsAccumules_inscriptionupdate$
    BEGIN
        -- Check that IDTournoi and frais are given
        IF NEW.IDTournoi IS NULL THEN
            RAISE EXCEPTION 'IDTournoi cannot be null';
        END IF;
        IF NEW.frais IS NULL THEN
            RAISE EXCEPTION '% cannot have null frais for', NEW.IDTournoi;
        END IF;

        -- The frais cannot be negative
        IF NEW.frais < 0 THEN
            RAISE EXCEPTION '% cannot have a negative frais for', NEW.IDTournoi;
        END IF;

	--update the fondsAccumules value
	UPDATE SPORTSDB.Tournoi
	SET fondsAccumules = fondsAccumules + NEW.frais
	WHERE IDTournoi = NEW.IDTournoi;
	RETURN NEW;
    END;
$fondsAccumules_inscriptionupdate$ LANGUAGE plpgsql;

--The trigger is activated after insertion to make sure that the row was valid
CREATE TRIGGER fondsAccumules_inscriptionupdate  AFTER INSERT OR UPDATE ON SPORTSDB.EquipeTournoi
    FOR EACH ROW EXECUTE PROCEDURE fondsAccumules_inscriptionupdate ();
