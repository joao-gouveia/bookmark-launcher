const fuzzySet = require('fuzzyset');
const open = require('open');
const path = require('path');

const utils = require('./utils')

const minScore = 0.4;

function launchBookmark(cmd) {
  let processedBookmarksFilePath = path.join(__dirname, '..', global.configs.processedBookmarksFilePath);

  let bookmarks = utils.readFileToJson(processedBookmarksFilePath);

  let foundBookmarksNames = findPossibleBookmarks(cmd, bookmarks);

  if(!foundBookmarksNames) {
    return;
  }

  if(foundBookmarksNames.length > 1) {
    return foundBookmarksNames;
  }
  
  let correctBookmark = getBookmarkFromName(bookmarks, foundBookmarksNames[0]);

  openBookmarkUrlOnBrowser(correctBookmark.url);

  return foundBookmarksNames;
}

function findPossibleBookmarks(cmd, bookmarks) {
  let bookmarksNames = collectBookmarksNames(bookmarks);

  let fSet = fuzzySet(bookmarksNames);
  let bookmarksScore = fSet.get(cmd);

  return processSearchResults(bookmarksScore);
}

function getBookmarkFromName(bookmarks, bookmarkName) {
  for (let i = 0; i < bookmarks.length; i++) {
    if (bookmarks[i].name == bookmarkName) {
      return bookmarks[i];
    }
  }

  return;
}

function processSearchResults(bookmarksScore) {
  if(!bookmarksScore || bookmarksScore[0][0] < minScore) {
    return;
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

function openBookmarkUrlOnBrowser(bookmarkUrl) {
  open(bookmarkUrl);
}

exports.launchBookmark = launchBookmark;
