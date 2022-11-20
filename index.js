// requireing packages

const inquirer = require('inquirer');
const fs = require('fs');

// Quesitons for user

const questions = [
    {
        type: 'list',
        message: 'What type of employee are you entering?',
        choices: ["Engineer", "Intern", "Manager"],
        name: 'employee',
    },
    {
        type: 'input',
        message: 'Employee ID?',
        name: 'employeeID',
    },
    {
        type: 'input',
        message: 'Employee email?',
        name: 'employeeEmail',
    },
    {
        type: 'input',
        message: 'Employee office number?',
        name: 'employeeOfficeNumber'
    },
    {
        type: 'input',
        message: 'Employee GitHub username?',
        name: 'employeeGitHubUsername'
    },
    {
        type: 'input',
        message: 'What school did this employee go to for coding education?',
        name: 'employeeEducation'
    },
]