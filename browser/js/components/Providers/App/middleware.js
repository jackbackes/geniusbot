'use strict';

import {GeniusBotObserver} from '../ChatProvider/chatModules';
import ChatProviderMiddleware from '../ChatProvider/middleware.js';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger'


const middleware = [thunkMiddleware, GeniusBotObserver, ...ChatProviderMiddleware]

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

console.log(middleware);

export default middleware;
