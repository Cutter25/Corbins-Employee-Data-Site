function renderTeam(team) {
    const createManager = manager => {
        return ``
    }
    const createEngineer = Engineer => {
        return ``
    }
    const createIntern = Intern => {
        return ``
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
        ${renderTeam(team)}
    </body>
    </html>`
}