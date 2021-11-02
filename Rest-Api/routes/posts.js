const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//GET BACK ALL THE POST
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find(); //find()-->get all the data
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//SUBMIT THE POST
router.post("/", async (req, res) => {
  //   console.log(req.body);
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//SPECIFIC POST
router.get("/:postId", async (req, res) => {
  //   console.log(req.params.postId);
  try {
    const posts = await Post.findById(req.params.postId); //find()-->get all the data
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete SPECIFIC POST
router.delete("/:postId", async (req, res) => {
  //   console.log(req.params.postId);
  try {
    // const posts = await Post.findById(req.params.postId).remove();//1 try
    const posts = await Post.remove({ _id: req.params.postId }); //2 try
    // res.json({
    //     message: 'deleted',
    // });
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});
//UPDATE POST

router.patch("/:postId", async (req, res) => {
  try {
    const updatePost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title, description: req.body.description } }
    );
    res.json(updatePost);
  } catch (err) {
    res.json({ message: err });
  }
});

// router.get("/specific", (req, res) => {
//   res.send("Specific post!");
// });

module.exports = router;
