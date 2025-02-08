var express = require('express');
var router = express.Router();
const userModel = require('./users');
const passport = require('passport');
const localStrategy = require('passport-local');
passport.use(new localStrategy(userModel.authenticate()));


router.get('/', function (req, res) {
  res.render('index');
  passport.authenticate('local')(req, res, function () {
    res.redirect('/homepage')
  });
});

router.get('/mobile', function (req, res) {
  res.render('mobilePage');
});

router.get('/investor-relations', function (req, res) {
  res.render('InvestorRelations');
});

router.get('/partner-with-us/new', function (req, res) {
  res.render('restaurant');
});

router.get('/homepage', isLoggedIn, function (req, res) {
  res.render('homepage', { username: req.user.username });
});

router.post('/register', function (req, res) {
  var userdata = new userModel({
    username: req.body.username,
    mobileNo: req.body.mobileNo,
    email: req.body.email,
    password: req.body.password,
    gender: req.body.gender,
    location: req.body.location,
  });

  userModel.register(userdata, req.body.password)
    .then(function (registereduser) {
      passport.authenticate('local')(req, res, function () {
        res.redirect('/homepage');
      });
    })

    .catch(function (error) {
      res.send('Username already exists');
    })
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/homepage',
  failureRedirect: '/'
}), function (req, res) { })

router.get('/logout', function (req, res, next) {
  req.logout(function (err) {
    if (err) return next(err);
    res.redirect('/')
  });
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}

module.exports = router;
