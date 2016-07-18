'use strict'

import React from 'react'

const Message = (messagePayload) => {
  const {message, user, attachments} = messagePayload;
  return <MessagePresentational
    message={message}
    user={user}
    attachments={attachments} />
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

export default Message;
