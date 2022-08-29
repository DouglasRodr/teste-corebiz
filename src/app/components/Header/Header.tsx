import Logo from "../Logo";
import MenuButton from "../MenuButton";
import MyAccountButton from "../MyAccountButton";
import * as H from "./Header.styles";

export default function Header() {
  return (
    <H.Wrapper>
      <H.Container>
        <MenuButton />
        <Logo />
        <H.SearchInput>
          <span>Search</span>
        </H.SearchInput>
        <H.AsideContent>
          <MyAccountButton />
        </H.AsideContent>
      </H.Container>
    </H.Wrapper>
  );
}
