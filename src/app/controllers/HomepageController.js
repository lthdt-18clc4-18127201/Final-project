class HomepageController {
    home(req, res) {
        res.render('homepage')
    }
}
module.exports = new HomepageController;