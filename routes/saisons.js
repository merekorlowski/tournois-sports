'use strict';

const express = require('express');
const router = express.Router();
const pg = require('pg');

const config = require('../config');

const connectionString = process.env.DATABASE_URL || config.dbUrl;

router.get('/saisons', (req, res, next) => {

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
      FROM SPORTSDB.Saison
      WHERE idligue = '${req.query.idligue}'
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

router.get('/saison', (req, res, next) => {

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
      FROM SPORTSDB.Saison
      WHERE idsaison = '${req.query.idsaison}'
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

router.delete('/saison', (req, res, next) => {

  pg.connect(connectionString, (err, client, done) => {

    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    const query = client.query(`
      DELETE
      FROM SPORTSDB.Saison
      WHERE idsaison = '${req.body.idsaison}'
    `);

    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json();
    });

  });
});

router.put('/saison', (req, res, next) => {

  pg.connect(connectionString, (err, client, done) => {

    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    const query = client.query(`
      UPDATE
      SPORTSDB.Saison
      SET
        datelimitepaiement = (to_date('${req.body.datelimitepaiement}', 'YYYY-MM-DD')),
        datecommencement = (to_date('${req.body.datecommencement}', 'YYYY-MM-DD')),
        datefin = (to_date('${req.body.datefin}', 'YYYY-MM-DD'))
      WHERE idsaison = '${req.body.idsaison}'
    `);

    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json();
    });

  });
});

router.get('/saison/matchs', (req, res, next) => {

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
        FROM SPORTSDB.MatchSaison
        WHERE idsaison = '${req.query.idsaison}'
      )
      ORDER BY date;
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

router.post('/saison/match', (req, res, next) => {

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
      INTO SPORTSDB.MatchSaison
      VALUES (
        '${req.body.idmatch}',
        '${req.body.idsaison}'
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

router.delete('/saison/match', (req, res, next) => {

  const results = [];

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
      WHERE idmatch = '${req.body.idmatch}';
    `);

    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });

  });
});

module.exports = router;
