'use strict';

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const shell = require('shelljs');

const state = promisify(fs.stat);
const readDir = promisify(fs.readdir);
const rmdir = promisify(fs.rmdir);
const unlink = promisify(fs.unlink);

async function removeDir(p, callback) {
  const states = await state(p);
  if (states.isDirectory()) {
    const dirPath = await readDir(p);
    if (dirPath.length) {
      for (const item of dirPath) {
        await removeDir(path.join(p, item));
      }
    }
    await rmdir(p);
    callback && typeof callback === 'function' && callback(null);
  } else {
    return await unlink(p);
  }
}

module.exports = (p, callback) => {
  fs.stat(p, (err, stats) => {
    if (stats.isDirectory()) {
      removeDir(p, callback);
    } else {
      fs.unlink(p, err => {
        callback(err);
      })
    }
  })
};

module.exports.shrm = (path, callback) => {
  callback(shell.rm('-rf', path).stderr);
};