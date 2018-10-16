#!/usr/bin/env node

const shell = require('shelljs');
const inquirer = require('inquirer');
const chalk = require('chalk');
const header = require('../lib/header');
const question = require('../lib/question');
const create = require('../lib/create');

const main = async () => {
  header.init();

  const input = await question.questions();
  // console.log(input);
  const { filename, extension } = input;
  // console.log(filename);
  create.create(filename, extension);

  console.log(chalk.blue('File created successfully') + chalk.red('!!!'));
};

main();
