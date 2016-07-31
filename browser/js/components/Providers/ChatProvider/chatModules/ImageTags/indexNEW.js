'use strict';

import scriptGenerator from './scriptGenerator';
export {scriptGenerator};
export {reducer as imageTagsReducer} from './reducer';

const scriptMaker = () => ({
  start(){
    this.current = this.script();
    return this;
  },
  restart(){
    return this;
  },
  current: null,
  script: null,
  setScript(newScript){
    this.script = newScript;
    return this;
  },
  getScript(){
    return this.script;
  },
  isStarted(){
    return this.current && this.current.value ? true : false;
  },
  isDone(){
    return this.isStarted() && this.current.done ? true : false
  }
})


export default scriptMaker;

let imageTagsBot = scriptMaker().setScript(scriptGenerator).start();

export const imageTags = (input) => {
  imageTagsBot.next(input);
}
