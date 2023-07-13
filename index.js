const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for the user
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
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: [
        'None',
        'Academic Free License v3.0',
        'Apache 2.0 License',
        'Attribution License (BY)',
        'Boost Software License 1.0',
        'BSD 2-Clause License',
        'BSD 3-Clause License',
        'BSD 3-clause Clear license',
        'BSD Zero-Clause license',
        'CC0-1.0',
        'CC BY 4.0',
        'CC BY-NC 4.0',
        'CC BY-ND 4.0',
        'CC BY-NC-SA 4.0',
        'CC BY-NC-ND 4.0',
        'CC BY-SA 4.0',
        'Eclipse Public License 1.0',
        'GNU AGPL v3',
        'GNU FDL v1.3',
        'GNU GPL v2',
        'GNU GPL v3',
        'GNU LGPL v3',
        'IBM Public License Version 1.0',
        'ISC License (ISC)',
        'Mozilla Public License 2.0',
        'Open Database License (ODbL)',
        'Public Domain Dedication and License (PDDL)',
        'SIL Open Font License 1.1',
        'The Artistic License 2.0',
        'The Do What the Fuck You Want to Public License',
        'The Hippocratic License 2.1',
        'The Hippocratic License 3.0',
        'The MIT License',
        'The Perl License',
        'The Unlicense',
        'The zlib/libpng License',
      ],
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
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'URL',
      message: 'Enter the URL:',
    },
  ];

// Function to write the data to a file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.log(`An error occurred while writing the file: ${err}`);
      } else {
        console.log(`README.md file generated successfully!`);
      }
    });
  }

// Function to initialize the application
function init() {
    inquirer
      .prompt(questions)
      .then((answers) => {
        const fileName = 'dist/README.md';
        answers.badges = answers.badges || '';
        const readmeContent = generateMarkdown(answers);
        writeToFile(fileName, readmeContent);
      })
      .catch((error) => {
        console.log(`An error occurred: ${error}`);
      });
  }

// Call the init function to start the application
init();
