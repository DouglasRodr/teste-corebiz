import MenuButton from "../MenuButton";
import MyAccountButton from "../MyAccountButton";
import SearchInput from "../SearchInput";
import ShoppingCartButton from "../ShoppingCartButton";
import * as H from "./Header.styles";

export default function Header() {
  return (
    <H.Wrapper>
      <H.Container>
        <H.MenuButtonContainer>
          <MenuButton />
        </H.MenuButtonContainer>
        <H.HeaderLogo />
        <H.SearchInputContainer>
          <SearchInput />
        </H.SearchInputContainer>
        <H.AsideContent>
          <MyAccountButton />
          <ShoppingCartButton />
        </H.AsideContent>
      </H.Container>
    </H.Wrapper>
  );
}
