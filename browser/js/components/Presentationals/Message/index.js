'use strict'

import React from 'react'
import Avatar from 'material-ui/Avatar';
import {ListItem} from 'material-ui/List';
import CircularProgress from 'material-ui/CircularProgress'
import RefreshIndicator from 'material-ui/RefreshIndicator';
import animatedScroll from './animatedScroll'

const refresh = (isSelf) => isSelf ? 'left' : 'right';

export const Message = (messagePayload) => {
  const {message, user, attachments, selfId, itemIndex, isFetching, styles, ux} = messagePayload;
  return <MessagePresentational
    message={message}
    user={user}
    attachments={attachments}
    selfId={selfId}
    key={itemIndex}
    isFetching={isFetching}
    styles={styles}
    ux={ux}
    />
}

const MessagePresentational = React.createClass({
  componentDidMount(){
    animatedScroll(window, window.document.body.scrollHeight, 500);
  },
  render(){
    const {message, user, attachments, selfId, isFetching, styles, ux} = this.props;
    let messageStyles = styles;
    const options = {}
    let isSelf;
    if(user){
      isSelf = user.id === selfId;
      if(user.avatar) {
        isSelf ?
        options.leftAvatar = <Avatar size={ux.avatar.defaultSize} src={user.avatar} /> :(
        Object.assign(options, {
          rightAvatar: <Avatar size={ux.avatar.defaultSize} src={user.avatar} />
        }))
      }
    }
    if(attachments){
      options.nestedItems = attachments;
      options.initiallyOpen = true;
      options.autoGenerateNestedIndicator = false;
    }
    if(isFetching){
      let {marginLeft, marginRight, marginTop, display, position} = messageStyles;
      let refreshStyle = Object.assign(
        {}, {
          marginLeft,
          marginRight,
          marginTop,
          display,
          position,
          float: refresh(isSelf)
        })
      options.children = (
        <RefreshIndicator key={0}
        style={refreshStyle}
        left={0} top={0} status={'loading'} />
      )
    } else if(message){
      options.primaryText = message;
    }
    return (
      <ListItem {...options}  />
    )
  }
})
