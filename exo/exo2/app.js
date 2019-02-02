const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    res.send('<h1>Users</h1>');
    next();
})

app.use('/', (req, res, next) => {
    res.send('<h1>Hello</h1><a href="./users">users</a>');
    
})

app.listen(3000);


