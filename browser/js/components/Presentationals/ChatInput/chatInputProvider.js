'use strict';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {chatActionCreators} from '../imports.js';

const mapStateToProps = (state, props) => {
  return {
    currentMessage: state.ux.chat.chatField.value,
    userId: state.chat.selfId,
    isSending: !!state.chat.currentMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(chatActionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
