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
      FROM TOURNOIS_SPORTSDB.Employe NATURAL LEFT OUTER JOIN TOURNOIS_SPORTSDB.Gestionnaire NATURAL LEFT OUTER JOIN TOURNOIS_SPORTSDB.Arbitre
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

  const results = [];

  pg.connect(connectionString, (err, client, done) => {

    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    let queryText = `
      INSERT 
      INTO TOURNOIS_SPORTSDB.Employe
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
        INTO TOURNOIS_SPORTSDB.Arbitre
        VALUES (
          '${req.body.idemploye}',
          '${req.body.nbrannees}'
        );
      `;
    } else if (req.body.role === 'Gestionnaire') {
      queryText += `
        INSERT 
        INTO TOURNOIS_SPORTSDB.Gestionnaire
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
      return res.json(results);
    });

  });
});

router.put('/employe', (req, res, next) => {

  const results = [];

  pg.connect(connectionString, (err, client, done) => {

    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    let queryText = `
      UPDATE 
      TOURNOIS_SPORTSDB.Employe
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
        TOURNOIS_SPORTSDB.Arbitre
        SET
          nbrannees = '${req.body.nbrannees}'
        WHERE idemploye = '${req.body.idemploye}'
        ;
      `;
    } else if (req.body.role === 'Gestionnaire') {
      queryText += `
        UPDATE 
        TOURNOIS_SPORTSDB.Gestionnaire
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
      return res.json(results);
    });

  });
});

router.delete('/employe', (req, res, next) => {

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
      FROM TOURNOIS_SPORTSDB.Employe
      WHERE idemploye = '${req.body.idemploye}'
    `);

    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });

  });
});

module.exports = router;
