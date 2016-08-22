'use strict';

import React from 'react';
import Paper from 'material-ui/Paper';
import styles from './styles';

import GetStarted from '../GetStarted';

export const Changelog = React.createClass({
  render(){
    return (
      <div className="changelog" >
        <div style={styles.paperStyle} >
          <div >
            <div style={styles.header} className="header">
              GeniusBot
            </div>
            <div style={styles.subHeader}>
              <hr style={styles.hr} />
              <p style={styles.p}>
                ChangeLog
              </p>
              {GetStarted('chat')}
              <br />
              <br />
              <hr style={styles.hr} />
              <p style={styles.small} >{
                `Alpha Release 3 (08/22/16)
                - minor formatting fixes
                - homepage is now responsive
                - chat view scrolls with new messages
                `
              }
              <hr style={styles.hr} />
              {
                `Alpha Release 2 (08/01/16)
                - implemented the clarifai image tagging API
                - now Geniusbot can talk to you about your pictures!
                - new commands!
                - - "images", "tag an image", "image tag"
                - refactored the chat modules to make it easier to add a bot script.
                - new api endpoint at api/v1/image/tag`
              }
              <hr style={styles.hr} />
              {
                `Alpha release 1 (07/25/16)
                - implemented Google Places API
                - new commands!
                - - "travel", "travelling", "airport", "airports", "distance", "distance between airports"
                - new api endpoints at api/v1/location/airport and api/v1/location/distance`
              }
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
