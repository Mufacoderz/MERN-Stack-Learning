-- ===========================================
-- 5️⃣ UPDATE dan DELETE
-- ===========================================

-- UPDATE: ubah data
UPDATE users
SET umur = 19
WHERE nama = 'Muhammad Fadil';

-- DELETE: hapus data
DELETE FROM users
WHERE id = 3;

-- Lihat hasil perubahan
SELECT * FROM users;
