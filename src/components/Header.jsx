import { ShoppingBag } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center gap-3">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-lg">
          <ShoppingBag className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-800">FashionStock</h1>
          <p className="text-xs text-gray-500">Manajemen Produk</p>
        </div>
      </div>
    </header>
  );
}
