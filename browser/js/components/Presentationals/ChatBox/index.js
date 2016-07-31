'use strict'

import React from 'react';
import {ChatInput, GeniusBotImages, ChatProvider, Message} from './imports';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
const _ = require('lodash');

const ChatBox = React.createClass({
  render(){
    let {messages, users, selfId, styles, ux} = this.props;
    let renderedMessages = messages.map(message => {
      Object.defineProperties(message, {
        "itemIndex": {
          configurable: true,
          get: ()=> message.id
        },
        "user": {
          configurable: true,
          get: ()=> users.get(message.userId.toString())
        }
      })
      return message;
      // PROXIES ARE NOT IMPLEMENTED IN SAFARI
      // new Proxy(
      //   message,
      //   {
      //     get: (target, prop) => {
      //         if(prop === 'itemIndex') {
      //           return message.id
      //         } else if(prop === 'user') {
      //           return users.get(message.userId.toString())
      //         } else { return target[prop] }
      //       }
      //   }
      // )
    });
    return(
      <List children={
        renderedMessages.map(
          chatItem => {
            return Message({
              message: chatItem.message,
              user: chatItem.user,
              attachments: chatItem.attachments,
              itemIndex: chatItem.itemIndex,
              selfId,
              styles: styles.chatMessage,
              isFetching: chatItem.isFetching,
              ux
            })}
      )} />
    )
  }
})

export default ChatProvider(ChatBox);
