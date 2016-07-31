'use strict';
//

import * as breakpoints from './breakpoints';
const Promise = require('bluebird');

export const styleWatcher = () => dispatch => {
  Promise.try(
    ()=>breakpoints.width500Setup(dispatch)
  )
 };
