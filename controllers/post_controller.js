const fs = require('fs');
const path = require('path');
const Post=require('../models/posts');
const Comment=require('../models/comments');





module.exports.createpost=async function (req, res){

    try {
    Post.uploadedpostimg(req,res,(err)=>{
        if(err){
            console.log(err);
            return;
        }
        Post.create({
            content:req.body.content,
            user:req.user._id,
            postimg:Post.postimgPath+"/"+req.file.filename
        },(err,post)=>{
            console.log("post created");
            return res.redirect('/');
        })
    })
    }
    catch (error) {
        console.log(error);
    }
}

module.exports.destroy=async function(req,res){
    try {
        let post=await Post.findById(req.params.id);
        if(post.user==req.user.id){
            post.remove();

            await Comment.deleteMany({post:req.params.id});
            return res.redirect('/');

        }
        return res.redirect('/');
        
    } catch (error) {
        console.log(error);
    }
}

module.exports.update=async function(req,res){
   
    // if(req.user.id==post.user.id){
        try {
    //         let post=Post.findById(req.params.id);
    //         Post.uploadedpostimg(req,res,(err)=>{
    //             if(err){
    //                 console.log(err);
    //             }
    //             post.content=req.body.content;
    //             post.user=req.user.id;
    //             if(req.file){
    //                 if(req.postimg){
    //                     fs.unlinkSync(path.join(__dirname,"..",post.postimg))
    //                 }
    //                 post.postimg=Post.postimgPath+"/"+req.file.filename;
    //             }
    //             post.save();
    //             return res.redirect('/')
            
    console.log(req.body);
    console.log(req.file);
            
        } catch (error) {
            console.log(error);
        }
}