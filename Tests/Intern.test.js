const Intern = require("../lib/engineer");
const Intern = require("./lib/engineer");

test('employee has name, ID, and an email', () => {
    const Intern = new Intern('Corbin', 4, 'email@email.com');

    expect(Employee.name).toEqual('Corbin');
    expect(Employee.ID).toEqual(4);
    expect(Employee.email).toEqual('email@email.com');
});