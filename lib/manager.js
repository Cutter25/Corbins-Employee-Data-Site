// importing Employee constructor 
const Employee = require("./Employee");

// engineer constructor extends employee constructor 
class Manager extends Employee {
    constructor (name, employeeID, employeeEmail, employeeOfficenumber) {

        // using super keyword to call upon employee constructor 
        
        super (name, employeeID, employeeEmail);

        this.employeeOfficenumber = employeeOfficenumber; 
    }

    getGithub () {
        return this.employeeOfficenumber;
    }

     // chanhges role to Manager
    getRole () {
        return "Manager";
    }
}

module.exports = Manager; 