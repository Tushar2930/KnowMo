const express = require('express');
const router = express.Router();
const passport=require('passport');
const questionController=require('../controllers/questions_controller');

router.get('/',passport.checkAuthentication,questionController.home);
router.post('/create',passport.checkAuthentication,questionController.create);
router.get('/delete/:id',passport.checkAuthentication,questionController.destroy);
router.get('/my-questions',passport.checkAuthentication,questionController.myQuestions);
router.get('/starred',passport.checkAuthentication,questionController.starred);
router.get('/star/:id',passport.checkAuthentication,questionController.markStar);


module.exports = router;