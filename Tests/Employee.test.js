const Employee = require("../lib/Employee");
const Employee = require("./lib/employee");

test('employee has name, ID, and an email', () => {
    const Employee = new Employee('Corbin', 2, 'email@email.com');

    expect(Employee.name).toEqual('Corbin');
    expect(Employee.ID).toEqual(2);
    expect(Employee.email).toEqual('email@email.com');
});