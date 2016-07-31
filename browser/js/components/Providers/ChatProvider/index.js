'use strict';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as chatActionCreators from './Actions';
import * as breakpoints from './styles'

const mapStateToProps = (state, props) => {

  let messages = state.chat.messages ? state.chat.messages.map( message => message ) : [];
  return {
    messages,
    users: state.chat.users,
    currentMessage: state.chat.currentMessage,
    selfId: state.chat.selfId,
    ux: state.ux.chat,
    styles: state.ux.chat.styles
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(chatActionCreators, dispatch),
    breakpoints: bindActionCreators(breakpoints, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps);
export {chatActionCreators};
