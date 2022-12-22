const User = require('../models/user');
const fs = require('fs');
const path = require('path');

module.exports.createSession = function (req, res) {
    // console.log(`/users/profile/${req.user.id}`);
    return res.redirect(`/users/profile/${req.user.id}`);
}

module.exports.signup = function (req, res) {

    if (req.isAuthenticated()) {
        return res.redirect('/');
    }
    return res.render('sign_up', {
        title: "Sign Up"
    });
}

module.exports.signin = function (req, res) {

    if (req.isAuthenticated()) {
        return res.redirect('/');
    }
    return res.render('sign_in', {
        title: "Sign In"
    });
}

module.exports.create = function (req, res) {

    if (req.body.password != req.body.confirm_password) {
        return res.redirect('back');
    }

    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) { console.log(err); return }

        if (!user) {
            User.create(req.body, function (err, user) {
                if (err) { console.log('error in finding user in signing up',err); return }

                return res.redirect('/users/sign-in');
            })
        } else {
            return res.redirect('back');
        }

    });
}

module.exports.profile=async function(req,res){

    try {
        let users=await User.find({});
        let user=await User.findById(req.params.id)
            return res.render('user_profile', {
                title: "User Profile",
                profile_user: user,
                all_users:users
            })
        
    } catch (error) {
        console.log(error);
    }
}

module.exports.update=async function(req,res){
    if(req.user.id==req.params.id){

        try {
            let user=await User.findById(req.params.id);
            User.uploadedAvatar(req, res, function (err) {
                if (err) { console.log('****multer error', err); }

                user.name = req.body.name;
                user.email = req.body.email;
                user.year=req.body.year;
                user.collegeName=req.body.collegeName;
                if (req.file) {
                    if (user.avatar) {

                        fs.unlinkSync(path.join(__dirname, '..', user.avatar));
                    }

                    user.avatar = User.avatarPath + '/' + req.file.filename;
                    // console.log(req.file);
                }

                user.save();
                return res.redirect('/');
            })
            
        } catch (error) {
            console.log(error);
        }
    }
    else{
        console.log("unauthorised");
    }
}

module.exports.destroy=function(req,res){
    req.logout(function (err) {
        if (err) {
            console.log(err);
        }
        // req.flash('success', 'Logged  out Succesfully');
        return res.redirect('/');
    });
}