'use strict';
/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

let componentsPath = `../../../browser/js/components`
let chatModulePath = (module) => `${componentsPath}/Providers/ChatProvider/chatModules/${module ? module : null}`
let botModulePath = (module) => `${componentsPath}/Providers/UserProvider/Modules/Bot/${module ? module : null}`

// Model types
const User = ({username}) =>
  Object.assign({}, {username});

const Message = ({messageType, content, conversationId, from, to, time}) =>
  Object.assign({}, {messageType, content, conversationId, from, to, createdAt, destroyed: false})

const Bot = ({name, botType}) =>
  Object.assign({}, {name, botType, path: botModulePath(botType)})

const MessageType = ({name}) =>
  Object.assign({}, {name, chatModule})

const ChatModule = ({name}) =>
  Object.assign({}, {name, path: chatModulePath(name)});

// mock data

let users = [
  User({username: 'John'}),
  User({username: 'Amber'})
]

let bots = [
  Bot({name: 'GeniusBot', botType: 'geniusbot'})
]

const chatModules = {
  codeGenius: ChatModule({name: 'CodeGenius'})
  resumes: ChatModule({name: 'Resumes'})
  travel: ChatModule({name: 'Travel'})
}


module.exports = {
  getUser = (id) => id === user.id ? user : null,
  getBot = (id) => id === bot.id ? bot : null,
  getMessage = (id) => id === message.id ? message: null,

}
