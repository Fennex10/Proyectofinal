const request = require("supertest");
const app = require("./app");

test("Debe responder Hola Mundo desde DevOps CI/CD!", async () => {
    const res = await request(app).get("/");
    expect(res.text).toBe("Hola Mundo desde DevOps CI/CD!");
});
