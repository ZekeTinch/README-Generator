// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'Title',
            message: 'enter project title',
        },
        {
            type: 'input',
            name: 'Description',
            message: 'enter a description of project',
        },
        {
            type: 'input',
            name: 'Installations',
            message: 'describe how to install and use this project',
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'enter usage guide',
        },
        {
            type: 'list',
            name: 'License',
            message: 'license used',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
        },
        {
            type: 'input',
            name: 'Contributing',
            message: 'how would a different user contribute to the project',
        },
        {
            type: 'input',
            name: 'Tests',
            message: 'how should you run a test in this project',
        },
        {
            type: 'input',
            name: 'Github',
            message: 'enter github link',
        },
        {
            type: 'input',
            name: 'Email',
            message: 'enter email',
        },
    ];
    


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        const html = generateMarkdown(data)

        writeToFile('README.md', html);
    })

}

// Function call to initialize app
init();
