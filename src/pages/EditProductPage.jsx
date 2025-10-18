import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Alert from "../components/Alert";
import { ArrowLeft, Check } from "lucide-react";

export default function EditProductPage({ products, categories, onUpdate }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));
  const [form, setForm] = useState(product || {});
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    if (!product) navigate("/");
  }, [product, navigate]);

  const showAlert = (type, message) => {
    setAlert({ type, message });
    setTimeout(() => setAlert(null), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nama || !form.jenis || !form.kategori || !form.harga) {
      showAlert("error", "Semua field harus diisi!");
      return;
    }
    onUpdate(product.id, form);
    showAlert("success", "Produk berhasil diperbarui!");
    setTimeout(() => navigate("/"), 1500);
  };

  return (
    <div className="max-w-xl mx-auto">
      {alert && <Alert {...alert} onClose={() => setAlert(null)} />}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden mt-4">
        <div className="p-6 space-y-4">
          <h2 className="text-lg font-semibold mb-4">Edit Produk</h2>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Nama Produk
            </label>
            <input
              type="text"
              value={form.nama || ""}
              onChange={(e) => setForm({ ...form, nama: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Jenis
            </label>
            <select
              value={form.jenis || ""}
              onChange={(e) =>
                setForm({ ...form, jenis: e.target.value, kategori: "" })
              }
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm"
            >
              <option value="">-- Pilih Jenis --</option>
              {Object.keys(categories).map((j) => (
                <option key={j} value={j}>
                  {j}
                </option>
              ))}
            </select>
          </div>

          {form.jenis && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Kategori
              </label>
              <select
                value={form.kategori || ""}
                onChange={(e) => setForm({ ...form, kategori: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm"
              >
                <option value="">-- Pilih Kategori --</option>
                {categories[form.jenis].map((k) => (
                  <option key={k} value={k}>
                    {k}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Harga
            </label>
            <input
              type="number"
              value={form.harga || ""}
              onChange={(e) => setForm({ ...form, harga: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              onClick={() => navigate("/")}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali
            </button>
            <button
              onClick={handleSubmit}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2.5 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition shadow-sm text-sm"
            >
              <Check className="w-4 h-4" />
              Simpan Perubahan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
