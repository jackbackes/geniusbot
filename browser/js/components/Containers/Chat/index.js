'use strict';

import React from 'react';
import {ChatBox} from './imports';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const style={
  chat: {
    minHeight: '100vh',
    minWidth: '500px',
    width: '30vw'
  },
  chatInput: {
    position: 'fixed',
    bottom: '0px',
    width: '100vw',
    backgroundColor: 'white'
  }
}

const Chat = React.createClass({
  render(){
    return (
      <div>
        <Paper
          children={(
            <ChatBox />
          )}
          zDepth={3}
          style={style.chat}
        />
        <Paper style={style.chatInput} children={
          <TextField id={'chatInput'} style={style.chatInput} />
        } />
      </div>
    )
  }
})

export default Chat;
