import styled from "styled-components";

const VARIANTS = {
  primary: {
    color: "#000",
    lineColor: "#C0C0C0",
  },
  secondary: {
    color: "#FFF",
    lineColor: "#FFF",
  },
};

export const Wrapper = styled.h2<{
  variant: "primary" | "secondary";
}>`
  color: ${(p) => VARIANTS[p.variant].color};

  font-family: "Nunito", "sans-serif";
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 25px;

  @media (min-width: 1024px) {
    font-size: 20px;
    line-height: 27px;
  }

  &:after {
    content: " ";
    height: 4px;
    width: 32px;
    background-color: ${(p) => VARIANTS[p.variant].lineColor};
    display: block;
    margin: 4px 0;

    @media (min-width: 1024px) {
      width: 56px;
    }
  }
`;
