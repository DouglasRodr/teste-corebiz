import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;

  min-width: 18px;
  min-height: 36px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export const ItemCount = styled.p`
  position: absolute;

  top: 0;
  left: 10px;

  font-family: "Nunito", "sans-serif";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  color: #fff;

  width: 16px;
  height: 16px;
  background-color: #f8475f;
  border-radius: 50%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
