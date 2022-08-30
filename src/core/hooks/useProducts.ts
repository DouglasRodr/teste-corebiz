import { useCallback, useState } from "react";
import { ProductService } from "../../service";
import { Product } from "../@types";

export default function useProducts() {
  const [loading, setLoading] = useState(false);

  const [products, setProducts] = useState<Product.Summary[]>([]);

  const fetchProducts = useCallback(async function () {
    setLoading(true);
    ProductService.getAllProducts()
      .then(setProducts)
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    fetchProducts,
    loading,
    products,
  };
}
