'use strict';
const fs = require('fs');
const childProcess = require('child_process');
const rm = require('../index');

describe('test rm', () => {
  beforeAll(() => {
    childProcess.exec('cp -r file test/');
  });

  it('delete dir error should be null ', done => {
    rm('./test/file', err => {
      expect(err).toBeNull();
      done();
    });
  });

  it('delete dir error should be not null ', done => {
    rm('./test/file', err => {
      expect(err).not.toBeNull();
      done();
    });
  });

  it('delete has no callback ', () => {
    rm('./test/file');
  });

  it('delete file error should be null ', done => {
    const f = fs.writeFileSync('test/test.js', 'hello rm');
    if (!f) {
      rm('test/test.js', err => {
        expect(err).toBeNull();
        done();
      });
    }
  });
});

describe('test shrm', () => {
  beforeAll(() => {
    childProcess.exec('cp -r file test/');
  });

  it('delete dir error should be null ', done => {
    rm.shrm('test/file', err => {
      expect(err).toBeNull();
      done();
    });
  });

  it('delete file error should be null ', done => {
    const f = fs.writeFileSync('test/test.txt', 'hello rm;');
    if (!f) {
      rm.shrm('test/test.txt', err => {
        expect(err).toBeNull();
        done();
      });
    }
  });

  it('delete file error should be error ', done => {
    rm.shrm('test/test.txt', err => {
      expect(err).not.toBeNull();
      done();
    });
  });

  it('delete  has no callback ', () => {
    rm.shrm('./test/file');
  });
});