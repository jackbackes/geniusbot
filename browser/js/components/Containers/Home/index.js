'use strict'

// dependencies
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import Snackbar from 'material-ui/Snackbar';
import { Router } from 'react-router';
import Radium, {Style} from 'radium';

// imports
import GetStarted from '../GetStarted';
import styles from './styles';
import HomeProvider from './HomeProvider';
import LinkToChangeLog from './LinkToChangeLog';
var classNames = require('classnames');

class Home extends Component {

  render () {
      const divClass = classNames('Home');
      return (
        <div className={divClass}>
        <Style rules={styles} scopeSelector={".Home"} />
          <div style={styles.paperStyle} >
            <div >
              <div style={styles.header} className="header">
                GeniusBot
              </div>
              <div style={styles.subHeader}>
                <hr style={styles.hr} />
                <p style={styles.p}>GeniusBot is your friendly, intergalactic<br />intelligent chat bot!***</p>
                {GetStarted('chat')}
                <br />
                <br />
                <hr style={styles.hr} />
                <p style={styles.small}>***<LinkToChangeLog /></p>
              </div>
            </div>
          </div>
          {this.props.pathName
            ? <Snackbar
              open={this.props.pathName}
              message="You must be logged in."
              autoHideDuration={4000}
              style={styles.center}
              />
            : null
          }
        </div>
      )

  }
}

export default HomeProvider(Radium(Home));
