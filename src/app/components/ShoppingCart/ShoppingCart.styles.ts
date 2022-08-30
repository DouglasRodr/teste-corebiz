import styled from "styled-components";

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
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
  transition: ${(p) => (p.isOpen ? "350ms" : "850ms")};

  padding: 16px;

  z-index: 2;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  padding: 8px 0;
  margin-bottom: 16px;
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

export const EmptyContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;

  gap: 16px;
`;
