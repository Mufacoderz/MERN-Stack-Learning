-- ===========================================
-- 2️⃣ CREATE TABLE
-- ===========================================

-- Buat tabel users untuk menyimpan data pengguna
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- id unik otomatis naik
    nama VARCHAR(100) NOT NULL,          -- nama wajib diisi
    email VARCHAR(100) UNIQUE,           -- email harus unik
    umur INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Cek struktur tabel
DESC users;

-- Lihat daftar tabel di database
SHOW TABLES;
