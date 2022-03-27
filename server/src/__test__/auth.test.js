const request = require('supertest');
const app = require('../app');
// database
// const USERS = require('../api/users/models/users.models');
// validating password from the database
// const { comparePassword } = require('../api/auth/config/bcrypt.compare');

// testing logIn EndPoint
describe('POST /auth/login', () => {
  // describe('When passed a username and password', () => {}) 
  // describe('When password or email is missing', () => { })
  test('When the Email and Password are correct', async () => {
    const data = {
      email: 'freddyvelarde59@gmail.com',
      password: "freddy"
    }
    const response = await request(app).post('/auth/login').send(data);
    expect(response.body.auth).toBe(true)
    expect(response.statusCode).toBe(200)
  })

  test('When the email is not correct', async () => {
    const data = {
      email: 'freddyvelarde59@gmail.co',
      password: ''
    }    
    const response = await request(app).post('/auth/login').send(data)
    expect(response.body.auth).toEqual(false);
  })
})