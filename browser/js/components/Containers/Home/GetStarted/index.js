'use strict';
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const GetStarted = (route) => React.createElement(RaisedButton, {
  label: "Get Started",
  href: route
})

export default GetStarted;
