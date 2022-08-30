import { ReactNode } from "react";
import { Cart, Product } from "../../../core/@types";
import { ShoppingCartContext } from "../../../core/context/ShoppingCartContext";
import { useLocalStorage } from "../../../core/hooks/useLocalStorage";

interface ShoppingCartProviderProps {
  children: ReactNode;
}

export default function ShoppingCartProvider({
  children,
}: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<Cart.Item[]>(
    "cart-items",
    []
  );

  function addToCart(product: Product.Summary) {
    setCartItems((items) => {
      if (items.find((item) => item.id === product.productId) == null) {
        return [
          ...items,
          {
            id: product.productId,
            product,
            quantity: 1,
          },
        ];
      } else {
        return items.map((item) => {
          if (item.id === product.productId) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        addToCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
