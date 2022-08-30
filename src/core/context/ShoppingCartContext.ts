import { createContext } from "react";
import { Cart, Product } from "../@types";

interface ShippingCartContext {
  cartItems: Cart.Item[];
  addToCart: (product: Product.Summary) => void;
}

export const ShoppingCartContext = createContext({} as ShippingCartContext);
