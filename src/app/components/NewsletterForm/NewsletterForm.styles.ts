import styled from "styled-components";
import Button from "../Button";

export const Wrapper = styled.section`
  width: 100%;
  min-height: 144px;

  margin-top: 32px;
  padding: 28px 0 36px 0;

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

  gap: 12px;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

export const NewsletterInputGroup = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;

  gap: 4px;
`;

export const NewsletterInput = styled.input<{
  isInvalid: boolean;
}>`
  width: 100%;
  height: 48px;

  border: none;
  outline: ${(p) => `${p.isInvalid ? "1px solid #d7182a" : "none"}`};
  border-radius: 5px;

  padding: 16px;

  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;

  &:disabled,
  &:hover,
  &:active,
  &:focus {
    outline: ${(p) =>
      `${p.isInvalid ? "1px solid #d7182a" : "1px solid #bdbdbd"}`};
  }
`;

export const ErrorMessage = styled.span`
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;

  color: #d7182a;
`;

export const NewsletterButton = styled(Button)`
  width: 100%;

  text-transform: none;

  font-family: "Lato", sans-serif;

  @media (min-width: 992px) {
    max-width: 140px;
  }
`;

export const SuccessContainer = styled.div`
  width: 100%;
  max-width: 344px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 16px;
`;

export const SuccessTitle = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;

    text-align: center;
  }

  span {
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;

    text-align: center;
  }
`;

export const ResetFormButton = styled(Button)`
  width: 100%;
  max-width: 288px;

  text-transform: none;

  font-family: "Lato", sans-serif;
`;
