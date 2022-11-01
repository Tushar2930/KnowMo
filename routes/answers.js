const { application } = require('express');
const express = require('express');
const router = express.Router();
const passport=require('passport');
const answerController=require('../controllers/answers_controller');

router.post('/create',answerController.create);

module.exports = router;