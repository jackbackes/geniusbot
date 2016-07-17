'use strict';
var router = require( 'express' ).Router();
const utils = require( './utils' );
// const respond = util.responder(router);
const { respondWith404, bindRouterToUse } = utils;
const routerUse = bindRouterToUse( router );
const env = require('../../env')

module.exports = router;


if(env.MOCK){
  routerUse('/', './api/mock')
} else{
  routerUse('/', './api');
}

// Make sure this is after all of
// the registered routes!
respondWith404( router );
