const shell = require("shelljs");
const question = require("../lib/question");
const ifdir = require("../lib/ifdir");
const fs = require("fs");

exports.deletefile = async () => {
  const input = await question.questions();
  const { filename } = input;
  const name = filename;
  shell.rm(name);
};

exports.deletedirec = async () => {
  const dir_res = await ifdir.getdir();
  const { dirname } = dir_res;
  shell.rm("-rf", dirname);
};

exports.renamefile = async () => {
  const input = await question.questions();
  const { filename } = input;
  const name = filename;
  const rename = await question.rename();
  const { newname } = rename;

  fs.rename(name, newname, function(err) {
    if (err) console.log("ERROR: " + err);
  });
};
exports.filesize = async () => {
  const input = await question.questions();
  const { filename } = input;
  const name = filename;

  const fileSizeInBytes = fs.statSync(name).size;
  console.log(fileSizeInBytes + "Bytes");
};
