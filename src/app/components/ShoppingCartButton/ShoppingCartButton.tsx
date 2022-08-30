import { useShoppingCart } from "../../../core/hooks/useShoppingCart";
import Icon from "../Icon";
import * as S from "./ShoppingCartButton.styles";

export default function ShoppingCartButton() {
  const { cartQuantity } = useShoppingCart();

  function handleClick() {
    console.log("Shopping Cart Button Clicado");
  }

  return (
    <S.Wrapper onClick={handleClick}>
      <Icon icon="cart" color="black" />
      {cartQuantity > 0 && <S.ItemCount>{cartQuantity}</S.ItemCount>}
    </S.Wrapper>
  );
}
