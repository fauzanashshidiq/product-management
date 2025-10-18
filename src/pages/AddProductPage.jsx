import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProductPage({ addProduct }) {
  const [formData, setFormData] = useState({
    nama: "",
    jenis: "",
    kategori: "",
    harga: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.nama ||
      !formData.jenis ||
      !formData.kategori ||
      !formData.harga
    ) {
      alert("Semua field harus diisi!");
      return;
    }
    addProduct({ ...formData, harga: parseInt(formData.harga) });
    navigate("/");
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold mb-4">Tambah Produk Baru</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-md bg-white p-6 shadow rounded"
      >
        <label className="block mb-2">Nama Produk</label>
        <input
          type="text"
          name="nama"
          value={formData.nama}
          onChange={handleChange}
          className="border p-2 w-full rounded mb-4"
        />

        <label className="block mb-2">Jenis</label>
        <select
          name="jenis"
          value={formData.jenis}
          onChange={handleChange}
          className="border p-2 w-full rounded mb-4"
        >
          <option value="">-- Pilih Jenis --</option>
          <option value="Baju">Baju</option>
          <option value="Celana">Celana</option>
          <option value="Jaket">Jaket</option>
        </select>

        <label className="block mb-2">Kategori</label>
        <input
          type="text"
          name="kategori"
          value={formData.kategori}
          onChange={handleChange}
          placeholder="Contoh: Panjang, Pendek, Olahraga"
          className="border p-2 w-full rounded mb-4"
        />

        <label className="block mb-2">Harga</label>
        <input
          type="number"
          name="harga"
          value={formData.harga}
          onChange={handleChange}
          className="border p-2 w-full rounded mb-4"
        />

        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
          >
            Batal
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
}
