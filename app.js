'use strict';

const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const config = require('./config');

const usagers = require('./routes/usagers');
const equipes = require('./routes/equipes');
const employes = require('./routes/employes');
const ligues = require('./routes/ligues');
const sports = require('./routes/sports');
const tournois = require('./routes/tournois');
const saisons = require('./routes/saisons');

// set up database

const pg = require('pg');
const connectionString = process.env.DATABASE_URL || config.dbUrl;

const client = new pg.Client(connectionString);
client.connect();

// view engine setup
app.set('public', path.join(__dirname, 'public'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// define routes

app.use(usagers);
app.use(equipes);
app.use(employes);
app.use(ligues);
app.use(sports);
app.use(tournois);
app.use(saisons);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
