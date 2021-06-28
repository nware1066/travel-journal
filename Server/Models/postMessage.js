import mongoose from 'mongoose';


const postSchema = mongoose.Schema({
    name: String,
    content: String,
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;