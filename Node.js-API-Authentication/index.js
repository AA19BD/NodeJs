const express = require("express");
const mongoose = require("mongoose");
const app = express(); //invoke express
require("dotenv/config");

//Import Routes
const authRoutes = require("./routes/auth");
const postRoute = require("./routes/posts");
//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("Connected to DB");
});
//Middlewares
app.use(express.json()); //body-parser

//Route Middlewares
app.use("/api/user", authRoutes);
app.use("/api/posts", postRoute);
app.listen(3000, () => {
  console.log("Listening the 3000 port!");
});
