import request from "supertest";
import app from "./app.js";

describe("GET /", () => {
  it("Debe responder Hola Mundo desde DevOps CI/CD!", async () => {
    const res = await request(app).get("/");
    expect(res.text).toBe("Hola Mundo desde DevOps CI/CD!");
  });
});
