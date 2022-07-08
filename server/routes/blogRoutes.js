const {
  getUsersPosts,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
  getAllUsersPosts,
} = require("../controllers/blogController");

// auth is our custom middleware
const auth = require("../middleware/auth");
const router = require("express").Router();

// route: /blog
// header => x-auth-token

router.get("/", auth, getUsersPosts);
// route: /blog/new
// header => x-auth-token
// accepts : req.body =>
router.post("/new", auth, createBlogPost);

router.get("/all", auth, getAllUsersPosts);

router.put("/update", updateBlogPost);

router.put("/delete", deleteBlogPost);

module.exports = router;
