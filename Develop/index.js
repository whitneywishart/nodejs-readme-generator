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
    choices: ['None', 'Apache License 2.0', 'Boost Software License 1.0', 'BSD 2-Clause \"Simplified\" License', 'BSD 3-Clause \"New\" or \"Revised\" License', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU General Public License v2.0', 'GNU General Public License v3.0', 'MIT License', 'Mozilla Public License 2.0', 'The Unlicense'],
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
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Success! Your README.md has been generated.");
  })
}


// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(function (userInput) {
      console.log(userInput)
      writeToFile("README.md", generateMarkdown(userInput))
    });
}


// Function to initialize app
init();


