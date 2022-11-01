const express = require('express');
const router = express.Router();
const passport=require('passport');
const questionController=require('../controllers/questions_controller');

router.get('/',passport.checkAuthentication,questionController.home);
router.post('/create',passport.checkAuthentication,questionController.create);


module.exports = router;