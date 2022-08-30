import SectionTitle from "../../components/SectionTitle";
import * as S from "./SliderBestSellers.styles";

export default function SliderBestSellers() {
  return (
    <S.Wrapper>
      <S.Container>
        <SectionTitle text="Mais Vendidos" variant="primary" />
      </S.Container>
    </S.Wrapper>
  );
}
