'use strict';

import {GeniusBotObserver, GeniusBotSelector} from './Bot/GeniusBot';

// import {CodeGenius as start} from './CodeGenius';
import {travel} from './Travel';
// import {resumes} from './Resumes';

let currentCommand;

const CommandMap = new Map();

CommandMap
  .set('travel', travel)
  .set('travelling', travel)
  .set('airport', travel)
  .set('airports', travel)
  .set('distance', travel)
  .set('distance between airports', travel)
  // .set('resume', resumes)
  // .set('resumes', resumes)

const CommandHandler = ({message, messageObj, chatModules}, dispatch, getState, select) => {
  if(!currentCommand){
    console.log('travelling!');
    if(CommandMap.has(message)) {
      currentCommand = CommandMap.get(message);
    }
  }
  if(currentCommand) {
    console.log('currentCommand!', message, messageObj, chatModules, dispatch, currentCommand);
    return currentCommand({message, messageObj, chatModules, dispatch, currentCommand, getState, select});
  } else {return};
}

export {CommandMap, CommandHandler, GeniusBotObserver, GeniusBotSelector};
