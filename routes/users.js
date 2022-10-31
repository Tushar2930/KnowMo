const express = require('express');
const passport = require('passport');
const router = express.Router();

const usersController = require('../controllers/user_controller');


router.get('/sign-up', usersController.signup);
router.get('/profile/:id',usersController.profile);
router.post('/update/:id',usersController.update);
router.get('/sign-in', usersController.signin);
router.post('/create', usersController.create);
router.post('/create-session', passport.authenticate(
    'local',
    { failureRedirect: '/users/sign-in' },
), usersController.createSession);
router.get('/log-out',usersController.destroy);
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/users/sign-in' }), usersController.createSession);

module.exports = router;