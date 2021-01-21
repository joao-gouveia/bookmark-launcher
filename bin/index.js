#!/usr/bin/env node

const yargs = require("yargs");

const bookmarks = require("./readBookmarks");

// const options = yargs
//  .usage("Usage: -r")
//  .option("r", { alias: "run", describe: "read you bookmarks", type: "string", demandOption: false })
//  .argv;


const cmd = yargs.argv._

if(cmd.length != 1) {
  console.log("Wrong number of commands");
  return;
}

if (cmd[0] == 'run-bml') {
  bookmarks.readBookmarks();
  return
}
