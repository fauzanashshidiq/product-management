import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4 shadow">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold">
          Manajemen Produk
        </Link>
      </div>
    </header>
  );
}
