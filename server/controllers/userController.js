const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  getUser: async (req, res) => {
    res.json(req.user);
  },

  registerUser: async (req, res) => {
    // check to see an object was recieved with specific keys:
    // - userName, email, password
    if (!req.body.userName) return res.json({ msg: "no userName key present" });
    if (!req.body.email) return res.json({ msg: "no email key present" });
    if (!req.body.password) return res.json({ msg: "no password key present" });

    try {
      // look for the user by the email address
      const userExists = await User.findOne({ email: req.body.email });

      // dont try to save a new user if that user already exists
      if (userExists)
        return res.json({ msg: "User with this email already exists" });

      // No user exists, so hash password so I dont save it in plaintext, in my database
      const salt = await bcrypt.genSalt();
      const hashedPW = await bcrypt.hash(req.body.password, salt);

      // create a new user then save it at the same time
      const newUser = await new User({
        userName: req.body.userName,
        email: req.body.email,
        password: hashedPW,
      }).save();

      // send new user information back to be processed as json data
      res.json(newUser);
    } catch (err) {
      res.json({ msg: err });
    }
  },

  login: async (req, res) => {
    // look in re.body object and grab email and password key
    const { email, password } = req.body;

    try {
      // get user by the email address that was sent
      const user = await User.findOne({ email: email });

      // if no user exists with provided email HALT controller
      // process and return error to client side
      if (!user)
        return res.status(500).json({ msg: "No user with that email" });

      // Use bcryptjs to compare the hashed string saved in DB to password check from user
      const isMatch = await bcrypt.compare(password, user.password);

      // if password is incorrect send back a message saying so
      if (!isMatch) return res.json({ msg: "The password is incorrect" });

      // generate a jwt token with the userID saved in an object
      const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "24h",
      });

      // send back the userDAta object with a token to be saved by the client side code
      res.json({
        token,
        user: { userName: user.userName, email: user.email, id: user._id },
      });
    } catch (err) {
      return res.json({ msg: err });
    }
  },
};
