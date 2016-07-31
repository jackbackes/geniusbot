'use strict';

import scriptGenerator from './scriptGenerator';
export {scriptGenerator};
export {reducer as imageTagsReducer} from './reducer';

const scriptMaker = () => ({
  start(script){
    return script ? script() : this.script()
  },
  restart(){
    return this;
  },
  script: null,
  setScript(newScript){
    this.script = newScript;
    return this;
  },
  getScript(){
    return this.script;
  }
})


export default scriptMaker;

let imageTagsBot = scriptMaker().setScript(scriptGenerator).start();

export const imageTags = (input) => {
  imageTagsBot.next(input);
}
