'use strict';

const express = require('express');
const router = express.Router();
const pg = require('pg');

const config = require('../config');

const connectionString = process.env.DATABASE_URL || config.dbUrl;

router.get('/usagers', (req, res, next) => {

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
      FROM TOURNOIS_SPORTSDB.Usager 
      WHERE nom LIKE '%${req.query.query}%' OR prenom LIKE '%${req.query.query}'
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

router.get('/usagers/gerants', (req, res, next) => {

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
      FROM TOURNOIS_SPORTSDB.Usager NATURAL JOIN TOURNOIS_SPORTSDB.Gerant
      WHERE idusager NOT IN (
        SELECT idusager
        FROM TOURNOIS_SPORTSDB.UsagerEquipe
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

router.post('/usager', (req, res, next) => {

  pg.connect(connectionString, (err, client, done) => {

    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    let queryText = `
      INSERT 
      INTO TOURNOIS_SPORTSDB.Usager(prenom, nom, courriel, numtel)
      VALUES (
        '${req.body.prenom}', 
        '${req.body.nom}', 
        '${req.body.courriel}',
        '${req.body.numtel}'
      );
    `;

    if (req.body.diplomesportif) {
      queryText += `
        INSERT 
        INTO TOURNOIS_SPORTSDB.Gerant(diplomesportif)
        VALUES (
          '${req.body.diplomesportif}'
        );
      `;
    }

    const query = client.query(queryText);
    
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(req.body);
    });

  });
});

router.delete('/usager', (req, res, next) => {

  pg.connect(connectionString, (err, client, done) => {

    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    const query = client.query(`
      DELETE 
      FROM TOURNOIS_SPORTSDB.Usager 
      WHERE idusager = '${req.body.idusager}'
    `);
    
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.send();
    });

  });
});

router.put('/usager', (req, res, next) => {

  pg.connect(connectionString, (err, client, done) => {

    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    const query = client.query(`
      UPDATE 
      TOURNOIS_SPORTSDB.Usager
      SET
        prenom = '${req.body.prenom}', 
        nom = '${req.body.nom}', 
        courriel = '${req.body.courriel}',
        numtel = '${req.body.numtel}'
      WHERE idusager = '${req.body.idusager}'
    `);
    
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(req.body);
    });

  });
});

module.exports = router;
