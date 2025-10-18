import { useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";

export default function AddProductPage({ addProduct }) {
  const navigate = useNavigate();

  // Struktur kategori berdasarkan jenis pakaian
  const categories = {
    Baju: ["Kaos", "Kemeja", "Polo", "Sweater"],
    Celana: ["Panjang", "Pendek", "Olahraga", "Jeans"],
    Jaket: ["Hoodie", "Bomber", "Windbreaker", "Sweater"],
  };

  const handleAddProduct = (formData) => {
    if (
      !formData.nama ||
      !formData.jenis ||
      !formData.kategori ||
      !formData.harga
    ) {
      alert("Semua field harus diisi!");
      return;
    }

    addProduct({
      ...formData,
      harga: parseInt(formData.harga),
      id: Date.now(),
    });

    navigate("/");
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-center items-center mb-6">
        <h2 className="text-xl font-bold mb-2 ">Tambah Produk Baru</h2>
      </div>

      <ProductForm onAdd={handleAddProduct} categories={categories} />
    </div>
  );
}
