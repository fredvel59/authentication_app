const app = require('../app');
const request = require('supertest');


describe('GET /users/allUsers/admin', () => {
  // test('This test should responde with a json object', async () => {
  //   const response = await request(app).get('/users/allUsers/admin').send();
  //   expect(response.headers['Content-type']).toEqual(expect.stringContaining('json'));
  // })
  test('When the there is no access admin', async () => {
    const response = await request(app).get('/users/allUsers/admin').send()
    expect(response.body.access).toBe(false);
  })
  test('This test should responde 200 status code', async () => {
    const response = await request(app).get('/users/allUsers/admin').send();
    expect(response.statusCode).toBe(200);
  })
})