import Icon from "../Icon";
import * as S from "./ShoppingCartButton.styles";

export default function ShoppingCartButton() {
  const count = 1;

  function handleClick() {
    console.log("Shopping Cart Button Clicado");
  }

  return (
    <S.Wrapper onClick={handleClick}>
      <Icon icon="cart" color="black" />
      <S.ItemCount>{count}</S.ItemCount>
    </S.Wrapper>
  );
}
