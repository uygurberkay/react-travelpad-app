import mongoose from 'mongoose';

/*Creating Mongoose Database Models for mongoose library */
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags : [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        defauld: 0
    },
    createdAt: {
        type: Date,
        default : new Date()
    },
});

const PostMessage = mongoose.model('PostMessage',postSchema);

export default PostMessage;