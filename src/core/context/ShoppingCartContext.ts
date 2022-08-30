import { createContext } from "react";
import { Cart, Product } from "../@types";

interface ShippingCartContext {
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  cartItems: Cart.Item[];
  cartQuantity: number;
  isEmpty: boolean;
  addToCart: (product: Product.Summary) => void;
}

export const ShoppingCartContext = createContext({} as ShippingCartContext);
