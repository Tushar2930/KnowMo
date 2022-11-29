const { application } = require('express');
const express = require('express');
const router = express.Router();
const passport=require('passport');
const answerController=require('../controllers/answers_controller');

router.get('/view/:id',passport.checkAuthentication,answerController.viewAnswer);
router.post('/create',passport.checkAuthentication,answerController.create);
router.get('/my-answers',passport.checkAuthentication,answerController.myAnswers);

module.exports = router;