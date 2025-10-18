import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";

export default function HomePage({ products, onDelete }) {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Daftar Produk</h2>
        <Link
          to="/tambah"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          + Tambah Produk
        </Link>
      </div>

      <ProductList products={products} onDelete={onDelete} />
    </div>
  );
}
