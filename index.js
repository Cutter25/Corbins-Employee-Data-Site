// requireing packages

const inquirer = require('inquirer');
const fs = require('fs');

// Quesitons for user

// Choose employee

const employeeType = [
    {
        type: 'list',
        message: 'What type of employee are you entering?',
        choices: ["Intern", "Engineer", "Manager"],
        name: 'employeeType',
    },
];

const questions = {

    Intern: [

        {
            type: "input",
            name: "name",
            message: "What is the employee's name?",
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'Employee ID?',
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: 'Employee email?',
        },
        {
            type: 'input',
            name: 'employeeEducation',
            message: 'What school is this employee attending for coding education?',
        },
        {
            type: "list",
            name: "newEmployee",
            message: "Do you want to add another employee?",
            choices: ["Yes", "No"]
        }
    ],

    Engineer: [
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?",
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'Employee ID?',
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: 'Employee email?',
        },
        {
            type: 'input',
            name: 'employeeGitHubUsername',
            message: 'Employee GitHub username?',
        },
        {
            type: "list",
            name: "newEmployee",
            message: "Do you want to add another employee?",
            choices: ["Yes", "No"]
        }
    ],

    Manager: [
        {
            type: "input",
            name: "name",
            message: "What is the manager's name?",
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'Employee ID?',
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: 'Employee email?',
        },
        {
            type: 'input',
            name: 'employeeOfficeNumber',
            message: 'Employee office number?',
        },
        {
            type: "list",
            name: "newEmployee",
            message: "Do you want to add another employee?",
            choices: ["Yes", "No"]
        }
    ]
};