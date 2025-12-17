# Sistem Rekomendasi Bahan Baku

Aplikasi web berbasis Node.js untuk membantu pemilihan bahan baku terbaik
menggunakan metode Weighted Score.

# Fitur Utama
- Input data bahan baku
- Perhitungan skor rekomendasi (algoritma matematis)
- CRUD data bahan baku
- Kategori bahan baku
- Antarmuka menggunakan EJS
- Database menggunakan Sequelize (SQLite)

# Teknologi yang Digunakan
- Node.js
- Express.js
- Sequelize ORM
- SQLite
- EJS Template Engine

# Struktur Folder
sistem-rekomendasi-bahan-baku/

app.js
package.json
package-lock.json
database.sqlite
│
config/
database.js
│
models/
categoryModel.js
materialModel.js
material.js
scoringService.js
│
views/
layout.ejs
home.ejs
form.ejs
result.ejs
list.ejs
edit.ejs


# Cara Menjalankan Aplikasi
1. Clone repository ini
2. Install dependency: npm install
3. Jalankan server: node app.js
4. Buka browser: http://localhost:3000/


## 👨‍🎓 Mata Kuliah
Logika Pemrograman – Proyek Besar
- Muhammad Athallarafa Dityarifano Suwandi (2510312061)
- Kayla Zora Aletha (2510312078)
- Nabila Agni (2510312062)
