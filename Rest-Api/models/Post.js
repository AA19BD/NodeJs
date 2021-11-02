const mongoose = require("mongoose"); //!!package that connects nodejs(ExpressJS)<->DataBase(MongoDB)

//Creating schema for Db(title,desctiption ...)
//!!that define how our data looks.
const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("PostSchema", PostSchema);
