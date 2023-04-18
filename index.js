// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('utils/generateMarkdown.js');

function createReadMe(name, description, installation, usage, contribute, tests, github, license, email) {
    return `
    ## ${name}
    

    ## Description
    ${description}

    ## Table of Conents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)

    ## Installation
    ${installation}

    ## Usage
    ${usage}

    ## Contributing
    ${contribute}

    ## Tests
    ${tests}

    ## Questions
    If you have any questions my github is: ${github}. You can also reach me via email at: ${email}

    ## License
    ${license}
    `;
    }

    inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project/app?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please provide a description.'
      },
      {
        type: 'imput',
        name: 'installation',
        message: 'Please provide installation instructions'
      },
      {
        type: 'imput',
        name: 'linkedinUrl',
        message: 'What is your linked in URL?'
      },
      {
        type: 'imput',
        name: 'githubUrl',
        message: 'What is your github URL?'
      }
    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();