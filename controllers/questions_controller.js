const Questions=require('../models/question');
const Answers=require('../models/answers');
const User=require('../models/user');

module.exports.home=async function(req,res){
    try {
        let questions=await Questions.find({})
        .sort('-createdAt')
        .populate('user')
        .populate({
            path:'answers',
            populate: {
                path: 'user',
            }
        });
        let users=await User.find({});

        return res.render("answers-home",{
            title:"Answers",
            questions:questions,
            all_users:users
        })

        
    } catch (error) {
        console.log(error);
    }
}

module.exports.create=async function(req,res){
    await Questions.create({
        content:req.body.content,
        user:req.user._id
    });
    return res.redirect('/questions');
}

module.exports.destroy=async function(req,res){
    try {
        let question=await Questions.findById(req.params.id);
        if(question.user==req.user.id){
            question.remove();

            await Answers.deleteMany({question:req.params.id});
            return res.redirect('/questions');
        }
        return res.redirect('/questions'); 
        
    } catch (error) {
        console.log(error);
    }
}