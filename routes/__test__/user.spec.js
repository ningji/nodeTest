const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const router = require('../user.js');
const service = require('../../services/user.js');

const app = new express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/person', router);

describe('Route get /person/:id', function () {
  test('should return valid data on success', async () => {
    const mockPerson = {"id": 1, "firstName": "a", "lastName": "b"};
    service.getById = jest.fn().mockReturnValue([mockPerson]);
    const res = await request(app).get('/person/1'); 

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(mockPerson);
  });

  test('should return 400 when no such id', async () => {
    service.getById = jest.fn().mockReturnValue([]);
    const res = await request(app).get('/person/1'); 

    expect(res.statusCode).toBe(400);
    expect(res.text).toBe('Not Found');
  });

  test('should return 400 when id is not number', async () => {
    service.getById = jest.fn().mockReturnValue([]);
    const res = await request(app).get('/person/xyz'); 

    expect(res.statusCode).toBe(400);
    expect(res.text).toBe('Not Found');
  });

  test('should return 500 when service throws exception', async () => {
    service.getById = jest.fn(() => { throw new Error('my error')});
    const res = await request(app).get('/person/1'); 

    expect(res.statusCode).toBe(500);
    expect(res.text).toBe('Internal Server Error');
  });
});

describe('Route post /person/list', function () {
  test('should return valid data querying firstname and lastname', async () => {
    const mockPerson = {"id": 1, "firstName": "a", "lastName": "b"};
    service.getByName = jest.fn().mockReturnValue([mockPerson]);
    const res = await request(app).post('/person/list?firstName=a&lastName=b'); 

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([mockPerson]);
  });

  test('should return valid data querying firstname', async () => {
    const mockPerson = {"id": 1, "firstName": "a", "lastName": "b"};
    service.getByName = jest.fn().mockReturnValue([mockPerson]);
    const res = await request(app).post('/person/list?firstName=a'); 

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([mockPerson]);
  });

  test('should return valid data querying lastname', async () => {
    const mockPerson = {"id": 1, "firstName": "a", "lastName": "b"};
    service.getByName = jest.fn().mockReturnValue([mockPerson]);
    const res = await request(app).post('/person/list?lastName=b'); 

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([mockPerson]);
  });

  test('should return all data without query parameter', async () => {
    const mockPerson = [{"id": 1, "firstName": "a", "lastName": "b"},
      {"id": 2, "firstName": "c", "lastName": "d"}];

    service.getByName = jest.fn().mockReturnValue([mockPerson]);
    const res = await request(app).post('/person/list'); 

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([mockPerson]);
  });

  test('should return 500 when service throws exception', async () => {
    service.getByName = jest.fn(() => { throw new Error('my error')});
    const res = await request(app).post('/person/list'); 

    expect(res.statusCode).toBe(500);
    expect(res.text).toBe('Internal Server Error');
  });
});

describe('Route post /person', () => {
  test('should add new user successfully', async () => {
    const mockPerson = {"firstName": "a", "lastName": "b"};
    service.addUser = jest.fn().mockReturnValue({ id:12, ...mockPerson });
    const res = await request(app).post('/person').set('Accept', 'application/json').send(mockPerson);

    expect(res.statusCode).toBe(201);
    expect(res.body.firstName).toEqual('a');
    expect(res.body.lastName).toEqual('b');
  });

  test('should return 400 when missing person data', async () => {
    const mockPerson = {"firstName": "a"};
    service.addUser = jest.fn().mockReturnValue({ id:12, ...mockPerson });
    const res = await request(app).post('/person').set('Accept', 'application/json').send(mockPerson);

    expect(res.statusCode).toBe(400);
    expect(res.text).toBe('Missing user input');
  });

  test('should return 500 when service throws exception', async () => {
    service.addUser = jest.fn(() => { throw new Error('my error')});
    const mockPerson = {"firstName": "a", "lastName": "b"};
    const res = await request(app).post('/person').set('Accept', 'application/json').send(mockPerson);

    expect(res.statusCode).toBe(500);
    expect(res.text).toBe('Internal Server Error');
  });
});
