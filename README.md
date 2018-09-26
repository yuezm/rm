# fs-rm

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/fs-rm.svg?style=flat-square
[npm-url]: https://npmjs.org/package/fs-rm
[travis-image]: https://img.shields.io/travis/yuezm/rm.svg
[travis-url]: https://travis-ci.org/yuezm/rm
[codecov-image]: https://img.shields.io/codecov/c/github/yuezm/rm.svg?style=flat-square
[codecov-url]: https://codecov.io/github/yuezm/rm?branch=master
[david-image]: https://img.shields.io/david/yuezm/egg-helper.svg?style=flat-square
[david-url]: https://david-dm.org/yuezm/egg-helper
[snyk-image]: https://snyk.io/test/npm/rm/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/rm
[download-image]: https://img.shields.io/npm/dm/fs-rm.svg?style=flat-square
[download-url]: https://npmjs.org/package/fs-rm

delete a directory or file

## USE
    const rm = require('rm');
    rm(path[,callback]);
      path: required string
      callback: unrequired function
        回调函数接受error参数，如果删除文件成功，则error为null
或者使用sh模式

    const rm = require('rm');
    rm.shrm(path[,callback]);


