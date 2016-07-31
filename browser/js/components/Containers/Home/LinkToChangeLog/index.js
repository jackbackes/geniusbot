'use strict';
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';

const LinkToChangeLog = React.createClass({
  render(){
    return (
      <span>
        GeniusBot Alpha v2 release! Now with image classification from www.clarifai.com! See the full changelog <Link to="changelog">here</Link>
      </span>
    )
  }
})

export default LinkToChangeLog;
