const hola = require('./app');

test("Debe responder Hola Mundo", () => {
    expect(hola()).toBe("Hola Mundo desde DevOps!");
});
