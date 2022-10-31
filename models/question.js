const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    answer: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Answer'

        }
    ]
}, {
    timestamps: true
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;