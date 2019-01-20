const shell = require("shelljs");
const question = require("../lib/question");
const ifdir = require("../lib/ifdir");
const fs = require("fs");

exports.deletefile = async () => {
  const input = await question.questions();
  const { filename } = input;
  const name = filename;
  var x;
  x = shell.rm(name);
  if (x.code) console.log("The file was was not deleted. ");
  else console.log("The file was deleted ");
};

exports.deletedirec = async () => {
  const dir_res = await ifdir.getdir();
  const { dirname } = dir_res;
  x = shell.rm("-rf", dirname);
  if (x.code) console.log("The folder was was not deleted. ");
  else console.log("The folder was deleted ");
};

exports.renamefile = async () => {
  const input = await question.questions();
  const { filename } = input;
  const name = filename;
  const rename = await question.rename();
  const { newname } = rename;

  fs.rename(name, newname, function(err) {
    if (err) console.log("ERROR: " + err);
    else {
      console.log("file was renamed.");
    }
  });
};
exports.filesize = async () => {
  const input = await question.questions();
  const { filename } = input;
  const name = filename;

  const fileSizeInBytes = fs.statSync(name).size;
  console.log(fileSizeInBytes + "Bytes");
};
