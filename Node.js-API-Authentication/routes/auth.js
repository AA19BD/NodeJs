const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../validation");

router.post("/register", async (req, res) => {
  //Lets validate the data before the User does(post)
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Checking if the user is already in the database
  const emailExist = await User.findOne({ email: req.body.email }); //checking if the email in DB == that user request
  if (emailExist) return res.status(400).send("Email already exists!");

  //Hashing the password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  //Create the new User
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
  });
  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

//LogIN
router.post("/login", async (req, res) => {
  //Lets validate the data before the User does(post)
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Checking if the email exists
  const user = await User.findOne({ email: req.body.email }); //checking if the email in DB == that user request
  if (!user) return res.status(400).send("Email doesn't exist!");

  //Checking if password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password); //compare with hashed one
  if (!validPass) return res.status(400).send("Invalid password!");

  //Create and assign the token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET); //creation of token
  res.header("auth-token", token).send(token);
});

module.exports = router;
