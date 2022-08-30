import styled, { keyframes } from "styled-components";
import { Wrapper as Icon } from "../Icon/Icon.styles";

const VARIANTS = {
  primary: {
    background: "#000",
    color: "#FFF",
    backgroundOnHover: "#000",
    colorOnHover: "#D8D8D8",
  },
  secondary: {
    background: "#FFF",
    color: "#000",
    backgroundOnHover: "#D8D8D8",
    colorOnHover: "#000",
  },
};

const SIZES = {
  small: {
    height: 32,
  },
  normal: {
    height: 38,
  },
  large: {
    height: 48,
  },
};

const Spinner = keyframes`  
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  animation: ${Spinner} 1s linear infinite;
`;

export const Wrapper = styled.button<{
  variant: "primary" | "secondary";
  size: "small" | "normal" | "large";
  isOnlyIcon: boolean;
}>`
  background: ${(p) => VARIANTS[p.variant].background};
  color: ${(p) => VARIANTS[p.variant].color};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 5px;

  text-transform: uppercase;
  font-family: "Nunito", "sans-serif";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;

  height: ${(p) => `${SIZES[p.size].height}px`};
  padding: 8px 16px;

  cursor: pointer;

  &:enabled,
  ${Icon} svg path {
    transition: 0.3s ease-in-out;
  }

  &:enabled:hover,
  &:disabled {
    background: ${(p) => VARIANTS[p.variant].backgroundOnHover};
    color: ${(p) => VARIANTS[p.variant].colorOnHover};
    transition: 0.3s ease-in-out;

    ${Icon} svg path {
      fill: ${(p) => VARIANTS[p.variant].colorOnHover};
    }
  }

  &:disabled {
    cursor: not-allowed;
  }

  ${Icon}, ${Loading} {
    margin-right: ${(p) => `${p.isOnlyIcon ? 0 : 16}px`};
  }

  ${Loading} {
    border: 3px solid ${(p) => VARIANTS[p.variant].colorOnHover};
    border-top: 3px solid ${(p) => VARIANTS[p.variant].backgroundOnHover};
  }
`;
