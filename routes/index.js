'use strict'

var Auth = require('./auth');

module.exports = function(app) {
    // SITE ROOT
    app.get('/', (req, res) => { // replace this route with a landing or home page
        req.session.user ? res.redirect('/tangles') : res.redirect('/login');
    });
    app.get('/login', Auth.render); // route for the login page
    app.get('/logout', Auth.logout); // route for logging out

    app.post('/login', Auth.login); // form request emdpoint for loggin in
    app.post('/register', Auth.register); // form request endpoint for user registration

    // DASHBOARD
    app.all('/tangles*', Auth.session); // protect all dashboard routes from unauthorized users
    app.get('/tangles', (req, res) => { // renders the dashboard
        res.render('tangles.html', req.session);
    });
};
