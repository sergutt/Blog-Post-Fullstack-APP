const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

module.exports = (req, res, next) => {
  // looking for a header sent with the key => x-auth-token
  const token = req.header("x-auth-token");

  // if no x-auth-token header is present, send error
  if (!token || token === undefined)
    return res.json({ msg: "Authorization failed" });

  // use token to decode an object that will have an id,
  // expiration timestamp and the timestamp for when it
  // was created
  const verified = jwt.verify(token, process.env.JWT_SECRET);

  // find the user byt the id that is in the verified object
  User.findById(verified.id)
    .then((userResponse) => {
      req.user = {
        userName: userResponse.userName,
        email: userResponse.email,
        id: verified.id,
      };
      // moves from this middleware function (auth)
      // to controller in route
      next();
    })
    .catch((err) => res.json({ msg: err }));
};
