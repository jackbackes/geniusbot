'use strict'

import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField'
import IconButton from 'material-ui/IconButton';
import SendIcon from 'material-ui/svg-icons/content/send'
import ChatInputProvider from './chatInputProvider.js'
import RefreshIndicator from 'material-ui/RefreshIndicator';
import {style, classes} from './style';

const ChatField = (props) =>
  React.createElement(
    TextField,
    Object.assign(
      {
        onChange: props.onChange,
        onKeyPress: props.handleKeyPress
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
        onClick: props.handleOnClick
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
    const {styles, actions, currentMessage, userId, isSending} = this.props;
    return (
      <Paper
      style={styles.chatInput}
      children={[
        ChatField({
          id:'chatInput',
          style: styles.chatInput,
          key: 0,
          onChange: actions.updateChatField,
          value: currentMessage,
          handleKeyPress: (e) =>
            e.key === "Enter" ?
            actions.requestSendMessage(currentMessage, userId, null) :
            null
        }),
        SendChat({
          style: styles.chatInputSendButton,
          key:1,
          handleOnClick: actions.requestSendMessage.bind(this, currentMessage, userId, null),
          isSending})
      ]}
      />
    )
  }
})


export default ChatInputProvider(ChatInput)
