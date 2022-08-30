import { Fragment, ReactNode, useEffect, useState } from "react";
import { Cart, Product } from "../../../core/@types";
import { ShoppingCartContext } from "../../../core/context/ShoppingCartContext";
import { useLocalStorage } from "../../../core/hooks/useLocalStorage";
import { useShoppingCart } from "../../../core/hooks/useShoppingCart";
import Icon from "../Icon";
import * as S from "./ShoppingCart.styles";

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

  const cartQuantity = cartItems.length;

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

  return (
    <ShoppingCartContext.Provider
      value={{
        isOpen,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
        isEmpty,
        addToCart,
      }}
    >
      {children}
      <ShoppingCart />
    </ShoppingCartContext.Provider>
  );
}

function ShoppingCart() {
  const { isOpen, closeCart, isEmpty, cartItems } = useShoppingCart();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <Fragment>
      {isOpen && <S.Background onClick={closeCart} />}
      <S.Wrapper isOpen={isOpen}>
        <S.Header>
          <S.HeaderTitle>Meu Carrinho</S.HeaderTitle>
          <S.CloseIcon onClick={closeCart}>
            <Icon icon="close" color="black" />
          </S.CloseIcon>
        </S.Header>
        {isEmpty ? (
          <S.EmptyContent>
            <Icon icon="cart" color="black" width={64} height={64} />
            <span>Seu carrinho está vazio</span>
          </S.EmptyContent>
        ) : (
          <Fragment>
            {cartItems.map((cartItem) => {
              return <p key={cartItem.id}>{cartItem.product.productName}</p>;
            })}
          </Fragment>
        )}
      </S.Wrapper>
    </Fragment>
  );
}
