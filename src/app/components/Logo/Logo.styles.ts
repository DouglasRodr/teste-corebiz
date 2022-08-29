import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  img {
    height: 25px;
  }

  @media (min-width: 1024px) {
    img {
      height: 40px;
    }
  }
`;
