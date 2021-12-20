const mongoose = require("mongoose");

const { Schema } = mongoose;

const CommentSchema = new Schema(
    {
        content: {
            type: String,
            required: true
        },
        postId: {
            type: String,
            required: true
        }
    },
    {
        collection: 'comment',
    },
);

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;