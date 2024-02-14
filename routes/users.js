const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/pintrest")

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post", 
    },
  ],
  dp: String,
  email : String
});

module.exports = mongoose.model('pintrest',userSchema);
