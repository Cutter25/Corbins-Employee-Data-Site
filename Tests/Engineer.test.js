const Engineer = require("../lib/Engineer");

test('gets role of the Engineer', () => {
    const engineer = new Engineer('Corbin', 1, 'fakeemail@gmail.com');

    expect(engineer.getRole()).toEqual("Engineer");
}); 