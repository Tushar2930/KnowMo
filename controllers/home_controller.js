const Post=require('../models/posts');
const User = require('../models/user');
const axios = require('axios');
const URL="https://newsdata.io/api/1/news?apikey=pub_1466500be77654e31eb6fb5d85782b4eeb4ad&q=education&country=ca,de,in,ru,us";

module.exports.home =async function (req, res) {

    try {
        let posts = await Post.find({})
            .sort('-createdAt')
            .populate('user')
            .populate({
                path: 'comments',
                populate: {
                    path: 'user',
                }
            }).populate('likes');

            var data=await axios.get(URL)
            
        let users = await User.find({});

        return res.render('home', {
            title: "Home",
            posts: posts,
            all_users:users,
            data:data.data.results
            
        });
        // console.log(newsdata);
    } catch (error) {
        console.log("**",error);
    }

}