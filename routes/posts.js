const express = require('express');
const passport = require('passport');
const router = express.Router();
const postController=require('../controllers/post_controller');


router.post('/create',passport.checkAuthentication,postController.createpost);
router.get('/destroy/:id',passport.checkAuthentication,postController.destroy);
router.post('/update',passport.checkAuthentication,postController.update);

module.exports = router;