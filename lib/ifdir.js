'use strict';
const inquirer = require('inquirer');

exports.ask = () => {
  const question = [
    {
      name: 'isdir',
      type: 'input',
      message: 'Enter command (Type "help" or "h" to see all commands):',
    },
  ];

  return inquirer.prompt(question);
};

exports.getdir = () => {
  const getdir = [
    {
      name: 'dirname',
      type: 'input',
      message: 'Directory name: ',
    },
  ];

  return inquirer.prompt(getdir);
};
