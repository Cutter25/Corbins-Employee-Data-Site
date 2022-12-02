// requireing packages

const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Employee = require("./lib/employee");
const renderHTMLdoc = require("./src/renderHTMLdoc");

// Empty space variable to store employee data from user input

let employees = [];

// Quesitons for user (manager first)

function managerQuestions() {
    inquirer.prompt([
            {
                type: 'input',
                message: 'What is the managers name?',
                name: 'name',
            },
            {
                type: 'input',
                message: 'What is the managers ID?',
                name: 'ID',
            },
            {
                type: 'input',
                message: 'What is the managers email?',
                name: 'email',
            },
            {
                type: 'input',
                message: 'What is the managers office number?',
                name: 'officeNumber',
            },
        ])
    .then (function managerAnswers () {
        const {name, ID, email, officeNumber} = managerAnswers;
        const newManager = new Manager (name, ID, email, officeNumber);
        employees.push(newManager);
    })
    .then (function employeeQuestions () {
    inquirer.prompt([
            {
                type:'list',
                name:'role',
                choices:['Engineer', 'Intern']
            },
            {
                type: 'input',
                message: 'What is the employees name?',
                name: 'name',
            },
            {
                type: 'input',
                message: 'What is the employees ID?',
                name: 'ID',
            },
            {
                type: 'input',
                message: 'What is the employees email?',
                name: 'email',
            },
            {
                type:'input',
                name:'gitHub',
                when: (input) => input.role === 'Engineer',
                message:'What is the Github username of the engineer?',
            },
            {
                type:'input',
                name:'education',
                when: (input) => input.role === 'Intern',
                message:'What school did this employee attend?',
            },
            {
                type: 'list',
                name:'newEmployee',
                message:'Would you like to add another employee to the team?',
                choices: ['Yes', 'No'],
            },
        ]) 
        .then (function employeeAnswers() {
            let {name, ID, email, role, gitHub, education, newEmployee} = employeeAnswers;
            let Employee;
            
            // data will be passed through constructor function

            if (role === 'Engineer'){
                Employee = new Engineer (name, ID, email, gitHub);
            }

            if (role === 'Intern'){
                Employee = new Intern (name, ID, email, education);
            }

            if (newEmployee === 'Yes') {  
             //   employeeQuestions ()
             console.log("Hello World!")
            } else {
                return employees
            }

            employees.push(Employee)
        })
    })
};    

// function to create HTML file

function writeFile(data) {
    fs.writeFile("./dist/index.html", data, err)
        if(err){
            console.log(err)
        } else {
            console.log("Employee data site has been generated!")
        }
};


// function to be ran when page is invoked by node index.js

managerQuestions();

