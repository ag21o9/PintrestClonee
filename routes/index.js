var express = require("express");
var router = express.Router();
const userModel = require("./users");
const postModel = require("./posts");

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/createuser",async (req, res) => {
  let createduser = await userModel.create({
    username: "Mr Stark",
    password: "friday",
    posts:[],
    dp: "",
    email: "stark7324625@gmail.com",
  });

  res.send(createduser);
});

router.get('/createpost',async (req,res)=>{
  let createdpost = await postModel.create({
    postText: "TKebab Prathe is always op",
    userId : "65ccf1af83c1d7e5c4be09f8"
  })
  let userp = await userModel.findOne({_id:"65ccf1af83c1d7e5c4be09f8"})
  userp.posts.push(createdpost._id);
  await userp.save()
  res.send("done");
})

router.get('/alluserdata',async (req,res)=>{
  let userp = await userModel.findOne({_id:"65ccf1af83c1d7e5c4be09f8"}).populate('posts');
  res.send(userp);
  // let usersdata = await userModel.findOne({_id:})
})

module.exports = router;
