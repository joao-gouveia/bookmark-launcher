const open = require('open');
const fuzzySet = require('fuzzyset')

const utils = require('./utils')

function launchBookmark(cmd) {

  let bookmarks = utils.readFileToJson(global.configs.processedBookmarksFilePath);

  let foundBookmarks = findPossibleBookmarks(cmd, bookmarks);

  if(!foundBookmarks) {
    return;
  }

  if(foundBookmarks.length > 1) {
    return foundBookmarks;
  }
  
  let correctBookmark = getBookmarkUrlFromName(bookmarks, foundBookmarks[0]);

  openBookmarkUrlOnBrowser(correctBookmark.url);

  return foundBookmarks;
}

function findPossibleBookmarks(cmd, bookmarks) {
  let bookmarksNames = collectBookmarksNames(bookmarks);

  let fSet = fuzzySet(bookmarksNames);
  let bookmarksScore = fSet.get(cmd);

  return processSearchResults(bookmarksScore);
}

function getBookmarkUrlFromName(bookmarks, bookmarkName) {
  for (let i = 0; i < bookmarks.length; i++) {
    if (compareCmdWithBookmark(bookmarkName, bookmarks[i].name)) {
      return bookmarks[i];
    }
  }

  return;
}

function processSearchResults(bookmarksScore) {
  if(!bookmarksScore) {
    return;
  }
  
  if(bookmarksScore.length == 1) {
    return [bookmarksScore[0][1]];
  }

  let correctBookmarks = [bookmarksScore[0][1]];

  for (let i = 0; i < bookmarksScore.length-1; i++) {
    if(bookmarksScore[i][0] != bookmarksScore[i+1][0]) {
      break;
    }
    correctBookmarks.push(bookmarksScore[i+1][1]);
  }

  return correctBookmarks;
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
