const hola = require('./app');

test("Debe responder Hola Mundo desde DevOps CI/CD!", () => {
    expect(hola()).toBe("Hola Mundo desde DevOps CI/CD!");
});
