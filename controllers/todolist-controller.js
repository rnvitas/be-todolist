const Todolist = require("../models/Todolist");

module.exports = {
  getAllTodoList: async (req, res) => {
    const data = await Todolist.find({});

    res.json({
      message: "berhasil mendapatkan data",
      data,
    });
  },
  getAllTodoListById: (req, res) => {},

  addTodolist: (req, res) => {
    const data = req.body;
    const newTodolist = new Todolist(data);
    newTodolist.save();
    res.json({
      message: "data berhasil ditambahkan",
    });
  },

  editTodolist: (req, res) => {},

  deleteTodolistById: async (req, res) => {},

  deleteAllTodolist: async (req, res) => {
    const data = await Todolist.deleteMany({});

    res.json({
      message: "semua data berhasil dihapus",
      data,
    });
  },
};
