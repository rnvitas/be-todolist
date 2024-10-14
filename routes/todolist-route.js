const express = require("express");
const {
  getAllTodoList,
  getAllTodoListById,
  addTodolist,
  editTodolist,
  deleteTodolistById,
  deleteAllTodolist,
} = require("../controllers/todolist-controller");
const route = express.Router();

route.get("/", getAllTodoList);
route.get("/:id", getAllTodoListById);
route.post("/", addTodolist);
route.put("/:id", editTodolist);
route.delete("/:id", deleteTodolistById);
route.delete("/", deleteAllTodolist);

module.exports = route;
