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
      FROM TOURNOIS_SPORTSDB.Tournoi
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
      FROM TOURNOIS_SPORTSDB.Tournoi
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
      FROM TOURNOIS_SPORTSDB.Commanditaire
      WHERE idcommanditaire IN (
        SELECT idcommanditaire
        FROM TOURNOIS_SPORTSDB.CommanditaireTournoi
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
      FROM TOURNOIS_SPORTSDB.CommanditaireTournoi
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
      FROM TOURNOIS_SPORTSDB.Match
      WHERE idmatch IN (
        SELECT idmatch
        FROM TOURNOIS_SPORTSDB.MatchTournoi
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
      INTO TOURNOIS_SPORTSDB.Tournoi
      VALUES (
        '${req.body.idtournoi}',
        '${req.body.oeuvrecharite}',
        '${req.body.fondsaccumules}',
        '${req.body.datedebut}',
        '${req.body.datefin}',
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

    const query = client.query(`
      UPDATE 
      TOURNOIS_SPORTSDB.Tournoi
      SET
        oeuvrecharite = '${req.body.oeuvrecharite}',
        datedebut = '${req.body.datedebut}',
        datefin = '${req.body.datefin}'
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
      TOURNOIS_SPORTSDB.Tournoi
      WHERE idtournoi = '${req.body.idtournoi}';
    `);

    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json();
    });

  });
});

module.exports = router;
