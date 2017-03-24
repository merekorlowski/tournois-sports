const express = require('express');
const router = express.Router();
const pg = require('pg');

const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/tournois_sport';

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
      FROM Usagers 
      WHERE nom LIKE '%${req.body.query}%' OR prenom LIKE '%${req.body.query}'
    `);

    query.on('row', row => {
      results.push(row);
    });

    /*
    // SQL Query > Insert Data
    client.query('INSERT INTO items(text, complete) values($1, $2)',
    [data.text, data.complete]);
    // SQL Query > Select Data
    const query = client.query('SELECT * FROM items ORDER BY id ASC');

    // Stream results back one row at a time
    query.on('row', (row) => {
      results.push(row);
    });
    */

    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });

  });
});

module.exports = router;
