const express = require('express');
const app = express();
const path = require('path');


// Routes
const homeRoute = require('./routes/home');
const usersRoute = require('./routes/users');

app.use(express.static(path.join(__dirname, 'public')));
app.use(usersRoute);
app.use(homeRoute);


app.listen(3000);