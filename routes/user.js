const express = require('express');
const router = express.Router();
const service = require('../services/user.js');

// curl http://localhost:6666/person/1
router.get('/:id', (req, res) => {
    const { id } = req.params;

    if(isNaN(id)) return res.status(400).send('Not Found');

    try {
        const ret = service.getById(id);

        if(ret.length === 0) return res.status(400).send('Not Found');
        return res.send(ret[0]); // to simplify, assume only 1 entry
    } catch (e) {
        res.status(500).send('Internal Server Error');
    }
});

// curl -X POST 'http://localhost:6666/person/list'
// curl -X POST 'http://localhost:6666/person/list?firstName=Donald'
// curl -X POST 'http://localhost:6666/person/list?lastName=Duck'
// curl -X POST 'http://localhost:6666/person/list?firstName=Donald&lastName=Duck'
router.post('/list', (req, res) => {
    const { firstName = '', lastName = '' } = req.query;
    try {
        const ret = service.getByName({ firstName, lastName });

        return res.status(200).send(ret);
    } catch (e) {
        // console.error(e);
        res.status(500).send('Internal Server Error');
    }
});

// curl -X POST 'http://localhost:6666/person/' -H 'Content-Type: application/json'
//      -d '{"firstName": "new1", "lastName": "new2"}'
router.post('/', (req, res) => {
    const { firstName = '', lastName = '' } = req.body;
    if (firstName === '' || lastName === '') // keep the checks simple for demo propose
        res.status(400).send('Missing user input');

    try {
        const ret = service.addUser({ firstName, lastName });
        return res.status(201).send(ret);
    } catch (e) {
        // console.error(e);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
