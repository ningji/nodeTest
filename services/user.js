const dataset = require('../dataset.json');

const getByFirstName = (name) => dataset.filter(e => e.firstName === name);
const getByLastName = (name) => dataset.filter(e => e.lastName == name);
const getByFirstLastName = (firstName, lastName) => {
    const ret = dataset.filter(e => (e.firstName === firstName && e.lastName === lastName));
    return ret;
}

const getByName = (name = {}) => {
    const { firstName, lastName } = name;

    if (firstName && lastName)
        return getByFirstLastName(firstName, lastName);
    else if (firstName)
        return getByFirstName(firstName);
    else if (lastName)
        return getByLastName(lastName);
    else
        return dataset;
}

const getById = (id) => dataset.filter(e => e.id == id);

const addUser = (name = {}) => {
    const { firstName, lastName } = name;
    if (firstName === '' || lastName === '') // keep the checks simple for demo propose
        throw new Error('Missing user input');

    const newEntry = { id: dataset.length+1, firstName, lastName };   
    dataset.push(newEntry);

    return newEntry;
}

module.exports = { getById, getByName, addUser };
