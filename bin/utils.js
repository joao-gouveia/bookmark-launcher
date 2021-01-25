'use strict';

const fs = require('fs');

function readFileToJson(filePath) {
    let rawdata = fs.readFileSync(filePath);
    return JSON.parse(rawdata);
}

function writeFileToPath(filePath, toWrite) {
    fs.writeFileSync(filePath, JSON.stringify(toWrite));
}

exports.readFileToJson = readFileToJson;
exports.writeFileToPath = writeFileToPath;
