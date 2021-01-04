const newsRouter = require('./routes');
const homepageRouter = require('./routes');
const loginRouter = require('./routes');
const regitserRouter = require('./routes')

function route(app) {

    // app.use('/', homepageRouter);
    // app.use('/news', newsRouter);
    // app.use('/login', loginRouter);
    // app.use('register', regitserRouter);
    app.get('/', (req, res) => {
        res.render('homepage')
    });

    app.get('/news', (req, res) => {
        res.render('news')
    });

    app.get('/login', (req, res) => {
        res.render('login')
    });

    app.get('/register', (req, res) => {
        res.render('register')
    });

    app.post('/login', (req, res) => {
    
    });
    
    app.post('/register', async (req, res) => {
        try{
            const hasedPassword = await bcrypt.hash(req.body.password, 10)
            users.push({
                id: Date.now().toString(),
                name: req.body.name,
                email: req.body.email,
                password: hasedPassword,
            })
            res.redirect('/login')
        } catch{
            res.redirect('/register')
        }
        console.log(users)
        console.log(req.body);
    });
}
module.exports = route;