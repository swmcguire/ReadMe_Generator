// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

inquirer
  .prompt([
    //-----------------------------## Project Title
    {
      type: 'input',
      message: 'What is the name of your project?',
      name: 'username',
    },
    //-----------------------------## Description
    {
        type: 'input',
        message: 'Please provide a description of your project.',
        name: 'username',
      },
      {
        type: 'input',
        message: 'What was the motivation for your project?',
        name: 'username',
      },
      {
        type: 'input',
        message: 'What problem does it solve?',
        name: 'username',
      },
      //-----------------------------## Installation
      {
        type: 'input',
        message: 'Please provide a description for the steps required to install your project.',
        name: 'username',
      },
      //-----------------------------## Usage
      {
        type: 'input',
        message: 'Please provide a description on usages.',
        name: 'username',
      },
      {
        type: 'input',
        message: 'Please provide a link to a screenshot of your finished product.',
        name: 'username',
      },
      {
        type: 'input',
        message: 'Please describe your screenshot for your alt tag.',
        name: 'username',
      },
      //-----------------------------## Credits
      {
        type: 'input',
        message: 'Please list any collaborators or site any outside sources.',
        name: 'username',
      },
      //-----------------------------## License
      {
        type: 'input',
        message: 'Please choose a list.',
        name: 'username',
      },
     //-----------------------------## Badges

     //-----------------------------## Features

     //-----------------------------## How to Contribute

     //-----------------------------## Tests

  ])
  
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );




// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

console.log(inquirer);
console.log(fs);
