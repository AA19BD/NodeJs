const express = require("express"); //import  package
const mongoose = require("mongoose"); //!!package that connects nodejs(ExpressJS)<->DataBase(MongoDB)
const app = express(); //execution of express(package)
const bodyParser = require("body-parser");
require("dotenv/config");

//!!Middlewares-->function(like auth) that will be executed when we hit the route
// app.use("/posts", () => {
//   console.log("This is middleware running");
// });

//Import routes

app.use(bodyParser.json());

const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

//Routes
app.get("/", (req, res) => {
  res.send("We are on home page!");
});

//Connetc to DB
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("Connnected to DB!");
});

//LISTEN to the sever
app.listen(3000, () => {
  console.log("Listeniing the port 3000");
});
