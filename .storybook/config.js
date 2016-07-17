'use strict';
import { configure } from '@kadira/storybook';
const path = require('path');
`../browser/js/stories/${thisStory}`

// const storyFiles = {
//   button: String(story('button.js'))
// }

let thisStory;

function loadStories() {
  require(`../browser/js/stories/button.js`);
  // require as many stories as you need.
}

configure(loadStories, module);
