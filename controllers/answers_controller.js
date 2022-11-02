const User=require('../models/user');
const Questions=require('../models/question');
const Answers=require('../models/answers');
const { post } = require('../routes/answers');



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
    return res.redirect(`/answers/view/${question._id}`);
   }
    } catch (error) {
        console.log(error);
    }
   
}

module.exports.viewAnswer=async function(req,res){
    let question=await Questions.findById(req.params.id)
    .populate('user')
    .populate({
        path:'answers',
        populate:{
            path:'user'
        }
    });

    return res.render('show_answers',{
        title:question.content,
        question:question
    })
    
}