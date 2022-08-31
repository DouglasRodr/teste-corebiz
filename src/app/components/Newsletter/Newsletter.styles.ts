import styled from "styled-components";
import Button from "../Button";

export const Wrapper = styled.section`
  width: 100%;
  min-height: 144px;

  padding: 24px 0 36px 0;

  background-color: #f2f2f2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 992px) {
    padding: 16px 0 24px 0;
  }
`;

export const Container = styled.div`
  width: 288px;
  margin: 0 auto;

  gap: 16px;

  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    width: 732px;
  }
`;

export const Title = styled.h3`
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 22px;

  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 8px;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

export const NewsletterInput = styled.input`
  width: 100%;
  height: 48px;

  border: none;
  outline: none;
  border-radius: 5px;

  padding: 16px;

  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;

  &:hover,
  &:active,
  &:focus {
    outline: 1px solid #bdbdbd;
  }
`;

export const NewsletterButton = styled(Button)`
  width: 100%;

  text-transform: none;

  font-family: "Lato", sans-serif;

  @media (min-width: 992px) {
    max-width: 140px;
  }
`;
