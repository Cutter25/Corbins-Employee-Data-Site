const Employee = require("./Employee")

class Intern extends Employee {
    constructor (name, ID, email, education) {
        super (name, ID, email)
        this.education = education;
    };
    getEducation() {
        return this.education
    }

    getRole() {
        return "Intern"
    }
};

module.exports = Intern; 