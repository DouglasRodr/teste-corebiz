import { Fragment, useEffect } from "react";
import { useShoppingCart } from "../../../core/hooks/useShoppingCart";
import formatToCurrency from "../../../core/utils/formatToCurrency";
import Icon from "../Icon";
import SectionTitle from "../SectionTitle";
import CartItem from "./CartItem";
import * as S from "./ShoppingCart.styles";

export default function ShoppingCart() {
  const { isOpen, closeCart, isEmpty, cartItems, totalValue } = useShoppingCart();

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
            <>
              <S.CartItems>
                {cartItems.map((cartItem) => {
                  return <CartItem key={cartItem.id} cartItem={cartItem} />;
                })}
              </S.CartItems>
              <S.Footer>
                <S.CartTotal>
                  <S.TotalLabel>Total</S.TotalLabel>
                  <S.TotalValue>{formatToCurrency(totalValue)}</S.TotalValue>
                </S.CartTotal>
                <S.Disclaimer>Taxas e Frete serão calculados no carrinho</S.Disclaimer>
                <S.CheckoutButton label="Ir para o Checkout" size="large" />
              </S.Footer>
            </>
          )}
        </S.Content>
      </S.Wrapper>
    </Fragment>
  );
}
