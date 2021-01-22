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
    if (bookmarks[i].name == cmd){
      return bookmarks[i].url;
    }
  }
}

function openBookmarkUrlOnBrowser(bookmarkUrl) {
  open(bookmarkUrl);
}

exports.launchBookmark = launchBookmark;
