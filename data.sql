INSERT INTO TOURNOIS_SPORTSDB.Employe VALUES('Emp1', 'Merek', 'Orlowski', 'Gestionnaire');
INSERT INTO TOURNOIS_SPORTSDB.Employe VALUES('Emp2', 'Karim', 'Ben Hassine', 'Arbitre');
INSERT INTO TOURNOIS_SPORTSDB.Gestionnaire VALUES('Emp1', '(705) 471-8331', 'merekorlowski@gmail.com');
INSERT INTO TOURNOIS_SPORTSDB.Arbitre VALUES('Emp2', 3);
INSERT INTO TOURNOIS_SPORTSDB.Sport VALUES('Sp1', 'Soccer', 10, 12);
INSERT INTO TOURNOIS_SPORTSDB.Sport VALUES('Sp2', 'Hockey', 10, 12);
INSERT INTO TOURNOIS_SPORTSDB.Ligue VALUES('L1', 'Sp1', 'C');
INSERT INTO TOURNOIS_SPORTSDB.Usager VALUES('U1', 'Merek', 'Orlowski', 'merekorlowski@gmail.com');
INSERT INTO TOURNOIS_SPORTSDB.Usager VALUES('U2', 'Merek', 'Orlowski', 'merekorlowski@gmail.com');
INSERT INTO TOURNOIS_SPORTSDB.Usager VALUES('U3', 'Merek', 'Orlowski', 'merekorlowski@gmail.com');
INSERT INTO TOURNOIS_SPORTSDB.Usager VALUES('U4', 'Merek', 'Orlowski', 'merekorlowski@gmail.com');
INSERT INTO TOURNOIS_SPORTSDB.Usager VALUES('U5', 'Merek', 'Orlowski', 'merekorlowski@gmail.com');
INSERT INTO TOURNOIS_SPORTSDB.Usager VALUES('U6', 'Merek', 'Orlowski', 'merekorlowski@gmail.com');
INSERT INTO TOURNOIS_SPORTSDB.Usager VALUES('U7', 'Merek', 'Orlowski', 'merekorlowski@gmail.com');
INSERT INTO TOURNOIS_SPORTSDB.Usager VALUES('U8', 'Merek', 'Orlowski', 'merekorlowski@gmail.com');
INSERT INTO TOURNOIS_SPORTSDB.Usager VALUES('U9', 'Merek', 'Orlowski', 'merekorlowski@gmail.com');
INSERT INTO TOURNOIS_SPORTSDB.Usager VALUES('U10', 'Merek', 'Orlowski', 'merekorlowski@gmail.com');
INSERT INTO TOURNOIS_SPORTSDB.Gerant VALUES('U1', 'Diplome');
INSERT INTO TOURNOIS_SPORTSDB.Equipe VALUES('Equ1', 'Équipe 1', FALSE, 'U1', 'L1');
INSERT INTO TOURNOIS_SPORTSDB.Usager VALUES('U11', 'Merek', 'Orlowski', 'merekorlowski@gmail.com');
INSERT INTO TOURNOIS_SPORTSDB.Usager VALUES('U12', 'Merek', 'Orlowski', 'merekorlowski@gmail.com');
INSERT INTO TOURNOIS_SPORTSDB.Usager VALUES('U13', 'Merek', 'Orlowski', 'merekorlowski@gmail.com');
INSERT INTO TOURNOIS_SPORTSDB.Usager VALUES('U14', 'Merek', 'Orlowski', 'merekorlowski@gmail.com');
INSERT INTO TOURNOIS_SPORTSDB.Usager VALUES('U15', 'Merek', 'Orlowski', 'merekorlowski@gmail.com');
INSERT INTO TOURNOIS_SPORTSDB.Usager VALUES('U16', 'Merek', 'Orlowski', 'merekorlowski@gmail.com');
INSERT INTO TOURNOIS_SPORTSDB.Usager VALUES('U17', 'Merek', 'Orlowski', 'merekorlowski@gmail.com');
INSERT INTO TOURNOIS_SPORTSDB.Usager VALUES('U18', 'Merek', 'Orlowski', 'merekorlowski@gmail.com');
INSERT INTO TOURNOIS_SPORTSDB.Usager VALUES('U19', 'Merek', 'Orlowski', 'merekorlowski@gmail.com');
INSERT INTO TOURNOIS_SPORTSDB.Usager VALUES('U20', 'Merek', 'Orlowski', 'merekorlowski@gmail.com');
INSERT INTO TOURNOIS_SPORTSDB.Gerant VALUES('U11', 'Diplome');
INSERT INTO TOURNOIS_SPORTSDB.Equipe VALUES('Equ2', 'Équipe 2', FALSE, 'U11', 'L1');
INSERT INTO TOURNOIS_SPORTSDB.Saison VALUES('S1', 'L1', (to_date('2017-04-01', 'YYYY-MM-DD')), (to_date('2017-04-03', 'YYYY-MM-DD')), (to_date('2017-07-3', 'YYYY-MM-DD')), 10);
INSERT INTO TOURNOIS_SPORTSDB.Match VALUES('M1', (to_date('2017-04-03', 'YYYY-MM-DD')), '13:00', '193 First Ave., Ottawa', 'S1');
INSERT INTO TOURNOIS_SPORTSDB.Tournoi VALUES('T1', 'Diabetes', '0', (to_date('2017-05-01', 'YYYY-MM-DD')), (to_date('2017-06-01', 'YYYY-MM-DD')), 'Sp1');
INSERT INTO TOURNOIS_SPORTSDB.Tournoi VALUES('T2', 'Cancer', '0', (to_date('2017-07-01', 'YYYY-MM-DD')), (to_date('2017-08-01', 'YYYY-MM-DD')), 'Sp2');

INSERT INTO TOURNOIS_SPORTSDB.GestionnaireLigue VALUES('Emp1', 'L1');
INSERT INTO TOURNOIS_SPORTSDB.ArbitreLigue VALUES('Emp2', 'L1');
INSERT INTO TOURNOIS_SPORTSDB.ArbitreSport VALUES('Emp2', 'Sp1');
INSERT INTO TOURNOIS_SPORTSDB.UsagerSport VALUES('U1', 'Sp1');
INSERT INTO TOURNOIS_SPORTSDB.UsagerEquipe VALUES('U1', 'Equ1');
INSERT INTO TOURNOIS_SPORTSDB.EquipeSaison VALUES('Equ1', 'S1');
INSERT INTO TOURNOIS_SPORTSDB.ArbitreMatch VALUES('Emp2', 'M1');
INSERT INTO TOURNOIS_SPORTSDB.EquipeMatch VALUES('Equ1', 'M1', 4);
INSERT INTO TOURNOIS_SPORTSDB.EquipeMatch VALUES('Equ2', 'M1', 3);





