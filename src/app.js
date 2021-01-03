const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, '/public')))

app.engine('hbs', handlebars({
    extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


app.get('/', (req, res) => {
    res.render('homepage');
});

app.get('/news', (req, res) => {
    res.render('news');
});

app.listen(port, (req, res) => console.log(`System running at http://localhost:${port}`));