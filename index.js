// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of your project:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information:',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Enter credits and collaborators:',
    },
    {
      type: 'input',
      name: 'license',
      message: 'Enter license information:',
    },
    {
      type: 'input',
      name: 'badges',
      message: 'Enter badges:',
    },
    {
      type: 'input',
      name: 'features',
      message: 'Enter project features:',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Enter contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter test instructions:',
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.log(`An error occurred while writing the file: ${err}`);
      } else {
        console.log(`README.md file generated successfully!`);
      }
    });
  }
  
// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt(questions)
      .then((answers) => {
        const fileName = 'README.md';
        const readmeContent = generateMarkdown(answers);
        writeToFile(fileName, readmeContent);
      })
      .catch((error) => {
        console.log(`An error occurred: ${error}`);
      });
  }

// Function call to initialize app
init();
