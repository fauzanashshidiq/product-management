function ProductList({ products, onDelete }) {
  if (products.length === 0) {
    return (
      <p className="text-center text-gray-500">Belum ada produk ditambahkan.</p>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Daftar Produk</h2>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Nama</th>
            <th className="border p-2">Jenis</th>
            <th className="border p-2">Kategori</th>
            <th className="border p-2">Harga</th>
            <th className="border p-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="text-center">
              <td className="border p-2">{p.nama}</td>
              <td className="border p-2">{p.jenis}</td>
              <td className="border p-2">{p.kategori}</td>
              <td className="border p-2">
                Rp {Number(p.harga).toLocaleString()}
              </td>
              <td className="border p-2">
                <button
                  onClick={() => onDelete(p.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
