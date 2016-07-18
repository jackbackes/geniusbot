'use strict';
const db = require( './_db' );
module.exports = db;
const bluebird = require( 'bluebird' );
if ( !global.dbPath ) global.dbPath = __dirname;

const User = require( './models/User' );
const Message = require( './models/Message' );

bluebird.all( [ User, Message ] )
  .then( Models =>
    Models.forEach( Model => Model.addAssociations ?
      Model.addAssociations( db ) : null )
    )
  .then( () => console.log('done with associations'))
  .catch( error => console.log('association error', error))
