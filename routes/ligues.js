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
 * Retourner tous les ligues
 */

router.get('/ligues', (req, res, next) => {

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
      FROM SPORTSDB.Ligue
      WHERE idsport = '${req.query.idsport}' AND (LOWER(idligue) LIKE LOWER('%${req.query.query}%') OR LOWER(niveaudifficulte) LIKE LOWER('%${req.query.query}%'))
      ORDER BY idligue ${req.query.sort}
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
 * Retourner un ligue spécifique
 */

router.get('/ligue', (req, res, next) => {

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
      FROM SPORTSDB.Ligue
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

/**
 * Ajouter un ligue
 */

router.post('/ligue', (req, res, next) => {

  pg.connect(connectionString, (err, client, done) => {

    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    const query = client.query(`
      INSERT  
      INTO SPORTSDB.Ligue(idligue, idsport, niveaudifficulte)
      VALUES (
        '${req.body.idligue}',
        '${req.body.idsport}',
        '${req.body.niveaudifficulte}'
      ) 
    `);

    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json();
    });

  });
});

/**
 * Modifier un ligue
 */

router.put('/ligue', (req, res, next) => {

  pg.connect(connectionString, (err, client, done) => {

    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    const query = client.query(`
      UPDATE  
      SPORTSDB.Ligue
      SET
        niveaudifficulte = '${req.body.niveaudifficulte}'
      WHERE idligue = '${req.body.idligue}'
    `);

    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json();
    });

  });
});

/**
 * Retirer un ligue
 */

router.delete('/ligue', (req, res, next) => {
  
  pg.connect(connectionString, (err, client, done) => {

    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    const query = client.query(`
      DELETE
      FROM SPORTSDB.Ligue
      WHERE idligue = '${req.query.idligue}'
    `);

    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json();
    });

  });
});

/**
 * Ajouter une équipe à un ligue
 */

router.post('/ligue/equipe', (req, res, next) => {

  pg.connect(connectionString, (err, client, done) => {

    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    const query = client.query(`
      INSERT
      INTO SPORTSDB.Equipe
      VALUES (
        '${req.body.nom}',
        '${req.body.idligue}',
        '${req.body.idusager}',
        '${req.body.nbrminjoueurs}',
        '${req.body.nbrmaxjoueurs}'
      );

      INSERT
      INTO SPORTSDB.UsagerEquipe
      VALUES (
        '${req.body.idusager}',
        '${req.body.idligue}',
        '${req.body.nom}'
      );
    `);

    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json();
    });

  });
});

/**
 * Retourner tous les gestionnaires d'un ligue
 */

router.get('/ligues/gestionnaires', (req, res, next) => {

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
      FROM SPORTSDB.Gestionnaire NATURAL JOIN SPORTSDB.Employe
      WHERE idemploye = (
        SELECT idemploye
        FROM SPORTSDB.GestionnaireLigue
        WHERE idligue = '${req.query.idligue}'
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
 * Retourner tous les arbitres d'un ligue
 */

router.get('/ligues/arbitres', (req, res, next) => {

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
      FROM SPORTSDB.Arbitre NATURAL JOIN SPORTSDB.Employe
      WHERE idemploye = (
        SELECT idemploye
        FROM SPORTSDB.ArbitreLigue
        WHERE idligue = '${req.query.idligue}'
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
 * Retouner tous les saisons d'un ligue
 */

router.get('/ligue/saisons', (req, res, next) => {

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

/**
 * Ajouter un saison à un ligue
 */

router.post('/ligue/saison', (req, res, next) => {

  pg.connect(connectionString, (err, client, done) => {

    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    const query = client.query(`
      INSERT
      INTO SPORTSDB.Saison
      VALUES (
        '${req.body.idsaison}',
        (to_date('${req.body.datelimitepaiement}', 'YYYY-MM-DD')),
        (to_date('${req.body.datecommencement}', 'YYYY-MM-DD')),
        (to_date('${req.body.datefin}', 'YYYY-MM-DD')),
        '${req.body.idligue}'
      );
    `);

    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json();
    });

  });
});

/**
 * Retirer un saison d'un ligue
 */

router.delete('/ligue/saison', (req, res, next) => {

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

/**
 * Retourner tous les équipes d'un ligue
 */

router.get('/ligue/equipes', (req, res, next) => {

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

/**
 * Retirer une équipe d'un ligue
 */

router.delete('/ligue/equipe', (req, res, next) => {

  pg.connect(connectionString, (err, client, done) => {

    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    const query = client.query(`
      DELETE
      FROM SPORTSDB.Equipe
      WHERE idligue = '${req.body.idligue}' AND nom = '${req.body.nom}'
    `);

    query.on('row', row => {
      results.push(row);
    });

    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json();
    });

  });
});

module.exports = router;
