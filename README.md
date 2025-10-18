# 🛍️ Aplikasi Katalog Pakaian

Proyek ini adalah aplikasi katalog pakaian berbasis **React.js** yang memungkinkan pengguna untuk menambahkan, melihat, dan mengelola daftar produk pakaian berdasarkan jenis dan kategori.  
Dibuat menggunakan **Create React App** dengan pendekatan **component-based architecture** dan state management sederhana menggunakan props dan state lokal.

---

## ✨ Pengembang

Dikembangkan oleh **Muhammad Fauzan Ashshidiq** dengan NIM **1237050051** untuk memenuhi tugas mata kuliah **Pengembangan Aplikasi Web**.

---

## 🚀 Fitur Utama

- **Daftar Produk (Product List)**  
  Menampilkan semua produk pakaian yang telah ditambahkan lengkap dengan nama, jenis, kategori, dan harga.

- **Tambah Produk (Add Product)**  
  Form input interaktif untuk menambahkan produk baru. Data kategori terstruktur berdasarkan jenis pakaian (contoh: Baju, Celana, Jaket, dll).

- **Navigasi Halaman**  
  Menggunakan `react-router-dom` untuk berpindah antar halaman tanpa reload.

- **Validasi Input**  
  Mencegah penambahan produk jika ada field yang belum diisi.

---

## 🧩 Struktur Folder

```
src/
│
├── components/
│   └── ProductForm.jsx      # Form untuk tambah produk baru
│
├── pages/
│   ├── HomePage.jsx         # Halaman utama berisi daftar produk
│   └── AddProductPage.jsx   # Halaman tambah produk
│
├── data/
│   └── categories.js        # Kumpulan kategori pakaian
│
├── App.jsx                  # Routing utama aplikasi
└── index.js                 # Entry point React
```

---

## ⚙️ Cara Menjalankan

1. Clone repository ini

   ```bash
   git clone https://github.com/username/nama-proyek.git
   cd nama-proyek
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Jalankan aplikasi

   ```bash
   npm start
   ```

   Buka [http://localhost:3000](http://localhost:3000) di browser.

---

## 🧠 Teknologi yang Digunakan

- **React.js (CRA)** — Framework utama
- **React Router DOM** — Routing antar halaman
- **Tailwind CSS / CSS Modules** _(opsional)_ — Styling UI
- **JavaScript (ES6+)** — Logika aplikasi
