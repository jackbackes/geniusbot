'use strict';
var router = require( 'express' )
  .Router();
import {fetchLocation, calculateDistance} from './methods';
const {
  ensureAuthenticated,
  ensureIsAdmin,
  Credentials,
  respondWith404,
  _err,
  db
} = require(global.paths.routerUtils);
const Promise = require('bluebird');

// google places api search query
router.get('/airport', (req, res, next)=>
  Promise.try( ()=> console.log('getting airport location', req.query) )
    .then( ()=> fetchLocation(req.query.query, req.query.type) )
    .then( results => res.send(results) )
    .catch( error => {
      console.log(error);
      return res.status(500).send(error)
    } )
)

// the haversine equation takes two sets of coordinates (lat, lon);
router.post('/distance', (req, res, next) =>
  Promise.try( ()=> {
    console.log('hello');
    const {coord1, coord2} = req.body;
    // if(!coord1.isArray() || !coord2.isArray() || coord1.length !== 2 || coord2.length !== 2) {
    //   throw 'coordinates must be arrays';
    // } else {
      console.log(coord1, coord2);
      return calculateDistance(coord1, coord2);
    // }
  })
  .then( distance => res.status(200).send({distance}) )
  .catch( error => res.status(500).send(error) )
)




//make sure all request definitions happen before here.
  respondWith404( router );

  module.exports = router;
