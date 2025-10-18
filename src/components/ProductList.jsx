import { ShoppingBag, Trash2 } from "lucide-react";

function ProductList({ products, onDelete, showAlert }) {
  const handleDelete = (id, nama) => {
    if (window.confirm(`Hapus "${nama}"?`)) {
      onDelete(id);
      showAlert("success", "Produk berhasil dihapus!");
    }
  };

  if (products.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm border p-12 text-center">
        <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto mb-3" />
        <p className="text-gray-500">Belum ada produk</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Nama
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Jenis
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Kategori
              </th>
              <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700">
                Harga
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {products.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 text-sm font-medium text-gray-800">
                  {p.nama}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{p.jenis}</td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {p.kategori}
                </td>
                <td className="px-6 py-4 text-sm text-right font-semibold text-gray-800">
                  Rp {Number(p.harga).toLocaleString("id-ID")}
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => handleDelete(p.id, p.nama)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition text-sm font-medium"
                  >
                    <Trash2 className="w-4 h-4" />
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductList;
