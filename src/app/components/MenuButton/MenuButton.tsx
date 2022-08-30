import Icon from "../Icon";
import * as B from "./MenuButton.styles";

export default function MenuButton() {
  function handleClick() {
    console.log("Menu Clicado");
  }

  return (
    <B.Wrapper onClick={handleClick}>
      <Icon icon="menu" color="black" />
    </B.Wrapper>
  );
}
