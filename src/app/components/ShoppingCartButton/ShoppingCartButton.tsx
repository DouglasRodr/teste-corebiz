import { useShoppingCart } from "../../../core/hooks/useShoppingCart";
import Icon from "../Icon";
import * as S from "./ShoppingCartButton.styles";

export default function ShoppingCartButton() {
  const { cartQuantity, openCart } = useShoppingCart();

  return (
    <S.Wrapper onClick={openCart}>
      <Icon icon="cart" color="black" />
      {cartQuantity > 0 && <S.ItemCount>{cartQuantity}</S.ItemCount>}
    </S.Wrapper>
  );
}
