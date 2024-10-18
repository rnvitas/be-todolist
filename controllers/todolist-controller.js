const Todolist = require("../models/Todolist");

module.exports = {
  getAllTodoList: async (req, res) => {
    const { id_user } = req.params;
    const data = await Todolist.find({ user: id_user });

    res.json({
      message: "berhasil mendapatkan data",
      data,
    });
  },

  getAllTodoListById: async (req, res) => {
    const { id } = req.params;
    const data = await Todolist.findById({ _id: id });

    res.json({
      message: "data berhasil ditemukan",
      data,
    });
  },

  addTodolist: (req, res) => {
    const { id_user } = req.params;
    const newTodolist = new Todolist({
      task: req.body.task,
      user: id_user,
    });

    newTodolist.save();
    res.json({
      message: "data berhasil ditambahkan",
    });
  },

  editTodolist: async (req, res) => {
    const { id } = req.params;
    const { id_user } = req.params;
    const { task } = req.body;

    const updateTodo = await Todolist.findOneAndUpdate(
      { _id: id },
      { task },
      { user: id_user }
    );
    res.json({
      message: "data berhasil diedit",
      updateTodo,
    });
  },

  deleteTodolistById: async (req, res) => {
    const { id } = req.params;
    const { id_user } = req.params;
    const deleteByID = await Todolist.deleteOne({ _id: id }, { user: id_user });
    res.json({
      message: "todo berhasil dihapus",
      deleteByID,
    });
  },

  deleteAllTodolist: async (req, res) => {
    const { id_user } = req.params;
    const data = await Todolist.deleteMany({ user: id_user });

    res.json({
      message: "semua data berhasil dihapus",
      data,
    });
  },
};
