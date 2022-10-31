const passport = require('passport');
const googleStratergy = require('passport-google-oauth').OAuth2Strategy;

const crypto = require('crypto');

const User = require('../models/user');

passport.use(new googleStratergy({
    clientID: '281409966575-0qenart4kg5ohne1k0k5afphiqe27ko6.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'http://localhost:8000/users/auth/google/callback'
}, function (accessToken, refreshToken, profile, done) {
    User.findOne({ email: profile.emails[0].value }).exec((err, user) => {
        if (err) {
            console.log("error in google stratergy", err);
            return;
        }
        console.log(accessToken, refreshToken);
        console.log(profile);

        if (user) {
            return done(null, user);
        }
        else {
            User.create({
                name: profile.displayName,
                email: profile.emails[0].value,
                password: crypto.randomBytes(20).toString('hex')
            }, (err, user) => {
                if (err) {
                    console.log("error in google stratergy", err);
                    return;
                }
                return done(null, user);
            })
        }
    });

}));
module.exports = passport;