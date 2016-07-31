'use strict';

import {GeniusBotObserver, GeniusBotSelector} from './Bot/GeniusBot';
import {chatActionCreators} from './imports';
import {travel} from './Travel';
import scriptMaker, {imageTags, scriptGenerator as imageTagsScript} from './ImageTags';

let currentCommand;
let {requestSendMessage} = chatActionCreators;

const CommandMap = new Map();

CommandMap
  .set('travel', travel)
  .set('travelling', travel)
  .set('airport', travel)
  .set('airports', travel)
  .set('distance', travel)
  .set('distance between airports', travel)
  .set('tag an image', imageTags)
  .set('image tag', imageTags)
  .set('images', imageTags)

const CommandHandler = ({message, messageObj, chatModules}, dispatch, getState, select) => {
  if(!currentCommand){
    if(CommandMap.has(message)) {
      currentCommand = CommandMap.get(message);
    } else {
      requestSendMessage("I'm not sure what you mean!")
    }
  }
  if(currentCommand) {
    return currentCommand({message, messageObj, chatModules, dispatch, currentCommand, getState, select});
  } else {return};
}

export {CommandMap, CommandHandler, GeniusBotObserver, GeniusBotSelector};
