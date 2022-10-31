const User=require('../models/user');
const Post=require('../models/posts');
const Comment=require('../models/comments');


module.exports.create=async function(req,res){
    let post =await Post.findById(req.body.post);
        if (post){
           let comment=await Comment.create({
                content: req.body.content,
                post: req.body.post,
                user: req.user._id
            });

                post.comments.push(comment);
                post.save();

                res.redirect('/');
            };
        }

module.exports.destroy=async function(req,res){

    try {
        let comment=await Comment.findById(req.params.id);
        if(comment.user==req.user.id){
            let postId=comment.post;

            comment.remove();
            let post=await Post.findByIdAndUpdate(postId,{$pull: { comment: req.params.id }});
            return res.redirect('/');

        }
        else{
            return res.redirect('/');
        }

        
    } catch (error) {
        console.log(error);
    }

}