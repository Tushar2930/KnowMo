const Like=require('../models/likes');
const Post=require('../models/posts');
const Answer=require('../models/answers');


module.exports.toggleLike=async function(req,res){
    try {
        let likeable;
        let deleted=false;

        if(req.query.type==='Post'){
            likeable=await Post.findById(req.query.id).populate('likes');
            
        }else{
            likeable=await Comment.findById(req.query.id).populate('likes');
        }
        
        let existingLike=await Like.findOne({
            likeable:req.query.id,
            onModel:req.query.type,
            user:req.user._id

        });
        // console.log(likeable);
        if(existingLike){
            likeable.likes.pull(existingLike.id);
            likeable.save();
            existingLike.remove();
            deleted=true;
            console.log('here');
        }
        else{
            let newLike= await Like.create({
                likeable:req.query.id,
                user:req.user._id,
                onModel:req.query.type
            });
            // console.log(newLike);
            likeable.likes.push(newLike._id);
            console.log(likeable);
            likeable.save();
            // console.log("custom",likeable);
        }
        
        return res.redirect('/');
        // console.log(req.query.id);

    } catch (error) {
        console.log(error);
    }
}