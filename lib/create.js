const shell = require('shelljs');

exports.create = (filename, extension) => {
  const filePath = `${process.cwd()}/${filename}.${extension}`;
  // console.log(filePath);
  shell.touch(filePath);
};
