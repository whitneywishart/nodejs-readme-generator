// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
inquirer

// Link to markdown file
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'What is the description of your project?',
    name: 'description',
  },
  {
    type: 'input',
    message: 'How do users install your project?',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'How do users use your project?',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'How do users contribute to your project?',
    name: 'contribute',
  },
  {
    type: 'input',
    message: 'How do users test your project?',
    name: 'test',
  },
  {
    type: 'checkbox',
    message: 'What is the appropriate license for your project?',
    name: 'license',
    choices: ['None', 'MIT License', 'other'],
  },
  {
    type: 'input',
    message: 'What is your GitHub user name?',
    name: 'username',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  },
  {
    type: 'input',
    message: 'What should be included in your Table of Contents',
    name: 'toc',
  },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log("Success, lookit yer readme");
  })
}

// Write to the file with anything you pass in as process.argv[2]
// fs.writeFile('log.txt', process.argv[2], (err) =>
//   err ? console.error(err) : console.log('Success!')
// );


// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(function (userInput) {
      console.log(userInput)
      writeToFile("README.md", generateMarkdown(userInput));
    });
}

// Function to initialize app
init();


