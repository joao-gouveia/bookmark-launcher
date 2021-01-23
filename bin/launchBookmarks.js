'use strict';

const fs = require('fs');
const open = require('open');
const fuzzySet = require('fuzzyset')

function launchBookmark(cmd) {
  let bookmarks = loadBookmarkFile();

  let foundBookmarks = findPossibleBookmarks(cmd, bookmarks);

  if(!foundBookmarks) {
    return;
  }

  if(foundBookmarks.length > 1) {
    console.log(foundBookmarks.length)

    return foundBookmarks;
  }
  
  let correctBookmark = getBookmarkUrlFromName(bookmarks, foundBookmarks[0]);

  openBookmarkUrlOnBrowser(correctBookmark.url);

  return foundBookmarks;
}

function loadBookmarkFile() {
  let rawdata = fs.readFileSync("./out/bookmarks.json");
  return JSON.parse(rawdata);
}

function findPossibleBookmarks(cmd, bookmarks) {
  let bookmarksNames = collectBookmarksNames(bookmarks);

  let fSet = fuzzySet(bookmarksNames);
  let results = fSet.get(cmd);

  return processSearchResults(results);
}

function getBookmarkUrlFromName(bookmarks, bookmarkName) {
  for (let i = 0; i < bookmarks.length; i++) {
    if (compareCmdWithBookmark(bookmarkName, bookmarks[i].name)) {
      return bookmarks[i];
    }
  }

  return;
}

function processSearchResults(results) {
  if(!results) {
    return;
  }
  
  if(results.length == 1) {
    return [results[0][1]];
  }

  let newResults = [results[0][1]];

  for (let i = 0; i < results.length-1; i++) {
    if(results[i][0] != results[i+1][0]) {
      break;
    }
    newResults.push(results[i+1][1]);
  }

  return newResults;
}

function collectBookmarksNames(bookmarks) {
  let bookmarksNames = [];
  
  bookmarks.forEach(elem => {
    bookmarksNames.push(elem.name);
  });

  return bookmarksNames;
}

function compareCmdWithBookmark(cmd, bookmark) {
  return cmd.split(" ").join("").toLowerCase() == bookmark.split(" ").join("").toLowerCase();
}

function openBookmarkUrlOnBrowser(bookmarkUrl) {
  open(bookmarkUrl);
}

exports.launchBookmark = launchBookmark;
