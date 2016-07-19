'use strict'

import React from 'react';
import {ChatInput, GeniusBotImages, chatList} from './imports';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
// mock data
let selfId = 1;


const Message = (messagePayload) => {
  const {message, user, attachments, isFetching, itemIndex} = messagePayload;
  return <MessagePresentational
    key={itemIndex}
    message={message}
    user={user}
    attachments={attachments}
    isFetching={isFetching} />
}


const MessagePresentational = React.createClass({
  render(){
    const {message, user, attachments, isFetching} = this.props;
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
    if(isFetching){
      options.children = <span key={0}>Loading...</span>
    } else {
      if(attachments){
        options.nestedItems = attachments;
        options.initiallyOpen = true;
        options.autoGenerateNestedIndicator = false;
      }
      if(message){
        options.primaryText = message;
      }
    }
    return (
      <ListItem {...options}  />
    )
  }
})

// let chatList = [
//   {
//     message: "Hi there!",
//     user: {
//       id: 1,
//       username: "John",
//       avatar: "https://randomuser.me/api/portraits/lego/0.jpg"},
//     attachments: [<GoogleMap key={0} />]
//   },
//   {
//     message: "Howdy!",
//     user: {id: 2, username: "GeniusBot", avatar: GeniusBotImages['happy']},
//     attachments: [(
//       <GoogleMap key={0} />
//     )]
//   },
//   {
//     message: "I'd like directions, please.",
//     user: {id: 1, username: "John", avatar: "https://randomuser.me/api/portraits/lego/0.jpg"},
//     attachments: [(
//       <GoogleMap key={0} />
//     )],
//     isFetching: true
//   }
// ]

const ChatBox = React.createClass({
  render(){
    return(
      <List children={chatList.map( (chatItem, index) => {
        chatItem.itemIndex = index;
        return Message(chatItem);
      })} />
    )
  }
})

export default ChatBox
