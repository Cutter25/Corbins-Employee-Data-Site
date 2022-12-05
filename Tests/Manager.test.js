const Manager = require("../lib/Manager");

test('gets role of the manager', () => {
    const manager = new Manager('Corbin', 1, 'fakeemail@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 