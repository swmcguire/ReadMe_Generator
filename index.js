// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [

  //-----------------------------## Project Title
  {
    type: 'input',
    message: 'What is the name of your project?',
    name: 'title',
  },
  //-----------------------------## Description
  {
    type: 'input',
    message: 'Please provide a description of your project.',
    name: 'description',
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
    message: 'Where can your live site be found?',
    name: 'liveSite',
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
    choices: ['MIT', 'Other', 'GPLv2', 'Apache', 'GPLv3'],
  },
  //-----------------------------## Questions
  {
    type: 'input',
    message: 'What is your gitHub user name?',
    name: 'gitHubName',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  },
];

//----------------------------- 
inquirer.prompt(questions).then((answers) => {
  const readMeContent = generateReadMe(answers);

  //----------------------------- Write file to README.md
  fs.writeFile('README.md', readMeContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
  );
});


const generateReadMe = ({ title, licenseBadge, description, install, usage, liveSite, credit, license, licenseText, email, gitHubName}) =>
`# ${title}

## Description
${licenseBadge}
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation Instructions
${install}

## Usage
${usage}

Website found here:   ${liveSite}

## Credits
${credit}

## License
${license} License

${licenseText}

## Contributing
If you'd like to contribute please feel free to reach out at ${email}

## Tests
Not Applicable in this scenario

## Questions
If you have any questions feel free to reach out at https://github.com/${gitHubName}
Any additional questions please reach out to me directly at ${email}`
