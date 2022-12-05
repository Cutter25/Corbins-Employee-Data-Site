const Employee = require("../lib/Employee");

test('gets role of the employee', () => {
    const employee = new Employee('Corbin', 1, 'fakeemail@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 