const express = require('express');
const http = require('http');
const responseTime = require('response-time');

const router = require('./routes/user.js');

const app = new express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(responseTime());

const myLogger = (req, res, next) => {
    console.log('-------11----------');
    next();
    console.log('-------12----------');
    console.dir(res.getHeaders());
}

const myLogger2 = (req, res, next) => {
    console.log('-------21----------');
    next();
    console.log('-------22----------');
    console.dir(res.getHeaders());
}
app.use([myLogger, myLogger2]);

app.use('/person', router);

const server = app.listen(6666, function () {
    const host = server.address().address
    const port = server.address().port
   
    console.log("Example app listening at http://%s:%s", host, port)
})
