const Manager = require("../lib/manager");
const Manager = require("./lib/manager");

test('employee has name, ID, and an email', () => {
    const Manager = new Manager('Corbin', 1, 'email@email.com');

    expect(Employee.name).toEqual('Corbin');
    expect(Employee.ID).toEqual(1);
    expect(Employee.email).toEqual('email@email.com');
});