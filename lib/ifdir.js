const inquirer = require("inquirer");

exports.ask = () => {
  const question = [
    {
      name: "isdir",
      type: "input",
      message:
        "Type (d/f) to create a Directory/file or (dld/df) to delete a directory/file (rf/fs) to rename file/get file size "
    }
  ];

  return inquirer.prompt(question);
};

exports.getdir = () => {
  const getdir = [
    {
      name: "dirname",
      type: "input",
      message: "Directory name: "
    }
  ];

  return inquirer.prompt(getdir);
};
