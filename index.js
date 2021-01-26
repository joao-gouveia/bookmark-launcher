#!/usr/bin/env node

const yargs = require('yargs');

const bookmarksLauncher = require('./bin/launchBookmarks');
const bookmarksReader = require('./bin/readBookmarks');

global.configs = require('./bin/configuration.json');

const args = yargs.argv._;

if(args.length != 1) {
  console.log("Wrong number of commands");
  return;
}

let cmd = args[0];

if (cmd == 'run-save') {
  bookmarksReader.readBookmarks();
  return;
}

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
