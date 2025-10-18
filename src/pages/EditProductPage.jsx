import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ProductFormEdit from "../components/ProductFormEdit";

export default function EditProductPage({ products, categories, onUpdate }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  useEffect(() => {
    if (!product) navigate("/");
  }, [product, navigate]);

  return product ? (
    <ProductFormEdit
      product={product}
      categories={categories}
      onUpdate={onUpdate}
    />
  ) : null;
}
