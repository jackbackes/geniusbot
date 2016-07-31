'use strict';

// dependencies
import React from 'react';
const Promise = require( 'bluebird' );
const _ = require( 'lodash' );
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';

// imports
import { chatActionCreators } from '../imports.js';
import { fetchTags, setImage } from '../methods';
import { imageTagsReducer } from '../reducer';

// declarations
const botId = 2;
const {requestSendMessage} = chatActionCreators;

// scriptGenerator Method
function* scriptGenerator() {
  let message, dispatch, chatModules, input, select, getState;

  const sendMessage = ( message, elementToCreate ) =>
    Promise.resolve(
      dispatch(
        requestSendMessage(
          message,
          botId,
          elementToCreate ? [
            React.createElement( elementToCreate.element, Object.assign({}, elementToCreate.props, { key: 0 } ) )
          ] :
          null
        )
      )
    )
    .catch( err => console.log('could not send message', message, err))

  input = yield 'initializer';
    ( { select, getState, dispatch } = input );
    let selectObj = { select, getState };

    sendMessage( "I can really help with that!" )
      .then( () => sendMessage(
        "Give me an image, and I will tell you all about it!"
      ) )
      .then( () => sendMessage(
        "What is the url of the image you would like me to describe?"
      ) )

  input = yield 'image url';

    const messageWithImage = select(getState()).message;

    Promise.resolve( () => dispatch(setImage(messageWithImage)))
      .tap( ()=> sendMessage( "Great! Give me a second while I look up the picture." ) )
      .tap( () => sendMessage(
        "I think I found it. Is this the picture?",
        {
          element: Avatar,
          props: {
            src: messageWithImage,
            size: 200
          } } )
      )
      .catch( err => sendMessage(
        "It looks like there was a problem finding a picture."
      ) );

  input = yield 'image confirmation';

    Promise.resolve(sendMessage( "Great! Just a second while my brain takes a look at it..." ) )
      .then( () => dispatch(fetchTags( messageWithImage )) )
      .tap( tagsArray => console.log('is this the tag array? ', tagsArray) )
      .tap( tagsArray => sendMessage(
          `Your picture makes me think of ${tagsArray.length} things! Like:`
        ) )
      .then( tagsArray => tagsArray.forEach( tag => sendMessage(
        `${tag.class} - about ${Math.floor(tag.prob * 10000) / 100 }%`
      ) ) )
      .tap( () => sendMessage(
        'Check out Clarifai to have more fun with images!'
      ) )
      .then( () => sendMessage(
        "Thanks for using my image tagging service! By the way, I was built in React and Redux!",
        {element: RaisedButton, props: {
          href: "https://drive.google.com/open?id=0B78g7xzuPItKU3d3MFdZUEtRTkU",
          label: "Get John's resume!"
        } }
      ) )

  return
}




// export scriptGenerator
export default scriptGenerator;
