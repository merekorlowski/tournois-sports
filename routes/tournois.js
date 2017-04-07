'use strict';

const express = require('express');
const router = express.Router();
const pg = require('pg');

const config = require('../config');

const connectionString = process.env.DATABASE_URL || config.dbUrl;

router.get('/tournois', (req, res, next) => {

  const results = [];

  pg.connect(connectionString, (err, client, done) => {

    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    const query = client.query(`
      SELECT * 
      FROM SPORTSDB.Tournoi
      WHERE idsport = '${req.query.idsport}' AND oeuvrecharite LIKE '%${req.query.query}%'
      ORDER BY oeuvrecharite ${req.query.sort}
    `);

    query.on('row', row => {
      results.push(row);
    });

    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });

  });
});

router.get('/tournoi', (req, res, next) => {

  const results = [];

  pg.connect(connectionString, (err, client, done) => {

    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    const query = client.query(`
      SELECT * 
      FROM SPORTSDB.Tournoi
      WHERE idtournoi = '${req.query.idtournoi}'
    `);

    query.on('row', row => {
      results.push(row);
    });

    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });

  });
});

router.get('/tournoi/commanditaires', (req, res, next) => {

  const results = [];

  pg.connect(connectionString, (err, client, done) => {

    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    const query = client.query(`
      SELECT * 
      FROM SPORTSDB.Commanditaire
      WHERE idcommanditaire IN (
        SELECT idcommanditaire
        FROM SPORTSDB.CommanditaireTournoi
        WHERE idtournoi = '${req.query.idtournoi}'
      )
    `);

    query.on('row', row => {
      results.push(row);
    });

    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });

  });
});

router.post('/tournoi/commanditaire', (req, res, next) => {

  pg.connect(connectionString, (err, client, done) => {

    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    const query = client.query(`
      INSERT 
      INTO SPORTSDB.Commanditaire
      VALUES (
        '${req.body.idcommanditaire}',
        '${req.body.nom}',
        '${req.body.numtel}'
      );

      INSERT 
      INTO SPORTSDB.CommanditaireTournoi
      VALUES (
        '${req.body.idcommanditaire}',
        '${req.body.idtournoi}',
        ${req.body.contribution}
      );
    `);

    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json();
    });

  });
});

router.put('/tournoi/commanditaire', (req, res, next) => {

  pg.connect(connectionString, (err, client, done) => {

    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    const query = client.query(`
      SELECT * 
      FROM SPORTSDB.Tournoi
      WHERE idtournoi = '${req.query.idtournoi}'
    `);

    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json();
    });

  });
});

router.delete('/tournoi/commanditaire', (req, res, next) => {

  pg.connect(connectionString, (err, client, done) => {

    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    const query = client.query(`
      DELETE
      FROM SPORTSDB.Commanditaire
      WHERE idcommanditaire = '${req.body.idcommanditaire}'
    `);

    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json();
    });

  });
});

router.get('/tournoi/commanditairetournoi', (req, res, next) => {

  const results = [];

  pg.connect(connectionString, (err, client, done) => {

    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    const query = client.query(`
      SELECT contribution 
      FROM SPORTSDB.CommanditaireTournoi
      WHERE idcommanditaire = '${req.query.idcommanditaire}'
      AND idtournoi = '${req.query.idtournoi}'`
    );

    query.on('row', row => {
      results.push(row);
    });

    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });

  });
});

router.get('/tournoi/matchs', (req, res, next) => {

  const results = [];

  pg.connect(connectionString, (err, client, done) => {

    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    const query = client.query(`
      SELECT * 
      FROM SPORTSDB.Match
      WHERE idmatch IN (
        SELECT idmatch
        FROM SPORTSDB.MatchTournoi
        WHERE idtournoi = '${req.query.idtournoi}'
      )
    `);

    query.on('row', row => {
      results.push(row);
    });

    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });

  });
});

router.post('/tournoi', (req, res, next) => {

  const results = [];

  pg.connect(connectionString, (err, client, done) => {

    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    const query = client.query(`
      INSERT 
      INTO SPORTSDB.Tournoi
      VALUES (
        '${req.body.idtournoi}',
        '${req.body.oeuvrecharite}',
        '${req.body.fondsaccumules}',
        (to_date('${req.body.datedebut}', 'YYYY-MM-DD')),
        (to_date('${req.body.datefin}', 'YYYY-MM-DD')),
        '${req.body.idsport}'
      )
    `);

    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });

  });
});

