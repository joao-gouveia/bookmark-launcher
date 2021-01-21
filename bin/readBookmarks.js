'use strict';

const fs = require('fs');

function readBookmarks(){
  let rawdata = fs.readFileSync("C:/Users/joao.gouveia/AppData/Local/Google/Chrome/User Data/Default/Bookmarks");
  let bookmarksData = JSON.parse(rawdata);
  
  readBookmarksRecursively(bookmarksData.roots.bookmark_bar.children, []);
}

function readBookmarksRecursively(bookmarks, finalBookmarks){
  
  bookmarks.forEach(elem => {
    if(elem.children == null) {
      finalBookmarks.push({"name": elem.name, "url": elem.url})
      return;
    }

    readBookmarksRecursively(elem.children, finalBookmarks)
  });

  return finalBookmarks;
}

exports.readBookmarks = readBookmarks;