import { createContext, ReactNode, useState } from "react";
import ShoppingCart from "../../app/components/ShoppingCart";
import { Cart, Product } from "../@types";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface ShippingCartContext {
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  cartItems: Cart.Item[];
  cartQuantity: number;
  totalValue: number;
  isEmpty: boolean;
  addToCart: (product: Product.Summary) => void;
  removeFromCart: (product: Product.Summary) => void;
  increaseQuantity: (product: Product.Summary) => void;
  decreaseQuantity: (product: Product.Summary) => void;
}

export const ShoppingCartContext = createContext({} as ShippingCartContext);

interface ShoppingCartProviderProps {
  children: ReactNode;
}

export default function ShoppingCartProvider({
  children,
}: ShoppingCartProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openCart = () => setIsOpen(true);

  const closeCart = () => setIsOpen(false);

  const [cartItems, setCartItems] = useLocalStorage<Cart.Item[]>(
    "cart-items",
    []
  );

  const totalValue = cartItems.reduce(
    (value, item) => item.quantity * item.product.price + value,
    0
  );

  const cartQuantity = cartItems.reduce(
    (value, item) => item.quantity + value,
    0
  );

  const isEmpty = cartQuantity <= 0;

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

  function removeFromCart(product: Product.Summary) {
    setCartItems((items) => {
      return items.filter((item) => item.id !== product.productId);
    });
  }

  function increaseQuantity(product: Product.Summary) {
    return addToCart(product);
  }

  function decreaseQuantity(product: Product.Summary) {
    setCartItems((items) => {
      if (items.find((item) => item.id === product.productId)?.quantity === 1) {
        return items.filter((item) => item.id !== product.productId);
      } else {
        return items.map((item) => {
          if (item.id === product.productId) {
            return { ...item, quantity: item.quantity - 1 };
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
        isOpen,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
        totalValue,
        isEmpty,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
      <ShoppingCart />
    </ShoppingCartContext.Provider>
  );
}
