'use strict';

import React from 'react';
import {ChatBox, ChatInput} from './imports';
import Paper from 'material-ui/Paper';

const style={
  chat: {
    minHeight: '100vh',
    minWidth: '500px',
    width: '30vw',
    marginBottom: '30px'
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
        <ChatInput />
      </div>
    )
  }
})

export default Chat;
