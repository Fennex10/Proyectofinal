const request = require("supertest");
const app = require("./app");

describe("Prueba del endpoint raíz", () => {
  it("Debe responder Hola Mundo desde DevOps CI/CD!", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hola Mundo desde DevOps CI/CD!");
  });
});
