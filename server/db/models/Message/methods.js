'use strict';
var crypto = require( 'crypto' );
var _ = require( 'lodash' );
var Sequelize = require( 'sequelize' );

/** comment methods */
module.exports = {
  class: function(db){
    return {
      addAssociations
    };
  },
  instance: function(db){
    return {};
  }
}

function addAssociations(db){
  const Message = db.models['message'];
  const User = db.models['user'];

  // const Location = db.models['location'];

  Message.belongsTo(User, {as: 'from'});
  Message.addScope('defaultScope', {
    include: [
      { model: User },
    ]
  }, { override: true })
}
