import { useState } from "react";

function ProductForm({ onAdd, categories }) {
  const [form, setForm] = useState({
    nama: "",
    jenis: "",
    kategori: "",
    harga: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nama || !form.jenis || !form.kategori || !form.harga) {
      alert("Semua field harus diisi!");
      return;
    }
    onAdd(form);
    setForm({ nama: "", jenis: "", kategori: "", harga: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md space-y-4"
    >
      <h2 className="text-xl font-semibold mb-4">Tambah Produk</h2>

      <div className="flex flex-col">
        <label className="mb-1 font-medium">Nama Produk</label>
        <input
          type="text"
          name="nama"
          value={form.nama}
          onChange={handleChange}
          className="border p-2 rounded-md"
          placeholder="Contoh: Kaos Oversize Hitam"
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 font-medium">Jenis</label>
        <select
          name="jenis"
          value={form.jenis}
          onChange={handleChange}
          className="border p-2 rounded-md"
        >
          <option value="">-- Pilih Jenis --</option>
          {Object.keys(categories).map((jenis) => (
            <option key={jenis} value={jenis}>
              {jenis}
            </option>
          ))}
        </select>
      </div>

      {form.jenis && (
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Kategori</label>
          <select
            name="kategori"
            value={form.kategori}
            onChange={handleChange}
            className="border p-2 rounded-md"
          >
            <option value="">-- Pilih Kategori --</option>
            {categories[form.jenis].map((kat) => (
              <option key={kat} value={kat}>
                {kat}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="flex flex-col">
        <label className="mb-1 font-medium">Harga (Rp)</label>
        <input
          type="number"
          name="harga"
          value={form.harga}
          onChange={handleChange}
          className="border p-2 rounded-md"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Tambah
      </button>
    </form>
  );
}

export default ProductForm;
