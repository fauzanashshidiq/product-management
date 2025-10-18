import { useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";

export default function AddProductPage({ addProduct, categories }) {
  const navigate = useNavigate();

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
      <ProductForm onAdd={handleAddProduct} categories={categories} />
    </div>
  );
}
