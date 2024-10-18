require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = {
  getUser: async (req, res) => {
    const data = await User.find({});

    res.json({
      message: "berhasil mendapatkan data semua user",
      data,
    });
  },

  regist: async (req, res) => {
    const data = req.body;
    const password = data.password;
    const saltRounds = 10;
    const hashpassword = await bcrypt.hash(password, saltRounds);
    data.password = hashpassword;
    const username = data.username;
    const fullname = data.fullname;

    //validasi field
    if (!fullname) {
      return res.json({
        message: "fullname tidak boleh kosong",
      });
    }

    if (!username) {
      return res.json({
        message: "fullname tidak boleh kosong",
      });
    }

    if (!data.password) {
      return res.json({
        message: "fullname tidak boleh kosong",
      });
    }

    // Cek apakah username sudah digunakan
    const checkUsername = await User.findOne({ username: data.username });

    if (checkUsername) {
      return res.json({
        message:
          "Username sudah digunakan, silahkan gunakan username yang lain",
      });
    }

    // Jika username belum digunakan, simpan user baru
    const newUser = new User(data);
    await newUser.save();

    // Kirim respons sukses setelah user berhasil disimpan
    return res.json({
      message: "Berhasil Registrasi",
    });
  },

  login: async (req, res) => {
    const data = req.body;
    const user = await User.findOne({ username: data.username });

    //check username
    if (!user) {
      res.json({
        message: "Username tidak terdaftar",
      });
      return;
    }

    //check password
    const checkPassword = await bcrypt.compare(data.password, user.password);
    if (!checkPassword) {
      res.json({
        message: "User Gagal Login",
      });
    }

    const token = jwt.sign({ username: user.username }, process.env.JWT_KEY);
    res.json({
      message: "User Berhasil Login",
      token,
    });
  },
};
