import { Fragment, useEffect } from "react";
import { useShoppingCart } from "../../../core/hooks/useShoppingCart";
import Icon from "../Icon";
import SectionTitle from "../SectionTitle";
import CartItem from "./CartItem";
import * as S from "./ShoppingCart.styles";

export default function ShoppingCart() {
  const { isOpen, closeCart, isEmpty, cartItems } = useShoppingCart();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <Fragment>
      {isOpen && <S.Background onClick={closeCart} />}
      <S.Wrapper isOpen={isOpen}>
        <S.Header>
          <SectionTitle text="Meu Carrinho" variant="primary" />
          <S.CloseIcon onClick={closeCart}>
            <Icon icon="close" color="black" />
          </S.CloseIcon>
        </S.Header>
        <S.Content>
          {isEmpty ? (
            <S.EmptyContent>
              <Icon icon="cart" color="black" width={64} height={64} />
              <span>Seu carrinho está vazio</span>
            </S.EmptyContent>
          ) : (
            <Fragment>
              {cartItems.map((cartItem) => {
                return <CartItem key={cartItem.id} cartItem={cartItem} />;
              })}
            </Fragment>
          )}
        </S.Content>
      </S.Wrapper>
    </Fragment>
  );
}
