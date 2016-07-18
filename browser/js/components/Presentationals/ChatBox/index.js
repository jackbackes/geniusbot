'use strict'

import React from 'react';
import {GoogleMap, ChatInput} from './imports';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
// mock data
let selfId = 1;


const Message = (messagePayload) => {
  const {message, user, attachments} = messagePayload;
  return <MessagePresentational message={message} user={user} attachments={attachments} />
}


const MessagePresentational = React.createClass({
  render(){
    const {message, user, attachments} = this.props;
    const options = {}
    if(user){
      if(user.avatar) {
        user.id === selfId ?
        options.leftAvatar = <Avatar src={user.avatar} /> :(
        Object.assign(options, {
          rightAvatar: <Avatar src={user.avatar} />,
          innerDivStyle: {float: 'right'}
        }))
      }
    }
    if(attachments){
      options.nestedItems = attachments;
      options.initiallyOpen = true;
      options.autoGenerateNestedIndicator = false;
    }
    if(message){
      options.primaryText = message;
    }
    return (
      <ListItem {...options}  />
    )
  }
})

let chatList = [
  Message({
    message: "Hi there!",
    user: {id: 1, username: "John", avatar: "https://randomuser.me/api/portraits/lego/0.jpg"},
    attachments: [(
      <GoogleMap key={0} />
    )]
  }),
  Message({
    message: "Howdy!",
    user: {id: 2, username: "GeniusBot", avatar: "https://randomuser.me/api/portraits/lego/1.jpg"},
    attachments: [(
      <GoogleMap key={0} />
    )]
  })
]

const ChatBox = React.createClass({
  render(){
    return(
      <List children={chatList} />
    )
  }
})

export default ChatBox
