const generateManager = function (manager) {
    return `
    <div class="">
        <div class="cardHead">
            <h3>${manager.name}</h3>
            <h4>Manager</h4><i class="material-icons">content_paste</i>
        </div>
        <div class="cardBody">
            <p class="id">ID: ${manager.employeeID}</p>
            <p class="email">Email: <a href="mailto:${manager.employeeEmail}">${manager.employeeEmail}</a></p>
            <p class="office">Office Number: ${manager.employeeOfficeNumber}</p>
        </div>
    </div>
    `;
}

const generateEngineer = function (engineer) {
    return `
    <div class="">
        <div class="cardHead">
            <h3>${engineer.name}</h3>
            <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
        </div>
        <div class="cardBody">
            <p class="id">ID: ${engineer.employeeID}</p>
            <p class="email">Email: <a href="mailto:${engineer.employeeEmail}">${engineer.employeeEmail}</a></p>
            <p class="github">Github: <a href="https://github.com/${engineer.employeeGitHubUsername}">${engineer.employeeGitHubUsername}</a></p>
        </div>
    </div>
    `}

const generateIntern = function (intern) {
    return `
    <div class="">
        <div class="cardHead">
            <h3>${intern.name}</h3>
            <h4>Intern</h4><i class="material-icons">assignment_ind</i>
        </div>
        <div class="cardBody">
            <p class="id">ID: ${intern.employeeID}</p>
            <p class="email">Email:<a href="mailto:${intern.employeeEmail}">${intern.employeeEmail}</a></p>
            <p class="school">School: ${intern.employeeEducation}</p>
        </div>
    </div>
    `
};

generateHTML = (data) => {

    // array for cards 
    pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 


        // call manager card function
        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        // calling engineer card function
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        // calling intern card function 
        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }
        
    }

    const employeeCards = pageArray.join('')

    // return to generated page
    const generateTeam = generateHTML(employeeCards); 
    return generateTeam;

}

// generate the HTML 
const generateHTML = function (employeeCards) {   
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <header>
            <nav class="nav" id="nav">
                <span class="">Employees</span>
            </nav>
        </header>
        <main>
            <div class="employeeCards">
                <!--Team Cards-->
                ${employeeCards}
            </div>
        </main>
        
    </body>
    <script src="https://code.jquery.com/jquery-3.6.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    </html>
    `;
    }

    module.exports = generateHTML; 