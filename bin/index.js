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

if(!bookmarksLauncher.launchBookmark(cmd)) {
  console.log("Invalid bookmark <" + cmd + ">");
}
else {
  console.log("Launching bookmark <" + cmd + "> ...");
}
