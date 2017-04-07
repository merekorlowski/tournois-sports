'use strict';

const express = require('express');
const router = express.Router();
const pg = require('pg');

const config = require('../config');

const connectionString = process.env.DATABASE_URL || config.dbUrl;

router.get('/requete', (req, res, next) => {

  const results = [];

  pg.connect(connectionString, (err, client, done) => {

    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    const query = client.query(`
      SELECT SPORTSDB.requete_${req.query.numero}();
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

router.post('/requete', (req, res, next) => {

  pg.connect(connectionString, (err, client, done) => {

    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    const query = client.query(`
  		SELECT SPORTSDB.requete_${req.body.numero}();
    `);
    
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json({message: `Requete ${req.body.numero} executé avec succès.`});
    });

  });
});

router.delete('/requete', (req, res, next) => {

  pg.connect(connectionString, (err, client, done) => {

    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    const query = client.query(`
      SELECT SPORTSDB.requete_${req.body.numero}();
    `);
    
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json({message: `Requete ${req.body.numero} executé avec succès.`});
    });

  });
});

router.put('/requete', (req, res, next) => {

  pg.connect(connectionString, (err, client, done) => {

    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    const query = client.query(`
      SELECT SPORTSDB.requete_${req.body.numero}();
    `);
    
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json({message: `Requete ${req.body.numero} executé avec succès.`});
    });

  });
});

module.exports = router;
