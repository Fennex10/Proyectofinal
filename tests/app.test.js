const request = require('supertest');
const server = require('../app');

describe('GET /', () => {
  it('Responde Hola Mundo', async () => {
    const res = await request(server).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toBe('Hola Mundo desde DevOps CI/CD!');
  });
});
