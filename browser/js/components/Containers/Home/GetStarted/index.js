'use strict';
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';

const GetStarted = (route) => React.createElement(Link, {
  to: route,
  children: <RaisedButton label={"Get Started"} />
})

export default GetStarted;
