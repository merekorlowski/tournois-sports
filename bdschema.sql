﻿DROP SCHEMA IF EXISTS TOURNOIS_SPORTSDB CASCADE;
CREATE SCHEMA TOURNOIS_SPORTSDB;

CREATE TABLE IF NOT EXISTS TOURNOIS_SPORTSDB.Employe (
	IDEmploye	VARCHAR(15) NOT NULL,
	prenom		VARCHAR(60) NOT NULL,
	nom			VARCHAR(60) NOT NULL,
	role		VARCHAR(60) NOT NULL,
	PRIMARY KEY (IDEmploye)
);

CREATE TABLE IF NOT EXISTS TOURNOIS_SPORTSDB.Gestionnaire (
	IDEmploye	VARCHAR(15) NOT NULL,
	numTel		VARCHAR(15),
	courriel	VARCHAR(60),
	PRIMARY KEY (IDEmploye),
	FOREIGN KEY (IDEmploye) REFERENCES TOURNOIS_SPORTSDB.Employe(IDEmploye) ON UPDATE CASCADE ON DELETE CASCADE --herite Employe
);

CREATE TABLE IF NOT EXISTS TOURNOIS_SPORTSDB.Arbitre (
	IDEmploye	VARCHAR(15) NOT NULL,
	nbrAnnees	INTEGER NOT NULL,
	PRIMARY KEY (IDEmploye),
	FOREIGN KEY (IDEmploye) REFERENCES TOURNOIS_SPORTSDB.Employe(IDEmploye) ON UPDATE CASCADE ON DELETE CASCADE --herite Employe
);

CREATE TABLE IF NOT EXISTS TOURNOIS_SPORTSDB.Sport (
	IDSport			VARCHAR(15) NOT NULL,
	nom				VARCHAR(60) NOT NULL,
	description		VARCHAR(100),
	nbrMinJoueurs	INTEGER NOT NULL,
	nbrMaxJoueurs	INTEGER NOT NULL,
	PRIMARY KEY (IDSport)
);

