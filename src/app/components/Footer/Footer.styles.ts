import styled from "styled-components";
import Button from "../Button";

export const Wrapper = styled.footer`
  background-color: #000;
  color: #fff;

  height: 392px;

  @media (min-width: 992px) {
    height: 224px;
  }
`;

export const Container = styled.div`
  width: 100%;

  max-width: 1240px;
  height: 100%;
  margin: 0 auto;
  padding: 28px 16px 8px 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1024px) {
    padding: 24px 16px;

    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  width: 100%;
  height: 160px;

  @media (min-width: 1024px) {
    width: 296px;
  }
`;

export const Location = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  span {
    display: block;

    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 12px;
  }
`;

export const Contact = styled.div`
  width: 200px;
  height: 100px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  a {
    text-decoration: none;
  }
`;

export const ContactButton = styled(Button)`
  justify-content: flex-start;

  width: 100%;

  line-height: 12px;

  padding-right: 28px;
`;

export const Realization = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 200px;
  height: 48px;

  @media (min-width: 1024px) {
    width: 296px;
    justify-content: flex-end;

    gap: 24px;
  }

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 12px;
  }
`;

export const LogoCorebiz = styled.a`
  display: flex;
  flex-direction: column;

  text-decoration: none;
  color: #fff;
`;

export const LogoVtex = styled.a`
  display: flex;
  flex-direction: column;

  text-decoration: none;
  color: #fff;

  img {
    width: 64px;
  }
`;
