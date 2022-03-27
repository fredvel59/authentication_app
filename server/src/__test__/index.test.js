const request = require('supertest');
const app = require('../app');

describe('GET /users/all', () => {
  test('should responde a 200 status code', async () => {
    const response = await request(app).get('/users/all').send();
    expect(response.statusCode).toBe(200);
  })
})

describe("POST /auth/verifyEmail", () => {
  test('Should responde a 200 status code', async () => {
    const response = await request(app).post('/auth/verifyEmail').send({'key': 'something'});
    expect(response.statusCode).toBe(200)
  } )
})

// describe('POST /changepasswd/:id', () => {
//   test('should responde a 200 status code', async () => {
//     const response = await request(app).get('/').send({});
//     expect(response.statusCode).toBe(200);
//   })
// })


// describe('GET /users/info', () => {
//   test('should responde a 200 status code', async () => {
//     const response = await request(app).get('/users/info').send();
//     expect(response.statusCode).toBe(200);
//   })
// })
