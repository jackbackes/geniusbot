'use strict';

var path = require('path');
var Sequelize = require('sequelize');

global._dbPath = path.join(__dirname, "_db.js");
var env = require(path.join(__dirname, '../env'));
// var db = new Sequelize(
//   env.DATABASE_URI, {
//     logging: env.LOGGING,
//     dialect: 'sqlite',
//     storage: './database.sqlite'
//   }
// );

var db = new Sequelize(
  'geniusbot', null, null, {
    dialect: 'sqlite',
    storage: ':memory:',
    logging: env.LOGGING,
  }
);

// global._dbPath = path.join(__dirname, "../server/db/_db.js")

module.exports = db;
