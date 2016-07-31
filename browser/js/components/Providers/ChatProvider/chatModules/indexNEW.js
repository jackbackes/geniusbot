'use strict';

import {GeniusBotObserver, GeniusBotSelector} from './Bot/GeniusBot';
import {chatActionCreators} from './imports';
import {travel} from './Travel';
import scriptMaker, {imageTags, scriptGenerator as imageTagsScript} from './ImageTags';

let scriptHandler = scriptMaker();
// let currentScript = scriptHandler.getScript;
let {requestSendMessage} = chatActionCreators;

const CommandMap = new Map();

CommandMap
  // .set('travel', travel)
  // .set('travelling', travel)
  // .set('airport', travel)
  // .set('airports', travel)
  // .set('distance', travel)
  // .set('distance between airports', travel)
  .set('tag an image', imageTagsScript)
  .set('image tag', imageTagsScript)
  .set('images', imageTagsScript)

const CommandHandler = ({message, messageObj, chatModules}, dispatch, getState, select) => {
  if(scriptHandler.isDone()){
    console.log('script is done');
    scriptHandler.restart()
  }
  if(!scriptHandler.isStarted()){
    console.log('script has not yet started. starting.');
    if(CommandMap.has(message)) {
      console.log('commandmap has message', message);
      scriptHandler.setScript(CommandMap.get(message));
      console.log('script set', scriptHandler);
      scriptHandler.start();
      console.log(`scripthandler started`, scriptHandler);
    } else {
      requestSendMessage("I'm not sure what you mean!")
    }
  }
  if(scriptHandler.isStarted() && !scriptHandler.isDone()) {
    console.log('scripthandler started but not done', scriptHandler);
    return scriptHandler.current.next({message, messageObj, chatModules, dispatch, currentScript, getState, select});
  } else {
    console.log('took no action');
    return
  };
}

export {CommandMap, CommandHandler, GeniusBotObserver, GeniusBotSelector};
