const { application } = require('express');
const express = require('express');
const router = express.Router();
const passport=require('passport');
const answerController=require('../controllers/answers_controller');

router.get('/view/:id',passport.checkAuthentication,answerController.viewAnswer);
router.post('/create',passport.checkAuthentication,answerController.create);

module.exports = router;