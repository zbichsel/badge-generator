// importing necessities 
const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Square, Circle, Rectangle } = require('./lib/shapes.js');
const SVG = require('./lib/svg.js');

//questions prompt
function questions() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'How would you like your logo to read?',
                name: 'text',
            },
            {
                type: 'input',
                message: 'What color would you like the logo to be? (Enter color keyword or hexadecimal value)',
                name: 'textColor',
            },
            {
                type: 'list',
                message: 'Which shape will you choose?',
                name: 'shape',
                choices: ['Triangle', 'Square', 'Circle', 'Rectangle'],
            },
            {
                type: 'input',
                message: 'Which color would you like the logo to be? (Enter color keyword or hexadecimal value)',
                name: 'shapeColor',
            },
        ])
        .then((response) => {
            generateSVG(response)

            if (response.text.length > 3) {
                console.log('No more than 3 characters... Please try again!');
                questions();
            } else {
                writeToFile('logo.svg', svgString)
            }
        });
};

let svgString = "";

function generateSVG(response) {
    let shapeOption;

    if (response.shape === 'Triangle') {
        shapeOption = new Triangle();
    } else if (response.shape === 'Square') {
        shapeOption = new Square();
    } else if (response.shape === 'Circle') {
        shapeOption = new Circle();
    } else if (response.shape === 'Rectangle') {
        shapeOption = new Rectangle();
    }
    shapeOption.setColor(response.shapeColor);

    const svg = new SVG();
    svg.setTextString(response.text, response.textColor);
    svg.setShapeOption(shapeOption);
    svgString = svg.render();
}

function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => err ? console.log(err) : console.log('Generated logo.svg!'));
};

questions()