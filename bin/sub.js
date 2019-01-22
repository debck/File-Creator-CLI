const inquirer = require("inquirer");
const chalk = require("chalk");
const header = require("../lib/header");
const question = require("../lib/question");
const create = require("../lib/create");
const ifdir = require("../lib/ifdir");

const func = require("../lib/functions");

const main = (exports.main = async () => {
  header.init();

  const result = await ifdir.ask();

  const { isdir } = result;

  if (isdir === "d") {
    const dir_res = await ifdir.getdir();
    const { dirname } = dir_res;
    create.createdir(dirname);
    console.log(
      chalk.blue("Directory created successfully") + chalk.red("!!!")
    );
    return 0;
  } else if (isdir === "f") {
    const input = await question.questions();
    // console.log(input);
    const { filename, extension } = input;
    // console.log(filename);
    create.create(filename, extension);
    console.log(chalk.blue("File created successfully") + chalk.red("!!!"));

    return 0;
  } else if (isdir === "dld") {
    func.deletedirec();
  } else if (isdir === "df") {
    func.deletefile();
  } else if (isdir === "fs") {
    func.filesize();
  } else if (isdir === "rf") {
    func.renamefile();
  } else {
    // Invalid response in isdir
    return 2;
  }
});
