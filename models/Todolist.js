const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todolistSchema = new mongoose.Schema({
  task: { type: String, required: true },
  description: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const Todolist = mongoose.model("Todolist", todolistSchema);

module.exports = Todolist;
