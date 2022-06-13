const mockData = require('./mockDataset.json');
const service = require('../user.js');

jest.mock('../../dataset.json', () => mockData);

describe('Get by id', () => {
    test('Should get record successfully', () => {
        const ret = service.getById(1);
        expect(ret[0].id).toStrictEqual(1);
        expect(ret[0].firstName).toStrictEqual('firstName1'); 
        expect(ret[0].lastName).toStrictEqual('lastName1'); 
    });

    test('Should return emptry array if the id doesn\'t exist', () => {
        const ret = service.getById(1000);
        expect(ret.length).toStrictEqual(0);
    });

    test('Should return emptry array if the id is not a number', () => {
        const ret = service.getById(1000);
        expect(ret.length).toStrictEqual(0);
    });
});

describe('Add user', () => {
    test('Should add record successfully', () => {
        let total = mockData.length;

        const ret = service.addUser({ firstName: 'newFirstName', lastName: 'newLastName' });
        expect(ret.id).toStrictEqual(total + 1);
        expect(ret.firstName).toStrictEqual('newFirstName'); 
        expect(ret.lastName).toStrictEqual('newLastName'); 
    });

    test('Should throw error on missing input', () => {
        try {
            const ret = service.addUser({ firstName: 'newFirstName' });
        }catch(e) {
            expect(e.message).toStrictEqual('Missing user input'); 
        }
    });
});

describe('Get by name', () => {
    test('Should get record by firstname and lastname successfully', () => {
        const ret = service.getByName({ firstName: 'firstName1', lastName: 'lastName1' });

        const found = mockData.filter(e => e.firstName === 'firstName1' && e.lastName === 'lastName1');
        expect(ret).toStrictEqual(found);
    });

    test('Should get record by firstname successfully', () => {
        const ret = service.getByName({ firstName: 'firstName1' });

        const found = mockData.filter(e => e.firstName === 'firstName1');
        expect(ret).toStrictEqual(found);
    });

    test('Should get record by lastname successfully', () => {
        const ret = service.getByName({ lastName: 'lastName1' });

        const found = mockData.filter(e => e.lastName === 'lastName1');
        expect(ret).toStrictEqual(found);
    });

    test('Should get all records successfully', () => {
        const ret = service.getByName();

        expect(ret.length).toStrictEqual(mockData.length);
    });
});