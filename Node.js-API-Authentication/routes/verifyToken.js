const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  //middleware function to protect out routes
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Acces Denied!"); //401 Unauthorized client

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified; //our id of the user
    next( );
  } catch (err) {
    res.status(400).send("Invalid token");
  }
};
