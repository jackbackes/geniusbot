'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import {App, Home, NotFound, Chat, AirportMap} from './imports'

let airportMapInput = {
  origin: {
    geometry: {
      location: {
        lat: 30,
        lng: 30
      }
    },
    name: 'hello'
  },
  destination: {
    geometry: {
      location: {
        lat: 20,
        lng: 30
      }
    },
    name: 'goodbye'
  }
}

let AirportMapTest = AirportMap(airportMapInput);

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='chat' component={Chat} />
    <Route path='mapTester' component={AirportMapTest} />
    <Route path='*' component={NotFound} />
  </Route>
);

export default routes;
