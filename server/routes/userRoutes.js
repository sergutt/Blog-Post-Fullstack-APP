const {
  getUser,
  registerUser,
  login,
} = require("../controllers/userController");

const auth = require("../middleware/auth");
const router = require("express").Router();

// route: /user
// accepts : header => x-auth-token
router.get("/", auth, getUser);

// route: /user/register
// accepts : req.body => userName, email, password
router.post("/register", registerUser);

// route: /user/login
// accepts : req.body => email, password
router.post("/login", login);

module.exports = router;