CREATE TABLE IF NOT EXISTS TOURNOIS_SPORTSDB.Ligue (
	IDLigue				VARCHAR(15) NOT NULL,
	IDSport				VARCHAR(15) NOT NULL,
	niveauDifficulte	CHAR(1) CHECK(niveauDifficulte IN ('R','C')),
	PRIMARY KEY (IDLigue),
	FOREIGN KEY (IDSport) REFERENCES TOURNOIS_SPORTSDB.Sport(IDSport) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS TOURNOIS_SPORTSDB.GestionnaireLigue (
	IDEmploye	VARCHAR(15) NOT NULL,
	IDLigue		VARCHAR(15) NOT NULL,
	PRIMARY KEY (IDEmploye,IDLigue),
	FOREIGN KEY (IDEmploye) REFERENCES TOURNOIS_SPORTSDB.Gestionnaire(IDEmploye) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (IDLigue) REFERENCES TOURNOIS_SPORTSDB.Ligue(IDLigue) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS TOURNOIS_SPORTSDB.ArbitreLigue (
	IDEmploye	VARCHAR(15) NOT NULL,
	IDLigue		VARCHAR(15) NOT NULL,
	PRIMARY KEY (IDEmploye,IDLigue),
	FOREIGN KEY (IDEmploye) REFERENCES TOURNOIS_SPORTSDB.Arbitre(IDEmploye) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (IDLigue) REFERENCES TOURNOIS_SPORTSDB.Ligue(IDLigue) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS TOURNOIS_SPORTSDB.ArbitreSport (
	IDEmploye		VARCHAR(15) NOT NULL,
	IDSport			VARCHAR(15) NOT NULL,
	PRIMARY KEY (IDEmploye, IDSport),
	FOREIGN KEY (IDEmploye) REFERENCES TOURNOIS_SPORTSDB.Arbitre(IDEmploye) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (IDSport) REFERENCES TOURNOIS_SPORTSDB.Sport(IDSport) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS TOURNOIS_SPORTSDB.Usager (
	IDUsager	VARCHAR(15) NOT NULL,
	prenom		VARCHAR(60) NOT NULL,
	nom			VARCHAR(60) NOT NULL,
	courriel	VARCHAR(60) NOT NULL,
	numTel		VARCHAR(15),
	PRIMARY KEY (IDUsager)
);

CREATE TABLE IF NOT EXISTS TOURNOIS_SPORTSDB.UsagerSport (
	IDUsager		VARCHAR(15) NOT NULL,
	IDSport			VARCHAR(15) NOT NULL,
	PRIMARY KEY (IDUsager, IDSport),
	FOREIGN KEY (IDUsager) REFERENCES TOURNOIS_SPORTSDB.Usager(IDUsager) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (IDSport) REFERENCES TOURNOIS_SPORTSDB.Sport(IDSport) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS TOURNOIS_SPORTSDB.Gerant (
	IDUsager		VARCHAR(15) NOT NULL,
	diplomeSportif	VARCHAR(60) NOT NULL,
	PRIMARY KEY (IDUsager),
	FOREIGN KEY (IDUsager) REFERENCES TOURNOIS_SPORTSDB.Usager(IDUsager) ON UPDATE CASCADE ON DELETE CASCADE --herite usager
);

-- A REVOIR: LE STATUT DE FORFAIT DEPEND DU NOMBRE MIN ET MAX DE JOUEURS ET LE NOMBRE D'USAGERS ACTUELS
-- SI LE NOMBRE DE JOUEIRS DANS L'EQUIPE EST MOINS QUE LE NOMBREMIN, DONC L'EQUIPE EST EN FORFAIT
CREATE TABLE IF NOT EXISTS TOURNOIS_SPORTSDB.Equipe (
	IDEquipe		VARCHAR(15) NOT NULL,
	nom				VARCHAR(60) NOT NULL,
	statutDeForfait	BOOLEAN DEFAULT FALSE,
	IDUsager		VARCHAR(15) NOT NULL,
	IDLigue			VARCHAR(15) NOT NULL,
	PRIMARY KEY (IDEquipe),
	FOREIGN KEY (IDUsager) REFERENCES TOURNOIS_SPORTSDB.Gerant(IDUsager) ON UPDATE CASCADE ON DELETE CASCADE, --relation gerant-equipe
	FOREIGN KEY (IDLigue) REFERENCES TOURNOIS_SPORTSDB.Ligue(IDLigue) ON UPDATE CASCADE ON DELETE CASCADE --relation equipe-ligue
);

CREATE TABLE IF NOT EXISTS TOURNOIS_SPORTSDB.UsagerEquipe (
	IDUsager	VARCHAR(15) NOT NULL,
	IDEquipe	VARCHAR(15) NOT NULL,
	PRIMARY KEY (IDUsager, IDEquipe),
	FOREIGN KEY (IDUsager) REFERENCES TOURNOIS_SPORTSDB.Usager(IDUsager) ON UPDATE CASCADE ON DELETE CASCADE ,
	FOREIGN KEY (IDEquipe) REFERENCES TOURNOIS_SPORTSDB.Equipe(IDEquipe) ON UPDATE CASCADE ON DELETE CASCADE 
);

CREATE TABLE IF NOT EXISTS TOURNOIS_SPORTSDB.Saison (
	IDSaison			VARCHAR(15) NOT NULL,
	IDLigue				VARCHAR(15) NOT NULL,
	dateLimitePaiement	DATE NOT NULL,
	dateCommencement	DATE NOT NULL,
	dateFin				DATE NOT NULL,
	nbrMatchs			INTEGER NOT NULL,
	PRIMARY KEY (IDSaison),
	FOREIGN KEY (IDLigue) REFERENCES TOURNOIS_SPORTSDB.Ligue(IDLigue) ON UPDATE CASCADE ON DELETE CASCADE 
);

CREATE TABLE IF NOT EXISTS TOURNOIS_SPORTSDB.EquipeSaison (
	IDEquipe	VARCHAR(15) NOT NULL,
	IDSaison	VARCHAR(15) NOT NULL,
	PRIMARY KEY (IDEquipe, IDSaison),
	FOREIGN KEY (IDEquipe) REFERENCES TOURNOIS_SPORTSDB.Equipe(IDEquipe) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (IDSaison) REFERENCES TOURNOIS_SPORTSDB.Saison(IDSaison) ON UPDATE CASCADE ON DELETE CASCADE
);

--COMMENT FAIRE UN ATTRIBUT DERIVE? /fondsAccumules est calculee a partir des tables de CommanditaireTournoi
-- et EquipeTournoi (SOMME DES INSCRIPTIONS ET CONTRIBUTIONS)
CREATE TABLE IF NOT EXISTS TOURNOIS_SPORTSDB.Tournoi (
	IDTournoi		VARCHAR(15) NOT NULL,
	oeuvreCharite	VARCHAR(60) NOT NULL,
	fondsAccumules	NUMERIC(10, 2) NOT NULL, --A REVOIR
	dateDebut		DATE NOT NULL,
	dateFin			DATE NOT NULL,
	IDSport			VARCHAR(15) NOT NULL,
	PRIMARY KEY (IDTournoi),
	FOREIGN KEY (IDSport) REFERENCES TOURNOIS_SPORTSDB.Sport(IDSport) ON UPDATE CASCADE ON DELETE CASCADE --relation tournoi-sport
);

CREATE TABLE IF NOT EXISTS TOURNOIS_SPORTSDB.Match (
	IDMatch			VARCHAR(15) NOT NULL,
	date			DATE NOT NULL,
	heure			TIME NOT NULL,
	lieu			VARCHAR(60) NOT NULL,
	PRIMARY KEY (IDMatch)
);

CREATE TABLE IF NOT EXISTS TOURNOIS_SPORTSDB.MatchTournoi (
	IDMatch			VARCHAR(15) NOT NULL,
	IDTournoi		VARCHAR(15) NOT NULL,
	PRIMARY KEY (IDMatch),
	FOREIGN KEY (IDMatch) REFERENCES TOURNOIS_SPORTSDB.Match(IDMatch) ON UPDATE CASCADE ON DELETE CASCADE, --relation match-tournoi
	FOREIGN KEY (IDTournoi) REFERENCES TOURNOIS_SPORTSDB.Tournoi(IDTournoi) ON UPDATE CASCADE ON DELETE CASCADE --relation match-tournoi
);

CREATE TABLE IF NOT EXISTS TOURNOIS_SPORTSDB.MatchSaison (
	IDMatch			VARCHAR(15) NOT NULL,
	IDSaison		VARCHAR(15) NOT NULL,
	PRIMARY KEY (IDMatch),
	FOREIGN KEY (IDMatch) REFERENCES TOURNOIS_SPORTSDB.Match(IDMatch) ON UPDATE CASCADE ON DELETE CASCADE, --relation match-tournoi
	FOREIGN KEY (IDSaison) REFERENCES TOURNOIS_SPORTSDB.Saison(IDSaison) ON UPDATE CASCADE ON DELETE CASCADE --relation match-tournoi
);

CREATE TABLE IF NOT EXISTS TOURNOIS_SPORTSDB.ArbitreMatch (
	IDEmploye	VARCHAR(15) NOT NULL,
	IDMatch		VARCHAR(15) NOT NULL,
	PRIMARY KEY (IDEmploye, IDMatch),
	FOREIGN KEY (IDEmploye) REFERENCES TOURNOIS_SPORTSDB.Arbitre(IDEmploye) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (IDMatch) REFERENCES TOURNOIS_SPORTSDB.Match(IDMatch) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS TOURNOIS_SPORTSDB.EquipeMatch (
	IDEquipe	VARCHAR(15) NOT NULL,
	IDMatch		VARCHAR(15) NOT NULL,
	nbrPoints	INTEGER DEFAULT 0,
	PRIMARY KEY (IDEquipe, IDMatch),
	FOREIGN KEY (IDEquipe) REFERENCES TOURNOIS_SPORTSDB.Equipe(IDEquipe) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (IDMatch) REFERENCES TOURNOIS_SPORTSDB.Match(IDMatch) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS TOURNOIS_SPORTSDB.Paiement (
	IDUsager		VARCHAR(15) NOT NULL,
	IDEquipe		VARCHAR(15) NOT NULL,
	IDSaison		VARCHAR(15) NOT NULL,
	datePaiement	DATE NOT NULL,
	carteCredit		NUMERIC(4,0) NOT NULL,
	PRIMARY KEY (IDUsager, IDEquipe, IDSaison),
	FOREIGN KEY (IDUsager) REFERENCES TOURNOIS_SPORTSDB.Gerant(IDUsager) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (IDEquipe) REFERENCES TOURNOIS_SPORTSDB.Equipe(IDEquipe) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (IDSaison) REFERENCES TOURNOIS_SPORTSDB.Saison(IDSaison) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS TOURNOIS_SPORTSDB.Commanditaire (
	IDCommanditaire		VARCHAR(15) NOT NULL,
	nom					VARCHAR(60) NOT NULL,
	numTel				VARCHAR(15)	NOT NULL,
	PRIMARY KEY (IDCommanditaire)
);

CREATE TABLE IF NOT EXISTS TOURNOIS_SPORTSDB.CommanditaireTournoi (
	IDCommanditaire		VARCHAR(15) NOT NULL,
	IDTournoi			VARCHAR(15) NOT NULL,
	contribution		NUMERIC(10, 2) NOT NULL, --SOMME D'ARGENT
	PRIMARY KEY (IDCommanditaire, IDTournoi),
	FOREIGN KEY (IDCommanditaire) REFERENCES TOURNOIS_SPORTSDB.Commanditaire(IDCommanditaire) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (IDTournoi) REFERENCES TOURNOIS_SPORTSDB.Tournoi(IDTournoi) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS TOURNOIS_SPORTSDB.EquipeTournoi (
	IDEquipe		VARCHAR(15) NOT NULL,
	IDTournoi		VARCHAR(15) NOT NULL,
	inscription		NUMERIC(10, 2) NOT NULL, --SOMME D'ARGENT
	PRIMARY KEY (IDEquipe, IDTournoi),
	FOREIGN KEY (IDEquipe) REFERENCES TOURNOIS_SPORTSDB.Equipe(IDEquipe) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (IDTournoi) REFERENCES TOURNOIS_SPORTSDB.Tournoi(IDTournoi) ON DELETE CASCADE ON UPDATE CASCADE
);