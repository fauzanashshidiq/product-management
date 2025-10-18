import { useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import { categories } from "../data/categories";

function HomePage() {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, { id: Date.now(), ...newProduct }]);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
        Manajemen Produk Pakaian
      </h1>

      <div className="max-w-3xl mx-auto space-y-8">
        <ProductForm onAdd={handleAddProduct} categories={categories} />
        <ProductList products={products} onDelete={handleDeleteProduct} />
      </div>
    </div>
  );
}

export default HomePage;
