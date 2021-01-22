'use strict';

const fs = require('fs');
const open = require('open');

function launchBookmark(cmd) {
  let bookmarks = loadBookmarkFile();

  let foundBookmark = findBookmark(cmd, bookmarks);

  if(!foundBookmark) {
    return;
  }

  openBookmarkUrlOnBrowser(foundBookmark.url);

  return foundBookmark.name;
}

function loadBookmarkFile() {
  let rawdata = fs.readFileSync("./out/bookmarks.json");
  return JSON.parse(rawdata);
}

function findBookmark(cmd, bookmarks) {
  for (let i = 0; i < bookmarks.length; i++) {
    if (compareCmdWithBookmark(cmd, bookmarks[i].name)) {
      return bookmarks[i];
    }
  }
}

function compareCmdWithBookmark(cmd, bookmark) {
  return cmd.split(" ").join("").toLowerCase() == bookmark.split(" ").join("").toLowerCase();
}

function openBookmarkUrlOnBrowser(bookmarkUrl) {
  open(bookmarkUrl);
}

exports.launchBookmark = launchBookmark;
