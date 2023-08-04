const inquirer = require('inquirer');
const fs = require('fs');

function questions() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Which shape would you like to choose?',
                name: 'shape',
                choices: [
                    'triangle', 'circle', 'rectangle'],
            },
    
            {
                type: 'input',
                message: 'What color would you like the background of the logo to be?',
                name: 'bgColor',
            },

            {
                type: 'input',
                message: 'What color would you like the text in your logo to be?',
                name: 'textColor',
            },

            {
                type: 'input',
                message: 'Enter at minimum 3 characters for logo.',
                name: 'text'
            }
        ])
        .then((answers) => {
            console.log(answers);
    
            fs.writeFile('./output/logo.svg', JSON.stringify(response, null, '\t'), (err) => 
                err ? console.error(err) : console.log('Successfully created logo!')
                );
        });
};

modules.export = questions();