'use strict';

const express = require('express');
const router = express.Router();
const pg = require('pg');

const config = require('../config');

const connectionString = process.env.DATABASE_URL || config.dbUrl;

router.get('/sports', (req, res, next) => {

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
      FROM TOURNOIS_SPORTSDB.Sport
      WHERE nom LIKE '%${req.query.query}%'
      ORDER BY nom ${req.query.sort}
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

router.delete('/sport', (req, res, next) => {

  pg.connect(connectionString, (err, client, done) => {

    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    const query = client.query(`
      DELETE
      FROM TOURNOIS_SPORTSDB.Sport
      WHERE idsport = '${req.body.idsport}'
    `);

    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json();
    });

  });
});

router.post('/sport', (req, res, next) => {

  pg.connect(connectionString, (err, client, done) => {

    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    const query = client.query(`
      INSERT
      INTO TOURNOIS_SPORTSDB.Sport
      VALUES(
        '${req.body.idsport}',
        '${req.body.nom}',
        '${req.body.description}',
        '${req.body.nbrminjoueurs}',
        '${req.body.nbrmaxjoueurs}'
      )
    `);

    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json();
    });

  });
});

router.put('/sport', (req, res, next) => {

  pg.connect(connectionString, (err, client, done) => {

    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    const query = client.query(`
      UPDATE
      TOURNOIS_SPORTSDB.Sport
      SET
        nom = '${req.body.nom}',
        description = '${req.body.description}',
        nbrminjoueurs = '${req.body.nbrminjoueurs}',
        nbrmaxjoueurs = '${req.body.nbrmaxjoueurs}'
      WHERE idsport = '${req.body.idsport}'
    `);

    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json();
    });

  });
});

module.exports = router;
