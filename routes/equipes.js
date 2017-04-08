'use strict';

/**
 * Charger les dépendances
 */

const express = require('express');
const router = express.Router();
const pg = require('pg');

/**
 * Definir le URL pour le base de données
 */

const config = require('../config');
const connectionString = process.env.DATABASE_URL || config.dbUrl;

/**
 * Retourner tous les équipes qui match la valeur de recherche
 */

router.get('/equipes', (req, res, next) => {

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
      WHERE LOWER(nom) LIKE LOWER('%${req.query.query}%')
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

/**
 * Retourner une équipe spécifique
 */

router.get('/equipe', (req, res, next) => {

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
      WHERE idligue = '${req.query.idligue}' AND nom = '${req.query.nom}'
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

/**
 * Modifier une équipe
 */

router.put('/equipe', (req, res, next) => {

  pg.connect(connectionString, (err, client, done) => {

    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    const query = client.query(`
      UPDATE 
      SPORTSDB.Equipe
      SET
        nom = '${req.body.nom}'
      WHERE nom = '${req.body.nomOriginal}' AND idligue = '${req.body.idligue}'
    `);

    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json();
    });

  });
});

/**
 * Retourner tous les joueurs d'une équipe
 */

router.get('/equipe/joueurs', (req, res, next) => {

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
      WHERE idusager IN (
        SELECT idusager
        FROM SPORTSDB.UsagerEquipe
        WHERE idligue = '${req.query.idligue}' AND nom = '${req.query.nom}'
      ) AND idusager NOT IN (
        SELECT idusager
        FROM SPORTSDB.Gerant
      ) AND (LOWER(nom) LIKE LOWER('%${req.query.query}%') OR LOWER(prenom) LIKE LOWER('%${req.query.query}%')
      ORDER BY nom ${req.query.sort};
    `);

    query.on('row', row => {
      results.push(row);
    });

    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      console.log(JSON.stringify(results));
      return res.json(results);
    });

  });
});

/**
 * Retourner le gérant d'une équipe
 */

router.get('/equipe/gerant', (req, res, next) => {

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
      FROM SPORTSDB.Gerant NATURAL JOIN SPORTSDB.Usager
      WHERE idusager IN (
        SELECT idusager
        FROM SPORTSDB.UsagerEquipe
        WHERE idligue = '${req.query.idligue}' AND nom = '${req.query.nom}'
      )
    `);

    query.on('row', row => {
      results.push(row);
    });

    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      console.log(JSON.stringify(results));
      return res.json(results);
    });

  });
});

/**
 * Retourner tous les usagers qui ne sont pas dans une équipe
 */

router.get('/equipe/usagers-libres', (req, res, next) => {

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

/**
 * Ajouter un joueur à une équipe
 */

router.post('/equipe/joueur', (req, res, next) => {

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
      INTO SPORTSDB.UsagerEquipe
      VALUES (
        '${req.body.idusager}',
        '${req.body.equipe.idligue}',
        '${req.body.equipe.nom}'
      )
    `);

    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });

  });
});

/**
 * Retirer un joueur d'une équipe
 */

router.delete('/equipe/joueur', (req, res, next) => {

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
      FROM SPORTSDB.Usager
      WHERE idusager = '${req.body.idusager}'
    `);

    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });

  });
});

module.exports = router;
