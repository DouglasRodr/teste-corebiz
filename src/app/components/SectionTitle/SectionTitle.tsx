import * as S from "./SectionTitle.styles";

export interface SectionTitleProps {
  text: string;
  variant: "primary" | "secondary";
}

export default function SectionTitle({
  text,
  variant = "primary",
}: SectionTitleProps) {
  return <S.Wrapper variant={variant}>{text}</S.Wrapper>;
}
