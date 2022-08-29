import styled from "styled-components";

export const Wrapper = styled.div<{
  showLabel: "desktopOnly" | "mobileOnly" | "never" | "all";
}>`
  min-width: 18px;
  min-height: 36px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  gap: 2px;

  cursor: pointer;

  span {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 14px;

    color: #7a7a7a;

    margin-top: 4px;

    @media (max-width: 1024px) {
      ${(props) =>
        (props.showLabel === "never" || props.showLabel === "desktopOnly") &&
        `
            display: none;
        `}
    }

    @media (min-width: 1024px) {
      ${(props) =>
        (props.showLabel === "never" || props.showLabel === "mobileOnly") &&
        `
            display: none;
        `}
    }
  }
`;
