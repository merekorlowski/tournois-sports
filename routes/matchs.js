'use strict';

const express = require('express');
const router = express.Router();
const pg = require('pg');

const config = require('../config');

const connectionString = process.env.DATABASE_URL || config.dbUrl;

router.get('/match/equipes', (req, res, next) => {

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
        FROM SPORTSDB.EquipeMatch
        WHERE idmatch = '${req.query.idmatch}'
      ) AND nom IN (
        SELECT nom
        FROM SPORTSDB.EquipeMatch
        WHERE idmatch = '${req.query.idmatch}'
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

router.get('/match/equipe/points', (req, res, next) => {

  const results = [];

  pg.connect(connectionString, (err, client, done) => {

    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    const query = client.query(`
      SELECT ptsmarques 
      FROM SPORTSDB.EquipeMatch
      WHERE idmatch = '${req.query.idmatch}' AND idligue = '${req.query.idligue}' AND nom = '${req.query.nom}'
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


router.delete('/match', (req, res, next) => {

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

router.put('/match', (req, res, next) => {

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
      WHERE idmatch = '${req.body.idmatch}';

      UPDATE
      SPORTSDB.EquipeMatch
      SET
        ptsmarques = ${req.body.equipes[0].ptsmarques}
      WHERE idmatch = '${req.body.idmatch}' AND idligue = '${req.body.equipes[0].idligue}' AND nom = '${req.body.equipes[0].nom}';

      UPDATE
      SPORTSDB.EquipeMatch
      SET
        ptsmarques = ${req.body.equipes[1].ptsmarques}
      WHERE idmatch = '${req.body.idmatch}' AND idligue = '${req.body.equipes[1].idligue}' AND nom = '${req.body.equipes[1].nom}';
    `);

    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json();
    });

  });
});

module.exports = router;
