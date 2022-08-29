import styled from "styled-components";
import { Wrapper as MenuButton } from "../MenuButton/MenuButton.styles";
import { Wrapper as Logo } from "../Logo/Logo.styles";

export const Wrapper = styled.div`
  height: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-bottom: 1px solid red;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 8px 16px;

  display: grid;
  grid-template-columns: 25% 1fr 25%;
  grid-auto-rows: 28px;
  grid-gap: 4px;
  grid-template-areas:
    " column-1 column-2 column-3 "
    " column-4 column-4 column-4";

  @media (min-width: 1024px) {
    grid-auto-rows: 36px;
    grid-gap: 24px;
    grid-template-columns: 302px 1fr 184px;
    grid-template-areas: "column-1 column-2 column-3";
  }

  ${MenuButton} {
    justify-content: flex-start;

    grid-area: column-1;

    @media (min-width: 1024px) {
      display: none;
    }
  }

  ${Logo} {
    grid-area: column-2;

    @media (min-width: 1024px) {
      justify-content: flex-start;

      grid-area: column-1;
    }
  }
`;

export const SearchInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  grid-area: column-4;

  @media (min-width: 1024px) {
    grid-area: column-2;
  }

  background-color: orange;
`;

export const AsideContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  grid-area: column-3;

  background-color: green;
`;
