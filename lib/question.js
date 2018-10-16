const inquirer = require('inquirer');

exports.questions = () => {
  const questions = [
    {
      name: 'filename',
      type: 'input',
      message: 'Name of file: ',
    },
    {
      name: 'extension',
      type: 'input',
      message: 'Extension: ',
    },
  ];
  // console.log(inquirer.prompt(questions));
  return inquirer.prompt(questions);
};
