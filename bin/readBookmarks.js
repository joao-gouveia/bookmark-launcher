'use strict';

const fs = require('fs');

function readBookmarks(){
  let bookmarksData = readBookmarksFromFile();
  let bookmarks = readBookmarksRecursively(bookmarksData.roots.bookmark_bar.children, []);
  saveBookmarksToFile(bookmarks);
}

function readBookmarksRecursively(bookmarks, finalBookmarks){
  
  bookmarks.forEach(elem => {
    if(elem.children == null) {
      finalBookmarks.push({"name": elem.name, "url": elem.url})
      return;
    }

    readBookmarksRecursively(elem.children, finalBookmarks);
  });

  return finalBookmarks;
}


function readBookmarksFromFile(){
  let rawdata = fs.readFileSync("C:/Users/joao.gouveia/AppData/Local/Google/Chrome/User Data/Default/Bookmarks");
  return JSON.parse(rawdata);
}

function saveBookmarksToFile(bookmarks){
  fs.writeFileSync('out/bookmarks.json', JSON.stringify(bookmarks));
}

exports.readBookmarks = readBookmarks;
