'use strict'

import React from 'react'
import Avatar from 'material-ui/Avatar';
import {ListItem} from 'material-ui/List';
import CircularProgress from 'material-ui/CircularProgress'
import RefreshIndicator from 'material-ui/RefreshIndicator';

const styles = {
  refresh: (isSelf) => {
    let float = isSelf ? 'left' : 'right';
    return {
      display: 'inline-block',
      position: 'relative',
      float,
      marginLeft: '20px',
      marginRight: '20px',
      marginTop: '-12px'
    }
  }
}

export const Message = (messagePayload) => {
  const {message, user, attachments, selfId, itemIndex, isFetching} = messagePayload;
  return <MessagePresentational
    message={message}
    user={user}
    attachments={attachments}
    selfId={selfId}
    key={itemIndex}
    isFetching={isFetching}
    />
}

const MessagePresentational = React.createClass({
  render(){
    const {message, user, attachments, selfId, isFetching} = this.props;
    const options = {}
    let isSelf;
    if(user){
      isSelf = user.id === selfId;
      if(user.avatar) {
        isSelf ?
        options.leftAvatar = <Avatar src={user.avatar} /> :(
        Object.assign(options, {
          rightAvatar: <Avatar src={user.avatar} />
        }))
      }
    }
    if(attachments){
      options.nestedItems = attachments;
      options.initiallyOpen = true;
      options.autoGenerateNestedIndicator = false;
    }
    if(isFetching){
      options.children = (<RefreshIndicator key={0} style={styles.refresh(isSelf)} left={0} top={0} status={'loading'} />)
    } else if(message){
      options.primaryText = message;
    }
    return (
      <ListItem {...options}  />
    )
  }
})
