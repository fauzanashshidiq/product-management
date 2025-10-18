import { Link, useLocation } from "react-router-dom";
import ProductList from "../components/ProductList";
import Alert from "../components/Alert";
import { useState, useEffect } from "react";

export default function HomePage({ products, onDelete }) {
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({ type, message });
    setTimeout(() => setAlert(null), 3000);
  };

  const location = useLocation();

  useEffect(() => {
    if (location.state?.alert) {
      setAlert(location.state.alert);
      setTimeout(() => setAlert(null), 3000);
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold mb-2">Daftar Produk Pakaian</h2>
        <Link
          to="/tambah"
          className="px-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2.5 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition shadow-sm"
        >
          + Tambah Produk
        </Link>
      </div>

      {alert && <Alert {...alert} onClose={() => setAlert(null)} />}
      <ProductList
        products={products}
        onDelete={onDelete}
        showAlert={showAlert}
      />
    </div>
  );
}
