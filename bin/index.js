#!/usr/bin/env node

const yargs = require('yargs');

const bookmarksReader = require('./readBookmarks');
const bookmarksLauncher = require('./launchBookmarks')
const utils = require('./utils')

global.configs = utils.readFileToJson("bin/configuration.json")

// const options = yargs
//  .usage("Usage: -r")
//  .option("r", { alias: "run", describe: "read you bookmarks", type: "string", demandOption: false })
//  .argv;


const args = yargs.argv._;

if(args.length != 1) {
  console.log("Wrong number of commands");
  return;
}

let cmd = args[0];

if (cmd == 'run-bml') {
  bookmarksReader.readBookmarks();
  return;
}

// console.log(require("os").userInfo().username)

// return;
let bookmarkNames = bookmarksLauncher.launchBookmark(cmd);

if(!bookmarkNames) {
  console.log("Invalid bookmark <" + cmd + ">");
  return;
}

if(bookmarkNames.length > 1) {
  console.log("Did you mean any of these <" + bookmarkNames + "> ?");
}
else {
  console.log("Launching bookmark <" + bookmarkNames[0] + "> ...");
}
