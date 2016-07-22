'use strict'

import 'babel-polyfill'

import React, { Component } from 'react'
import { render }  from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import routes from './components/Providers/App/routes'
import configureStore from './components/Providers/App/configureStore'
import injectTapEventPlugin from 'react-tap-event-plugin'
// import {GeniusBotObserver, GeniusBotSelector} from './components/Providers/ChatProvider/chatModules';


injectTapEventPlugin()

export const store = configureStore(browserHistory)
const history = syncHistoryWithStore(browserHistory, store)

// GeniusBotObserver(store, GeniusBotSelector);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>
  , document.getElementById('app'))
