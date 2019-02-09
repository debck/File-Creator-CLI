'use strict';
const shell = require('shelljs');

exports.create = (filename) => {
  const filePath = `${process.cwd()}/${filename}`;
  // console.log(filePath);
  shell.touch(filePath);
  return 0;
};

exports.createdir = (dirname) => {
  const path = `${process.cwd()}/${dirname}`;
  shell.mkdir(path);
  return 0;
};
