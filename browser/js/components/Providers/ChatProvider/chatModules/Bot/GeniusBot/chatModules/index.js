//
// // import {CodeGenius as start} from './CodeGenius';
// import {travel} from './Travel';
// // import {resumes} from './Resumes';
//
// let currentCommand;
//
// const CommandMap = new Map();
//
// CommandMap
//   .set('travel', travel)
//   // .set('resume', resumes)
//   // .set('resumes', resumes)
//
// const CommandHandler = (message, dispatch) => {
//   if(!currentCommand){
//     if(CommandMap.has(message)) {
//       currentCommand = CommandMap.get(message);
//     }
//   }
//   if(currentCommand) {
//     return currentCommand(message, dispatch, currentCommand);
//   } else {return};
// }
//
// export {CommandMap, CommandHandler};
