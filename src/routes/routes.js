const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/NewsController');
const homepageController = require('../app/controllers/HomepageController');
const loginController = require('../app/controllers/LoginController');
const registerController = require('../app/controllers/RegisterController');

router.use('/news/:slug', newsController.show);
router.use('/news', newsController.index);

router.use('/login', loginController.login);

router.use('/register', registerController.register);

router.use('/', homepageController.home);


module.exports = router;