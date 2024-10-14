const mongoose = require("mongoose");
const todolistSchema = new mongoose.Schema({
  task: String,
});

const Todolist = mongoose.model("Todolist", todolistSchema);

module.exports = Todolist;
