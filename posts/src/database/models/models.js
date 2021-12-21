const mongoose = require("mongoose");

const { Schema } = mongoose;

const PostSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
    },
    {
        collection: 'post',
    },
);

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;