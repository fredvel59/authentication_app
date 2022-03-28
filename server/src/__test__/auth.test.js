const request = require('supertest');
const app = require('../app');

describe('POST /auth/login', () => {
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
  test('When the email is verified', async () => {
    const data = {
      email: 'vsf13827575p122@pre.fcpn.edu.bo'
    } 
    const response = await request(app).post('/auth/login').send(data); 
    expect(response.body.emailVerified).toBe(undefined) 
  } )
})

describe('POST /auth/verifyEmail', () => {
  test('When the email is not correct', async () => {
    const response = await request(app).post('/auth/verifyEmail').send({
      email: 'freddyvelarde59@gmail.co'
    })
    expect(response.body.message).toEqual('Your email is not correct, try again')
    expect(response.statusCode).toBe(200)
  })

  test('When the email is verified successfully', async () => {
    const response = await request(app).post('/auth/verifyEmail').send({
      email: 'freddyvelarde59@gmail.com',
      key: 'kfqZ6S8qhrrB'
    })
    expect(response.body.emailVerified).toBe(true)
    expect(response.statusCode).toBe(200)
  })

  test("When the email isn't verified successfully", async () => {
    const response = await request(app).post('/auth/verifyEmail').send({
      email: 'freddyvelarde59@gmail.com',
      key: 'kfqZ6S8qhrr'
    })
    expect(response.body.emailVerified).toBe(false)
    expect(response.statusCode).toBe(200)
  })
})