router.put('/tournoi', (req, res, next) => {

  pg.connect(connectionString, (err, client, done) => {

    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    console.log(JSON.stringify(req.body));

    const query = client.query(`
      UPDATE 
      SPORTSDB.Tournoi
      SET
        oeuvrecharite = '${req.body.oeuvrecharite}',
        datedebut = (to_date('${req.body.datedebut}', 'YYYY-MM-DD')),
        datefin = (to_date('${req.body.datefin}', 'YYYY-MM-DD'))
      WHERE idtournoi = '${req.body.idtournoi}';
    `);

    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json();
    });

  });
});

router.delete('/tournoi', (req, res, next) => {

  pg.connect(connectionString, (err, client, done) => {

    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    const query = client.query(`
      DELETE 
      SPORTSDB.Tournoi
      WHERE idtournoi = '${req.body.idtournoi}';
    `);

    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json();
    });

  });
});

router.get('/tournoi/fondsaccumules', (req, res, next) => {

  const results = [];

  pg.connect(connectionString, (err, client, done) => {

    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    const query = client.query(`
      SELECT fondsaccumules 
      FROM SPORTSDB.Tournoi
      WHERE idtournoi = '${req.query.idtournoi}'`
    );

    query.on('row', row => {
      results.push(row);
    });

    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });

  });
});

router.post('/tournoi/match', (req, res, next) => {

  pg.connect(connectionString, (err, client, done) => {

    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    const query = client.query(`
      INSERT 
      INTO SPORTSDB.Match
      VALUES (
        '${req.body.idmatch}',
        (to_date('${req.body.date}', 'YYYY-MM-DD')),
        '${req.body.heure}',
        '${req.body.lieu}'
      );

      INSERT 
      INTO SPORTSDB.MatchTournoi
      VALUES (
        '${req.body.idmatch}',
        '${req.body.idtournoi}'
      );

      INSERT
      INTO SPORTSDB.EquipeMatch
      VALUES (
        '${req.body.equipes[0].idligue}',
        '${req.body.equipes[0].nom}',
        '${req.body.idmatch}',
        '${req.body.equipes[0].ptsmarques}'
      );

      INSERT
      INTO SPORTSDB.EquipeMatch
      VALUES (
        '${req.body.equipes[1].idligue}',
        '${req.body.equipes[1].nom}',
        '${req.body.idmatch}',
        '${req.body.equipes[1].ptsmarques}'
      );
    `);

    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json();
    });

  });
});

router.put('/tournoi/match', (req, res, next) => {

  pg.connect(connectionString, (err, client, done) => {

    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    const query = client.query(`
      UPDATE 
      SPORTSDB.Match
      SET
        date = (to_date('${req.body.date}', 'YYYY-MM-DD')),
        heure = '${req.body.heure}',
        lieu = '${req.body.lieu}'
      WHERE idmatch = '${req.query.idmatch}'
    `);

    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json();
    });

  });
});

router.delete('/tournoi/match', (req, res, next) => {

  pg.connect(connectionString, (err, client, done) => {

    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    const query = client.query(`
      DELETE
      FROM SPORTSDB.Match
      WHERE idmatch = '${req.body.idmatch}'
    `);

    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json();
    });

  });
});

router.get('/tournoi/equipes', (req, res, next) => {

  const results = [];

  pg.connect(connectionString, (err, client, done) => {

    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    const query = client.query(`
      SELECT *
      FROM SPORTSDB.Equipe
      WHERE idligue IN (
        SELECT idligue
        FROM SPORTSDB.EquipeTournoi
        WHERE idtournoi = '${req.query.idtournoi}'
      ) AND nom IN (
        SELECT nom
        FROM SPORTSDB.EquipeTournoi
        WHERE idtournoi = '${req.query.idtournoi}'
      );
    `);

    query.on('row', row => {
      results.push(row);
    });

    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });

  });
});

module.exports = router;
