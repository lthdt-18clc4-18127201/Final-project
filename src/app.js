const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bcrypt = require('bcrypt');
const handlebars = require('express-handlebars');
const { userInfo } = require('os');
const app = express();
const passport = require('passport');
const route = require('./routes/app');
const port = 5000; 
const db = require('./config/db/connect');
const users =[]

db.connect();
// const initializePassport = require('../passport-config');
// initializePassport(passport);

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.engine('hbs', handlebars({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b,
    },
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));


route(app);


app.listen(port, (req, res) => console.log(`System running at http://localhost:${port}`));  