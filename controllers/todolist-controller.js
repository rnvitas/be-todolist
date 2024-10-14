const Todolist = require("../models/Todolist");

module.exports = {
  getAllTodoList: async (req, res) => {
    const data = await Todolist.find({});

    res.json({
      message: "berhasil mendapatkan data",
      data,
    });
  },

  getAllTodoListById: async (req, res) => {
    const { id } = req.params;
    const data = await Todolist.findById(id);

    res.json({
      message: "data berhasil ditemukan",
      data,
    });
  },

  addTodolist: (req, res) => {
    const data = req.body;
    const newTodolist = new Todolist(data);
    newTodolist.save();
    res.json({
      message: "data berhasil ditambahkan",
    });
  },

  editTodolist: async (req, res) => {
    const { id } = req.params;
    const { task } = req.body;

    const updateTodo = await Todolist.findOneAndUpdate({ _id: id }, { task });
    res.json({
      message: "data berhasil diedit",
      updateTodo,
    });
  },

  deleteTodolistById: async (req, res) => {},

  deleteAllTodolist: async (req, res) => {
    const data = await Todolist.deleteMany({});

    res.json({
      message: "semua data berhasil dihapus",
      data,
    });
  },
};
