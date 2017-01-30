var router = require("express").Router();
var passport = require("passport");
var Facebook = require("passport-facebook");

passport.use(new Facebook({
    clientID: '590139287710288',
    clientSecret: '8240b9bdc999f36a43b8e6b118be3728',
    callbackURL: 'http://localhost/auth/facebook/callback'
}, function(inTokenAccess, inTokenRefresh, inProfile, inDone){
    console.log(inProfile);
    inDone(null, inProfile);
}));


router.get('/', passport.authenticate('facebook', {session:false}));
router.get('/callback', passport.authenticate('facebook', {session:false, successRedirect:"/success", failureRedirect:"/failure"}));

module.exports = router;