Dokumentasi API 
# Pendahuluan
API ini dirancang untuk mengelola daftar todolist pengguna. Setiap pengguna memiliki daftar tugas sendiri yang dapat mereka akses setelah melakukan autentikasi. Pengguna dapat melihat daftar, detail, edit, menghapus item todolist dan menghapus semua todolist yang sudah dibuat.

# Autentikasi
Metode: JWT (JSON Web Token)
Registrasi: Pengguna harus mendaftar terlebih dahulu untuk mendapatkan token akses.
Login: Setelah mendaftar, pengguna dapat login untuk mendapatkan token akses yang baru.
Header: Token akses harus disertakan dalam header Authorization setiap permintaan dengan format Bearer <token>.

# EndPoint

#Pengguna
POST /auth/regist
Deskripsi: Mendaftarkan pengguna baru.
Request Body:
JSON
{
"fullname": "yourfullname",
  "username": "yourusername",
  "password": "yourpassword"
}

POST /auth/login
Deskripsi: Melakukan login dan mendapatkan token akses.
Request Body: Sama seperti di atas.
Response:
JSON
{
  "token": "your_access_token"
}

# Todolist
GET /:id_user/todos
Deskripsi: Mendapatkan semua todo pengguna.
POST /:id_user/todos
Deskripsi: Menambahkan todo baru.
Request Body:
JSON
{
  "task": "Belajar membuat API",
  "description": "Membuat dokumentasi API",
}

GET /:id_user/todos/:id
Deskripsi: Mendapatkan detail todo berdasarkan ID.
Path Parameter: :id (ID todo)
PUT /:id_user/todos/:id
Deskripsi: Memperbarui todo berdasarkan ID.
Request Body: Sama seperti saat membuat todo.
DELETE /:id_user/todos/:id
Deskripsi: Menghapus todo berdasarkan ID.
DELETE /:id_user/todos/
Deskripsi: Menghapus semua todo.

# Model Data
User
id (string)
username (string)
password (string, hashed)

Todo
id (string)
task (string)
description (string)
user(ObjectId)

Contoh Penggunaan (curl)
Bash
# Daftar pengguna
curl -X POST -H "Content-Type: application/json" -d '{"fullname":"John Doelll", "username":"johnDoe", "password":"password123"}' http://your-api-url/users

# Login dan dapatkan token
curl -X POST -H "Content-Type: application/json" -d '{"username":"johnDoe", "password":"password123"}' http://your-api-url/users/login

# Tambahkan tugas (setelah login)
curl -X POST -H "Authorization: Bearer your_access_token" -H "Content-Type: application/json" -d '{"title":"Belajar membuat API"}' http://your-api-url/todos
