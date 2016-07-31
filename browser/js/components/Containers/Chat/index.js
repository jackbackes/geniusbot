'use strict';

import React from 'react';
import {ChatBox, ChatInput, ChatProvider, StyleWatcher} from './imports';
import Paper from 'material-ui/Paper';


const Chat = React.createClass({
  componentDidMount(){
    this.props.breakpoints.styleWatcher()
  },
  render(){
    return (
      <Paper style={this.props.styles.chatContainer}>
        <Paper
          children={(
            <ChatBox />
          )}
          zDepth={3}
          style={this.props.styles.chat}
        />
        <ChatInput />
      </ Paper>
    )
  }
})

export default ChatProvider(Chat);
