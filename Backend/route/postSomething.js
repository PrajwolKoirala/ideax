const express = require('express');
const router = express.Router();
const { createPost, getPosts,createReview, getSinglePosts} = require("../controller/postSomething");
const { checkAuthenctication } = require("../middlewares/checkauthentication");

// Route to create a new post
router.post('/posts', checkAuthenctication, createPost);
router.get('/getposts', getPosts);
router.get('/post/:id', getSinglePosts);

router.post('/posts', checkAuthenctication, createPost);
router.post("/:id/reviews",checkAuthenctication,createReview)

module.exports = router;
