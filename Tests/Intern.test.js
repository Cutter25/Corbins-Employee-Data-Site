const Intern = require("../lib/Intern");

test('gets role of the intern', () => {
    const intern = new Intern('Corbin', 1, 'fakeemail@gmail.com');

    expect(intern.getRole()).toEqual("Intern");
}); 