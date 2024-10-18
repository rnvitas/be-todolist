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
    const { task, description } = req.body;
    // Validasi untuk memastikan description dan task diinput
    if (!description || !task) {
      return res.status(400).json({
        message: "Deskripsi dan task harus diinput",
      });
    }
    const newTodolist = new Todolist({
      description: description,
      task: task,
      user: id_user,
    });

    newTodolist.save();
    res.json({
      message: "data berhasil ditambahkan",
    });
  },

  editTodolist: async (req, res) => {
    const { id, id_user } = req.params;
    const { task, description } = req.body;
    console.log(req.body);
    const updateTodo = await Todolist.findOneAndUpdate(
      { _id: id, user: id_user },
      { task, description }
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

//test
