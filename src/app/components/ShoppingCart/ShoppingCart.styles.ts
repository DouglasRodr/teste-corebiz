import styled from "styled-components";
import Button from "../Button";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;

export const Wrapper = styled.div<{ isOpen: boolean }>`
  background-color: #fff;
  width: 350px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: ${(p) => (p.isOpen ? 0 : "-100%")};
  transition: ${(p) => (p.isOpen ? "350ms" : "500ms")};

  z-index: 100;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  padding: 20px 16px 16px 16px;
`;

export const HeaderTitle = styled.h3`
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 25px;
`;

export const CloseIcon = styled.div`
  cursor: pointer;
`;

export const Content = styled.div`
  height: 100%;
`;

export const EmptyContent = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 16px;
`;

export const CartItems = styled.div`
  height: calc(100% - 176px);

  display: flex;
  flex-direction: column;

  gap: 16px;

  padding: 8px 4px 8px 16px;

  overflow: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    background-color: #fff;
    margin: 0;
  }

  &::-webkit-scrollbar {
    width: 4px;
    background-color: #fff;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #c0c0c0;
  }
`;

export const Footer = styled.div`
  height: 176px;
  width: 100%;
  padding: 16px;

  position: absolute;

  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  gap: 16px;
`;

export const Disclaimer = styled.span`
  font-size: 12px;
  line-height: 12px;

  text-align: center;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const CartTotal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TotalLabel = styled.span`
  text-align: left;

  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 28px;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const TotalValue = styled.span`
  text-align: right;

  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 28px;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const CheckoutButton = styled(Button)`
  width: 100%;

  text-transform: none;

  font-size: 14px;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
