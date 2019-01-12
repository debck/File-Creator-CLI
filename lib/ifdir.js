const inquirer = require('inquirer')

exports.ask = () => {
	const question = [
		{
			name: 'isdir',
			type: 'input',
			message: 'Do you want to create directory (d) or file (f) ? (d/f) ',
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
