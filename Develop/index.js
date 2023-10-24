// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'what is your project name?',
        name: 'projectName',
    },
    {
        type: 'input',
        message: 'Please write a short description of your project:',
        name: 'description',
    },
    {
        type: 'list',
        message: 'What kind of license should your project have? ( use arrow keys )',
        name: 'license',
        choices: ['APACHE 2.0','MIT','GPL 3.0','BSD 3','none'],
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies? (npm i)',
        name: 'command',
    },
    {
        type: 'input',
        message: 'What should br run to run tests? (npm test)',
        name: 'test',
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'repo',
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributing',
    },
];

// TODO: Create a function to write README file
const readMe = ({username, email,projectName, description, license,command,test,repo,contributing}) => {
    return `
# ${projectName}


## Description

${description}

## Table of content





## Installation
to install necessary dependencies, run the following command:

${command}

## Usage 
${repo}

## License 
This porject is licensed under the ${license} license.

## Contributing 
${contributing}

## Tests 
To run tests, run the following command:
${test}

## Questions
If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at ${username}
`
}

const init = async () => {
    try {
        const userResponse = await inquirer.prompt(questions);

        const rmeContent = readMe(userResponse)

        const fileData = await fs.promises.writeFile('README.md', rmeContent);

        console.log('Success')

    } catch (err) {
        console.log(err);
    }
}

// TODO: Create a function to initialize app

// Function call to initialize app
init();
