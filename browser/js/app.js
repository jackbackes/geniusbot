'use strict'

import 'babel-polyfill'

import React, { Component } from 'react'
import { render }  from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import routes from './components/Providers/App/Routes/index.js'
import configureStore from './components/Providers/App/configureStore.js'
import injectTapEventPlugin from 'react-tap-event-plugin';
import ga from 'ga-react-router';

injectTapEventPlugin()

//configure redux store
export const store = configureStore(browserHistory)

//configure router history
const history = syncHistoryWithStore(browserHistory, store)

//configure google analytics. add listener to router history.
const unlisten = history.listen(location => {
  ga('set', 'page', location.pathname);
  ga('send', location);
});

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>
  , document.getElementById('app'));

//unlisten google analytics
unlisten();
