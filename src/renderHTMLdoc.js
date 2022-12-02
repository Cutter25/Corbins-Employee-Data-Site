function renderTeam(team) {
    const createManager = Manager => {
        return `
        <div class="employee-card">
            <div id="card-head">${Manager.name} Team Manager </div>
            <div id="card-body">
                <ul id="card-info-list">
                    <li> ID: ${Manager.ID}</li>
                    <li> Email: ${Manager.email}</li>
                    <li> Office#: ${Manager.officeNumber}</li>
                </ul>
            </div>
        </div>`
    }
    const createEngineer = Engineer => {
        return ` 
        <div class="employee-card">
            <div id="card-head">${Engineer.name} Engineer </div>
            <div id="card-body">
                <ul id="card-info-list">
                    <li> ID: ${Engineer.ID}</li>
                    <li> Email: ${Engineer.email}</li>
                    <li> GitHub: ${Engineer.gitHub}</li>
                </ul>
            </div>
        </div>`
    }
    const createIntern = Intern => {
        return ` 
        <div class="employee-card">
            <div id="card-head">${Intern.name} Intern </div>
            <div id="card-body">
                <ul id="card-info-list">
                    <li> ID: ${Intern.ID}</li>
                    <li> Email: ${Intern.email}</li>
                    <li> School: ${Intern.education}</li>
                </ul>
            </div>
        </div>`
    }
    const sort = []
    sort.push(team.filter(employee => employee.getRole() === "Manager")
    .map(manager => createManager(manager)))
    sort.push(team.filter(employee => employee.getRole() === "Engineer")
    .map(engineer => createEngineer(engineer)))
    sort.push(team.filter(employee => employee.getRole() === "Intern")
    .map(intern => createIntern(intern)))

    return sort.join("")
}

module.exports = team => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>Document</title>
    </head>
    <body>
        <header class="header"> My Team </header>
        <main>
        ${renderTeam(team)}
        </main>
    </body>
    </html>`
}