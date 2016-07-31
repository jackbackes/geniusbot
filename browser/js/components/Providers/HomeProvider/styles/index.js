'use strict';
//

import * as breakpoints from './breakpoints';
const Promise = require('bluebird');

// generic version of ChatProvider Styles
export const styleWatcher = () => dispatch => {
  // console.log('stylewatcher triggered', breakpoints);
  Promise.try(
    () => breakpoints.setup.forEach( breakpointSetup => breakpointSetup(dispatch) )
  )
 };
