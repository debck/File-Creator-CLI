'use strict';
const chalk = require('chalk');
const header = require('../lib/header');
const question = require('../lib/question');
const create = require('../lib/create');
const ifdir = require('../lib/ifdir');

const func = require('../lib/functions');

exports.main = async() => {
  header.init();

  const result = await ifdir.ask();

  const { isdir } = result;

  // regex to check whether input string is file or directory
  var isValid = (function(){
    var rg1 = /^[^\\/:\*\?"<>\|]+$/; // forbidden characters \ / : * ? " < > |
    var rg2 = /^\./; // cannot start with dot (.)
    var rg3 = /^(nul|prn|con|lpt[0-9]|com[0-9])(\.|$)/i; // forbidden file names
    return function isValid(fname){
      return rg1.test(fname) && !rg2.test(fname) && !rg3.test(fname);
    };
  })();

  if (isValid(isdir) === true){
    const input = await question.questions();
    // console.log(input);
    const { filename, extension } = input;
    // console.log(filename);
    create.create(filename, extension);
    console.log(chalk.blue('File created successfully') + chalk.red('!!!'));

    return 0;
  }

  if (isValid(isdir) === false){
    const dirRes = await ifdir.getdir();
    const { dirname } = dirRes;
    create.createdir(dirname);
    console.log(
      chalk.blue('Directory created successfully') + chalk.red('!!!'),
    );
    return 0;
  }
  // if (isdir === 'd') {
  //   const dirRes = await ifdir.getdir();
  //   const { dirname } = dirRes;
  //   create.createdir(dirname);
  //   console.log(
  //     chalk.blue('Directory created successfully') + chalk.red('!!!'),
  //   );
  //   return 0;
  // } if (isdir === 'f') {
  //   const input = await question.questions();
  //   // console.log(input);
  //   const { filename, extension } = input;
  //   // console.log(filename);
  //   create.create(filename, extension);
  //   console.log(chalk.blue('File created successfully') + chalk.red('!!!'));

  //   return 0;
  // }

  if (isdir === 'dld') {
    func.deletedirec();
  } else if (isdir === 'df') {
    func.deletefile();
  } else if (isdir === 'fs') {
    func.filesize();
  } else if (isdir === 'rf') {
    func.renamefile();
  } else if (isdir === 'h' || isdir === 'help') {
    console.log(
      chalk.green(
        'Commands for-\n 1. Directory\n Create: d\n Delete: dld\n' +
          '2. File\n create: f\n Delete: df\n Rename: rf\n Size: fs'
      )
    );
  } else {
    // Invalid response in isdir
    return 2;
  }
};
