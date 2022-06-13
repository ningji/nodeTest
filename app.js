const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const router = require('./routes/user.js');

const app = new express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.use(express.json());
app.use('/person', router);

const server = app.listen(6666, function () {
    const host = server.address().address
    const port = server.address().port
   
    console.log("Example app listening at http://%s:%s", host, port)
})
