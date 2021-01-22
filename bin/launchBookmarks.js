'use strict';

const fs = require('fs');
const open = require('open');

function launchBookmark(cmd) {
  let bookmarks = loadBookmarkFile();

  let bookmarkUrl = findBookmarkUrl(cmd, bookmarks);

  if(!bookmarkUrl) {
    return;
  }

  openBookmarkUrlOnBrowser (bookmarkUrl);

  return true;
}

function loadBookmarkFile() {
  let rawdata = fs.readFileSync("./out/bookmarks.json");
  return JSON.parse(rawdata);
}

function findBookmarkUrl(cmd, bookmarks) {
  for (let i = 0; i < bookmarks.length; i++) {
    if (compareCmdWithBookmark(cmd, bookmarks[i].name)) {
      return bookmarks[i].url;
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
