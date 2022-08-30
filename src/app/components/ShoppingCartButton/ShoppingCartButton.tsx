import { useShoppingCart } from "../../../core/hooks/useShoppingCart";
import Icon from "../Icon";
import * as S from "./ShoppingCartButton.styles";

export default function ShoppingCartButton() {
  const { cartItems } = useShoppingCart();

  function handleClick() {
    console.log("Shopping Cart Button Clicado");
  }

  return (
    <S.Wrapper onClick={handleClick}>
      <Icon icon="cart" color="black" />
      {cartItems && cartItems.length > 0 && (
        <S.ItemCount>{cartItems.length}</S.ItemCount>
      )}
    </S.Wrapper>
  );
}
