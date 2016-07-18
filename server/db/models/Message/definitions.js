'use strict';
var crypto = require( 'crypto' );
var _ = require( 'lodash' );
var Sequelize = require( 'sequelize' );

/** comment definitions */
module.exports = function(db){
    return {
      text: {
        type: Sequelize.TEXT
      }
    }
}
