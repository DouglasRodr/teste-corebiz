import Logo from "../Logo";
import MenuButton from "../MenuButton";
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
          <span>Aside</span>
        </H.AsideContent>
      </H.Container>
    </H.Wrapper>
  );
}
