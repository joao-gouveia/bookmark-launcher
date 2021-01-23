#!/usr/bin/env node

const yargs = require("yargs");

const bookmarksReader = require("./readBookmarks");
const bookmarksLauncher = require("./launchBookmarks.js")

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

let bookmarkName = bookmarksLauncher.launchBookmark(cmd);

if(!bookmarkName) {
  console.log("Invalid bookmark <" + cmd + ">");
  return; 
}

if(bookmarkName.length > 1) {
  console.log("Did you mean any of these <" + bookmarkName + "> ?");
}
else {
  console.log("Launching bookmark <" + bookmarkName[0] + "> ...");
}
