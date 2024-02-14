const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'pintrest', // Reference the User model for author information
    required: true
  },
  postText: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now // Automatically record creation date and time
  },
  likes: {
    type: Array,
    default : []
  }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
