const inquirer = require('inquirer')

exports.ask = () => {
	const question = [
		{
			name: 'isdir',
			type: 'input',
			message: 'Want to create directory? (Y/n) ',
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
