import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AddProductPage from "./pages/AddProductPage";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      nama: "Kaos Polos",
      jenis: "Baju",
      kategori: "Casual",
      harga: 75000,
    },
    {
      id: 2,
      nama: "Celana Jeans",
      jenis: "Celana",
      kategori: "Panjang",
      harga: 150000,
    },
    {
      id: 3,
      nama: "Jaket Hoodie",
      jenis: "Jaket",
      kategori: "Olahraga",
      harga: 200000,
    },
  ]);

  const addProduct = (product) => {
    setProducts([...products, { ...product, id: Date.now() }]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePage products={products} onDelete={deleteProduct} />}
        />
        <Route
          path="/tambah"
          element={<AddProductPage addProduct={addProduct} />}
        />
      </Routes>
    </div>
  );
}

export default App;
