class Employee {
    constructor (name, employeeID, employeeEmail) {
        this.name = name;
        this.employeeID = employeeID;
        this.employeeEmail = employeeEmail 
    }

// returning input from user

    getName () {
        return this.name;
    }

    getId () {
        return this.employeeID;
    }   

    getEmail () {
        return this.employeeEmail;
    }

    getRole () {
        return 'Employee'; 
    }
};

module.exports = Employee; 