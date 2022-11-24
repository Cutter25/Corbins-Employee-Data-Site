// importing Employee constructor 
const Employee = require("./Employee");

// engineer constructor extends employee constructor 
class Engineer extends Employee {
    constructor (name, employeeID, employeeEmail, employeeGitHubUsername) {

        // using super keyword to call upon employee constructor 
        
        super (name, employeeID, employeeEmail);

        this.employeeGitHubUsername = employeeGitHubUsername; 
    }

    getGithub () {
        return this.employeeGitHubUsername;
    }

     // chanhges role to engineer
    getRole () {
        return "Engineer";
    }
}

module.exports = Engineer; 