const generateManager = function (manager) {
    return `
    <div class="">
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
    </div>
    `;
}

const generateEngineer = function (engineer) {
    return `
    <div class="">
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
    </div>
    `}

const generateIntern = function (intern) {
    return `
    <div class="">
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
</div>
    `
};
