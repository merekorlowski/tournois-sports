'use strict';

const express = require('express');
const router = express.Router();
const pg = require('pg');

const config = require('../config');

const connectionString = process.env.DATABASE_URL || config.dbUrl;

router.get('/employes', (req, res, next) => {

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
      FROM SPORTSDB.Employe NATURAL LEFT OUTER JOIN SPORTSDB.Gestionnaire NATURAL LEFT OUTER JOIN SPORTSDB.Arbitre
      WHERE nom LIKE '%${req.query.query}%' OR prenom LIKE '%${req.query.query}' OR role LIKE '%${req.query.query}'
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

router.post('/employe', (req, res, next) => {

  pg.connect(connectionString, (err, client, done) => {

    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    let queryText = `
      INSERT 
      INTO SPORTSDB.Employe
      VALUES (
        '${req.body.idemploye}',
        '${req.body.prenom}',
        '${req.body.nom}',
        '${req.body.role}'
      );
    `;

    if (req.body.role === 'Arbitre') {
      queryText += `
        INSERT 
        INTO SPORTSDB.Arbitre
        VALUES (
          '${req.body.idemploye}'
        );
      `;
    } else if (req.body.role === 'Gestionnaire') {
      queryText += `
        INSERT 
        INTO SPORTSDB.Gestionnaire
        VALUES (
          '${req.body.idemploye}',
          '${req.body.numtel}',
          '${req.body.courriel}'
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

router.put('/employe', (req, res, next) => {

  pg.connect(connectionString, (err, client, done) => {

    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    let queryText = `
      UPDATE 
      SPORTSDB.Employe
      SET
        prenom = '${req.body.prenom}',
        nom = '${req.body.nom}',
        role = '${req.body.role}'
      WHERE idemploye = '${req.body.idemploye}'
      ;
    `;

    if (req.body.role === 'Arbitre') {
      queryText += `
        UPDATE 
        SPORTSDB.ArbitreSport
        SET
          nbrannees = '${req.body.nbrannees}'
        WHERE idemploye = '${req.body.idemploye}' AND '${req.body.idsport}' = '${req.body.idsport}'
        ;
      `;
    } else if (req.body.role === 'Gestionnaire') {
      queryText += `
        UPDATE 
        SPORTSDB.Gestionnaire
        SET
          numtel = '${req.body.numtel}',
          courriel = '${req.body.courriel}'
        WHERE idemploye = '${req.body.idemploye}'
        ;
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

router.delete('/employe', (req, res, next) => {

  pg.connect(connectionString, (err, client, done) => {

    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    const query = client.query(`
      DELETE 
      FROM SPORTSDB.Employe
      WHERE idemploye = '${req.body.idemploye}'
    `);

    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json();
    });

  });
});

module.exports = router;
