const User=require('../models/user');
const Questions=require('../models/question');
const Answers=require('../models/answers');



module.exports.create=async function(req,res){
    try {
        let question=await Questions.findById(req.body.question);
   if(question){
    let answer=await Answers.create({
        content:req.body.content,
        user:req.user.id
    });
    question.answers.push(answer);
    question.save();
    return res.redirect('/questions');
   }
    } catch (error) {
        console.log(error);
    }
   
}