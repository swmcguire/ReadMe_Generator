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
      name: 'project',
    },
    //-----------------------------## Description
    {
        type: 'input',
        message: 'Please provide a description of your project.',
        name: 'description',
      },
      {
        type: 'input',
        message: 'What was the motivation for your project?',
        name: 'motivation',
      },
      {
        type: 'input',
        message: 'What problem does it solve?',
        name: 'solves',
      },
      //-----------------------------## Installation
      {
        type: 'input',
        message: 'Please provide a description for the steps required to install your project.',
        name: 'install',
      },
      //-----------------------------## Usage
      {
        type: 'input',
        message: 'Please provide a description on usages.',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Please provide a link to a screenshot of your finished product.',
        name: 'screenshotUrl',
      },
      {
        type: 'input',
        message: 'Please describe your screenshot for your alt tag.',
        name: 'altTag',
      },
      //-----------------------------## Credits
      {
        type: 'input',
        message: 'Please list any collaborators or site any outside sources.',
        name: 'credit',
      },
      //-----------------------------## License
      {
        type: 'list',
        message: 'Please choose a list.',
        name: 'license',
        choices:['a','b','c','d'], 
      },
      {
        type: 'password',
        message: 'What is your password?',
        name: 'password',
      },
      {
        type: 'password',
        message: 'Re-enter password to confirm:',
        name: 'confirm',
      },
     //-----------------------------## Badges

     //-----------------------------## Features

     //-----------------------------## How to Contribute

     //-----------------------------## Tests

     //-----------------------------## Questions

  ])
  
  .then((answers) =>
    response.confirm === response.password
    ? console.log(answers)
    : console.log('You forgot your password already?!')
      //console.log(answers);
  );


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

//console.log(inquirer);
//console.log(fs);

