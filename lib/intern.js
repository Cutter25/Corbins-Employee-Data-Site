// importing Employee constructor 
const Employee = require("./Employee");

// engineer constructor extends employee constructor 
class Intern extends Employee {
    constructor (name, employeeID, employeeEmail, employeeEducation) {

        // using super keyword to call upon employee constructor 
        
        super (name, employeeID, employeeEmail);

        this.employeeEducation = employeeEducation; 
    }

    getGithub () {
        return this.employeeEducation;
    }

     // chanhges role to Intern
    getRole () {
        return "Intern";
    }
}

module.exports = Intern; 