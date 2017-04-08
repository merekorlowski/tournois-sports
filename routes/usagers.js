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
      FROM SPORTSDB.Usager 
      WHERE LOWER(nom) LIKE LOWER('%${req.query.query}%') OR LOWER(prenom) LIKE LOWER('%${req.query.query}%')
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
      FROM SPORTSDB.Usager NATURAL JOIN SPORTSDB.Gerant
      WHERE idusager NOT IN (
        SELECT idusager
        FROM SPORTSDB.UsagerEquipe
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
      INTO SPORTSDB.Usager
      VALUES (
        '${req.body.idusager}',
        '${req.body.prenom}', 
        '${req.body.nom}', 
        '${req.body.courriel}',
        '${req.body.numtel}'
      );
    `;

    if (req.body.diplomesportif) {
      queryText += `
        INSERT 
        INTO SPORTSDB.Gerant
        VALUES (
          '${req.body.idusager}',
          '${req.body.diplomesportif}'
        );
      `;
    }

    const query = client.query(queryText);
    
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json();
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
      FROM SPORTSDB.Usager 
      WHERE idusager = '${req.body.idusager}'
    `);
    
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json();
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

    let queryText = `
      UPDATE 
      SPORTSDB.Usager
      SET
        prenom = '${req.body.prenom}', 
        nom = '${req.body.nom}', 
        courriel = '${req.body.courriel}',
        numtel = '${req.body.numtel}'
      WHERE idusager = '${req.body.idusager}';
    `;

    if (req.body.diplomesportif) {
      queryText += `
        UPDATE
        SPORTSDB.Gerant
        SET 
          diplomesportif = '${req.body.diplomesportif}'
        WHERE idusager = '${req.body.idusager}';
      `;
    }

    const query = client.query(queryText);
    
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json();
    });

  });
});

module.exports = router;
