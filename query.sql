--1. Quelles sont les équipes qui comportent plus de 17 joueurs, toutes ligues
--  confondues? Lister les équipes en ordre alphabétique selon le nom de léquipe.

SELECT IDLigue AS Ligue, nom AS Equipe INTO resultat
FROM SPORTSDB.UsagerEquipe
GROUP BY IDLigue, nom
HAVING COUNT(IDUsager) > 17
ORDER BY nom;

-- 2. Combien de joueurs ont le nom de famille « Smith »?

SELECT COUNT(*) AS NombreDeSmith
FROM SPORTSDB.Usager
WHERE nom = 'Smith';

-- 3. Quels tournois sont commandités par « Ballons Inc. »? Lister 
-- les IDTournoi en ordre croissant.

SELECT IDTournoi
FROM SPORTSDB.CommanditaireTournoi t NATURAL JOIN SPORTSDB.Commanditaire c
WHERE c.nom = 'Ballons Inc.'
ORDER BY IDTournoi;

-- 4. Combien de matchs sont supervisés par un arbitre dont le 
-- prénom commence par la lettre «A»?

SELECT COUNT(*) AS NombreMatchArbitreParA
FROM SPORTSDB.ArbitreMatch am NATURAL JOIN SPORTSDB.Arbitre a NATURAL JOIN SPORTSDB.Employe e
WHERE e.prenom LIKE 'A%';

-- 5. Quels sont les joueurs inscrits à léquipe «Lions» de la ligue L007? 
-- Lister les joueurs en ordre alphabétique selon leur nom de famille.

SELECT u.nom, u.prenom
FROM SPORTSDB.Usager u, SPORTSDB.UsagerEquipe ue
Where u.IDUsager = ue.IDUsager AND ue.IDLigue = 'L007' AND ue.nom ='Lions'
ORDER BY u.nom;

--6. Quels sont les joueurs participant au tournoi T110? 
-- Lister les joueurs en ordre alphabétique selon leur nom de famille.

SELECT u.nom, u.prenom
FROM SPORTSDB.EquipeTournoi et, SPORTSDB.UsagerEquipe ue, SPORTSDB.Usager u
WHERE IDTournoi = 'T110' 
  AND et.IDLigue = ue.IDLigue AND et.nom = ue.nom
  AND ue.IDUsager = u.IDUsager
ORDER BY u.nom;

-- 7. Combien de matchs, toutes ligues confondues, ont eu lieu le 14 mars 2016 
-- mais pas au complexe sportif Sportmax?

SELECT COUNT(*) AS NombreMatchs
FROM SPORTSDB.Match m NATURAL JOIN SPORTSDB.MatchSaison ms
WHERE m.date = DATE'2016-03-14' AND m.lieu <> 'Sportmax, Ottawa';

-- 8. Combien de joueurs sont inscrits à la fois à une équipe dans une 
-- ligue de basketball et une équipe dans une ligue de soccer?

SELECT COUNT(*) AS NombreJoueurs
FROM SPORTSDB.Sport s, SPORTSDB.Ligue l, SPORTSDB.Equipe e
WHERE s.nom IN ('Basketball', 'Soccer')
  AND s.IDSport = l.IDSport
  AND e.IDLigue = l.IDLigue;
 
-- 9. À quelle date est-ce que le gestionnaire de léquipe «Titans» de la 
-- ligue L040 a effectué le paiement pour la saison débutant le 12 janvier 2016?

SELECT p.datePaiement
FROM SPORTSDB.Paiement p, SPORTSDB.Saison s
WHERE p.IDSaison = s.IDSaison 
  AND p.IDLigue = 'L040' AND p.nom = 'Titans'
  AND s.dateCommencement = DATE'2016-01-12'
  AND s.IDLigue = p.IDLigue;


-- 10. Inscrire le joueur «John Smith» à léquipe «Lions» de la ligue L007.

INSERT INTO SPORTSDB.Usager VALUES('U0019', 'John', 'Smith', 'jsmith@gmail.com');
INSERT INTO SPORTSDB.UsagerEquipe VALUES('U0019', 'L007', 'Lions');

-- 11. Supprimer lusager «Émilie Jones» de lorganisation.

DELETE FROM SPORTSDB.Usager
WHERE nom = 'Jones' AND prenom = 'Emilie';


-- 12. Modifier le nom de léquipe «Fonceurs» de la ligue L022.

UPDATE SPORTSDB.Equipe
SET nom = 'Tortues'
WHERE IDLigue = 'L022' AND nom = 'Fonceurs';