'use strict';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as chatActionCreators from './Actions';

const mapStateToProps = (state, props) => {

  let messages = state.chat.messages ? state.chat.messages.map( message => message ) : [];
  return {
    messages,
    users: state.chat.users,
    currentMessage: state.chat.currentMessage,
    selfId: state.chat.selfId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(chatActionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps);
export {chatActionCreators};
