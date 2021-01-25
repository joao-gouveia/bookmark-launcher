const oSystem = require('os');
const path = require('path');

const utils = require('./utils');

function readBookmarks(){
  let bookmarksFilePath = global.configs.chromeBookmarkFilePath;
  let processedBookmarksFilePath = path.join(__dirname, '..', global.configs.processedBookmarksFilePath);

  if(!bookmarksFilePath) {
    bookmarksFilePath = defaultChromeBookmarksFilePath();
  }
 
  let bookmarksData = utils.readFileToJson(bookmarksFilePath);
  let bookmarks = readBookmarksRecursively(bookmarksData.roots.bookmark_bar.children, []);
  
  utils.writeFileToPath(processedBookmarksFilePath, bookmarks);
}

function readBookmarksRecursively(bookmarks, finalBookmarks) {
  
  bookmarks.forEach(elem => {
    if(!elem.children) {
      finalBookmarks.push({"name": elem.name, "url": elem.url});
      return;
    }

    readBookmarksRecursively(elem.children, finalBookmarks);
  });

  return finalBookmarks;
}

function defaultChromeBookmarksFilePath() {
  return "C:/Users/" + oSystem.userInfo().username + "/AppData/Local/Google/Chrome/User Data/Default/Bookmarks";
}

exports.readBookmarks = readBookmarks;
