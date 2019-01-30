'use strict';
const shell = require('shelljs');
const fs = require('fs');
const chalk = require('chalk');
const question = require('../lib/question');
const ifdir = require('../lib/ifdir');

exports.deletefile = async() => {
  const input = await question.questions();
  const { filename } = input;
  const name = filename;
  const x = shell.rm(name);
  if (x.code) console.log(chalk.red('The file was was not deleted. '));
  else console.log(chalk.blue('The file was deleted '));
};

exports.deletedirec = async() => {
  const dirRes = await ifdir.getdir();
  const { dirname } = dirRes;
  const x = shell.rm('-rf', dirname);
  if (x.code) console.log(chalk.red('The folder was was not deleted. '));
  else console.log(chalk.blue('The folder was deleted '));
};

exports.renamefile = async() => {
  const input = await question.questions();
  const { filename } = input;
  const name = filename;
  const rename = await question.rename();
  const { newname } = rename;

  fs.rename(name, newname, (err) => {
    if (err) console.log(`ERROR: ${err}`);
    else {
      console.log(chalk.blue('file was renamed.'));
    }
  });
};
exports.filesize = async() => {
  const input = await question.questions();
  const { filename } = input;
  const name = filename;

  const fileSizeInBytes = fs.statSync(name).size;
  
  let fileSize, unit;
  if (fileSizeInBytes >= 1000000) {
    fileSize = (fileSizeInBytes / 1000000).toFixed(2);
    unit = 'MB';
  } else if (fileSizeInBytes >= 1000) {
    fileSize = (fileSizeInBytes / 1000).toFixed(2);
    unit = 'KB';
  } else {
    fileSize = fileSizeInBytes;
    unit = 'B';
  }
  console.log(fileSize + unit);
};
