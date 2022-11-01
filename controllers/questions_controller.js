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