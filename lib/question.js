const inquirer = require("inquirer");

exports.questions = () => {
  const questions = [
    {
      name: "filename",
      type: "input",
      message: "Name of file (name.extension): "
    }
  ];
  // console.log(inquirer.prompt(questions));
  return inquirer.prompt(questions);
};

exports.rename = () => {
  const rename = {
    name: "newname",
    type: "input",
    message: "Rename to: "
  };

  return inquirer.prompt(rename);
};
