const Blog = require("../models/blogModel");

module.exports = {
  getUsersPosts: async (req, res) => {
    try {
      // get all user blogs by the user.id
      // from the auth middleware
      const allUserPosts = await Blog.find({ authorId: req.user.id });
      // send all user blog entries as json
      res.json(allUserPosts);
    } catch (err) {
      res.json({ msg: err });
    }
  },

  getAllUsersPosts: async (req, res) => {
    try {
      const allposts = await Blog.find({});
      // send all user blog entries as jsofindall
      res.json(allposts);
    } catch (err) {
      if (Object.keys(err).length === 0)
        return res.json({ msg: "unidentifiable issue" });
      res.json({ msg: err });
    }
  },

  createBlogPost: async (req, res) => {
    // look into req.body for subject and text keys
    const { subject, text, date } = req.body;

    console.log("user id", req.user);
    try {
      // create a new Blog with subject text (from body)
      // and authorId (from user)
      const newPost = await new Blog({
        subject,
        text,
        authorId: req.user.id,
        userName: req.user.userName,
        date,
      }).save();

      // on success send new blog back as json
      res.json(newPost);
    } catch (err) {
      res.json({ msg: err });
    }
  },

  updateBlogPost: async (req, res) => {
    try {
      const updateBlog = await Blog.findByIdAndUpdate(req.body._id, {
        text: req.body.text,
        subject: req.body.subject,
      });
      if (updateBlog !== null) return res.json(updateBlog);
      res.json({ msg: "wrong id sent" });
    } catch (err) {
      console.log("err");
    }
  },

  deleteBlogPost: async (req, res) => {
    try {
      const deleteBlog = await Blog.findByIdAndDelete(req.body._id);
      if (deleteBlog !== null) return res.json({ msg: "success" });
      res.json({ msg: "wrong id sent" });
    } catch (err) {
      console.log("err");
    }
  },
};
