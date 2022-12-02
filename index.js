// requireing packages

const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
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
        employeeQuestions()
    })
}
    function employeeQuestions () {
    // .then (function employeeQuestions () {
    inquirer.prompt([
            {
                type:'list',
                name:'role',
                message: 'What kind of employee will you add?',
                choices:['Engineer', 'Intern', 'Build Team']
            },
    ]) .then ((userChoice) => {
        switch (userChoice.role) {
            case 'Engineer':
                engineerQuestions()
                break;
            case 'Intern': 
                internQuestions()
                break;
            default:
                buildTeam()
        }
    })
}

function engineerQuestions() {
    inquirer.prompt([
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
            message:'What is the Github username of the engineer?',
        },
    ]) .then((engineerAnswers) => {
        const engineer = new Engineer(engineerAnswers.name, engineerAnswers.ID, engineerAnswers.email, engineerAnswers.gitHub)
        employees.push(engineer)
        employeeQuestions()
    })
} 

function internQuestions() {
    inquirer.prompt([
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
            name:'education',
            message:'What school did this employee attend?',
        },
    ]) .then((internAnswers) => {
        const intern = new Intern(internAnswers.name, internAnswers.ID, internAnswers.email, internAnswers.education)
        employees.push(intern)
        employeeQuestions()
    })
} 
          
// function to create HTML file

function buildTeam() {
    fs.writeFileSync("./dist/index.html", renderHTMLdoc(employees), err)
        if(err){
            console.log(err)
        } else {
            console.log("Employee data site has been generated!")
        }
};


// function to be ran when page is invoked by node index.js

managerQuestions();

