// requireing packages

const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Employee = require("./lib/employee");

// generate package requirement

const generateHTML = require("./src/renderHTMLdoc");

// Empty space variable to store employee data from user input

let employees = [];

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

// Quesitons to build employee card

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

const writeFile = data =>{
    fs.renderHTMLDoc("./dist/index.html", data, err=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("Your employee data site has been generated successfully!")
        }
    })
};

function newEmployee() {
    inquirer.prompt(employeeType)
    .then(typeOfEmployee => {
        if (typeOfEmployee.employeeType === "Intern") {
            inquirer.prompt(quesions.Intern)
            .then(internInfo => {
                const intern = new Intern
                (
                    internInfo.name,
                    internInfo.employeeID,
                    internInfo.employeeEmail,
                    internInfo.employeeEducation,
                );
                employees.push(Intern);
                if (internInfo.newEmployee === "Yes") {
                    newEmployee();
                } else {
                    renderHTMLDoc();
                }
            });
        } else if (typeOfEmployee.employeeType === "Engineer") {
            inquirer.prompt(quesions.Engineer)
            .then(engineerInfo => {
                const engineer = new Engineer
                (
                    engineerInfo.name,
                    engineerInfo.employeeID,
                    engineerInfo.employeeEmail,
                    engineerInfo.employeeGitHubUsername,
                );
                employees.push(Engineer);
                if (engineerInfo.newEmployee === "Yes") {
                    newEmployee();
                } else {
                    renderHTMLDoc();
                };
            });
        } else if (typeOfEmployee.employeeType === "Manager") {
            inquirer.prompt(quesions.manager)
            .then(managerInfo => {
                const manageer = new Manager
                (
                    managerInfo.name,
                    managerInfo.employeeID,
                    managerInfo.employeeEmail,
                    managerInfo.employeeOfficeNumber,
                );
                employees.push(Engineer);
                if (engineerInfo.newEmployee === "Yes") {
                    newEmployee();
                } else {
                    renderHTMLDoc();
                };
            });
        };
    });
};

// function to be ran when page is invoked by node index.js

newEmployee();
