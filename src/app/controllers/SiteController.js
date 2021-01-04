class SiteController {
    home(req, res, next) {
        res.render('homepage')
    }
    about(req, res) {
        res.render('inf')
    }
}
module.exports = new SiteController;