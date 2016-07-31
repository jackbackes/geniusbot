'use strict';

import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from './rootReducer'
import middleware from './middleware';


export default function configureStore (history, initialState) {

  const middlewares = [routerMiddleware(history), ...middleware]

  const enhancers = compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )

  return createStore(rootReducer, initialState, enhancers)
}
