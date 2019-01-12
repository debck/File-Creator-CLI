#!/usr/bin/env node

const shell = require('shelljs');
const inquirer = require('inquirer');
const chalk = require('chalk');
const header = require('../lib/header');
const question = require('../lib/question');
const create = require('../lib/create');
const ifdir = require('../lib/ifdir');

const main = async () => {
	header.init();

	const result = await ifdir.ask();

	const { isdir } = result;

	if (isdir === 'Y' || isdir === 'y') {
		const dir_res = await ifdir.getdir();
		const { dirname } = dir_res;
		create.createdir(dirname);

		return;
	} else {
		const input = await question.questions();
		// console.log(input);
		const { filename, extension } = input;
		// console.log(filename);
		create.create(filename, extension);
		console.log(chalk.blue('File created successfully') + chalk.red('!!!'));
	}
};

main();
