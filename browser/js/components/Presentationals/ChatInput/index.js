'use strict'

import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField'
import IconButton from 'material-ui/IconButton';
import SendIcon from 'material-ui/svg-icons/content/send'
import ChatInputProvider from './chatInputProvider.js'
import RefreshIndicator from 'material-ui/RefreshIndicator';


const style = {
  chatInput: {
    position: 'fixed',
    bottom: '0px',
    width: '100vw',
    backgroundColor: 'white'
  },
  chatInputContainer: {
    position: 'fixed',
    bottom: '0px',
    width: '100vw',
    backgroundColor: 'white',
    paddingRight: '2vw',
    paddingLeft: '2vw'
  },
  chatInputSendButton: {
    float: 'right'
  }
}

const ChatField = (props) =>
  React.createElement(
    TextField,
    Object.assign(
      {
        onChange: props.onChange
      },
      props
    )
  )


const SendChat = (props) =>
  React.createElement(
    IconButton,
    Object.assign(
      {
        children: (props.isSending ? (<RefreshIndicator left={0} top={0} status={'loading'} />) : (<SendIcon />)),
        onClick: props.onClick
      },
      props
    )
  )

const ChatInput = React.createClass({
  componentDidMount(){
    const {actions} = this.props;
    actions.start();
  },
  render(){
    const {actions, currentMessage, userId, isSending} = this.props;
    return (
      <Paper
      style={style.chatInput}
      children={[
        ChatField({id:'chatInput', style: style.chatInput, key: 0, onChange: actions.updateChatField, value: currentMessage}),
        SendChat({style: style.chatInputSendButton, key:1, onClick: actions.requestSendMessage.bind(this, currentMessage, userId, null), isSending})
      ]}
      />
    )
  }
})


export default ChatInputProvider(ChatInput)
