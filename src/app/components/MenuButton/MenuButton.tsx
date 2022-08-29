import Icon from "../Icon";
import * as B from "./MenuButton.styles";

export default function MenuButton() {
  function handleMenuClick() {
    console.log("Menu Clicado");
  }

  return (
    <B.Wrapper onClick={handleMenuClick}>
      <Icon icon="menu" color="black" />
    </B.Wrapper>
  );
}
