const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const POSTIMG_path = path.join('/uploads/posts');

const postSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    postimg: {
        type: String
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    likes:[ 
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Like'
        }
    ]
}, {
    timestamps: true
});


let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname + "/.." + POSTIMG_path));
    },
    filename: function (req, file, cb) {
        console.log(file);
        cb(null, Date.now()+path.extname(file.originalname));
    }
})


postSchema.statics.uploadedpostimg = multer({ storage: storage }).single('postimg');
postSchema.statics.postimgPath = POSTIMG_path;


const Post = mongoose.model('Post', postSchema);

module.exports = Post;