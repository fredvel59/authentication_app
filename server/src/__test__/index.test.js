const request = require('supertest');
// const { getAllUser } = require('../api/users/services/users.services');
// const router = require('../api/users/routers/users.routers');
const app = require('../app');

describe('GET /users/all', () => {
  test('should responde a 200 status code', async () => {
    const response = await request(app).get('/users/all').send();
    expect(response.statusCode).toBe(200);
  })
})

describe('GET /users/info', () => {
  test('should responde a 200 status code', async () => {
    const response = await request(app).get('/users/info').send();
    expect(response.statusCode).toBe(200);
  })
})