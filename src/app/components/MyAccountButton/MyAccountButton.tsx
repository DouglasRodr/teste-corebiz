import Icon from "../Icon";
import * as M from "./MyAccountButton.styles";

export interface MyAccountButtonProps {
  showLabel?: "desktopOnly" | "mobileOnly" | "never" | "all";
  label?: string;
}

export default function MyAccountButton({
  showLabel = "desktopOnly",
  label = "Minha Conta",
}: MyAccountButtonProps) {
  function handleMyAccountClick() {
    console.log("MyAccount Clicado");
  }

  return (
    <M.Wrapper showLabel={showLabel} onClick={handleMyAccountClick}>
      <Icon icon="user" color="black" />
      <span>{label}</span>
    </M.Wrapper>
  );
}
