'use strict';

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const state = promisify(fs.stat);
const readDir = promisify(fs.readdir);
const rmdir = promisify(fs.rmdir);
const unlink = promisify(fs.unlink);

async function rm(p, callback) {
  const states = await state(p);
  if (states.isDirectory()) {
    const dirPath = await readDir(p);
    if (dirPath.length) {
      for (const item of dirPath) {
        await rm(path.join(p, item));
      }
    }
    await rmdir(p);
    callback(null);
  } else {
    return await unlink(p);
  }
}

module.exports = function (p, callback = function () {
}) {
  rm(path.resolve(p), callback);
};
