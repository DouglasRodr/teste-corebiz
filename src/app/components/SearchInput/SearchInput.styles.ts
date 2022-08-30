import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: center;
  justify-content: center;

  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  height: 26px;

  outline: none;
  border: none;
  border-bottom: 1px solid black;
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  cursor: pointer;
`;
