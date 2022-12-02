const Engineer = require("../lib/engineer");
const Engineer = require("./lib/engineer");

test('employee has name, ID, and an email', () => {
    const Engineer = new Engineer('Corbin', 3, 'email@email.com');

    expect(Employee.name).toEqual('Corbin');
    expect(Employee.ID).toEqual(3);
    expect(Employee.email).toEqual('email@email.com');
});