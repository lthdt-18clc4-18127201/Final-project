const newsRouter = require('./news');
const siteRouter = require('./site');
const loginRouter = require('./login');
const registerRouter = require('./register');
const changeProfileRouter = require('./changeprofile'); 

function route(app) {    
    app.use('/news', newsRouter);
    app.use('/login', loginRouter);
    app.use('/register', registerRouter);
    app.use('/changeprofile', changeProfileRouter);
    app.use('/', siteRouter);
    
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