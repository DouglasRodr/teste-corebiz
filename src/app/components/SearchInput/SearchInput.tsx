import { InputHTMLAttributes } from "react";
import Icon from "../Icon";
import * as S from "./SearchInput.styles";

export interface SearchInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

export default function SearchInput({
  placeholder = "O que você está procurando?",
  ...props
}: SearchInputProps) {
  function handleClick() {
    console.log("Search Clicado");
  }

  return (
    <S.Wrapper>
      <S.Input placeholder={placeholder} {...props} type="text" />
      <S.IconWrapper onClick={handleClick}>
        <Icon icon="search" color="black" />
      </S.IconWrapper>
    </S.Wrapper>
  );
}
