import styled from "styled-components";
import Button from "../Button";

export const Details = styled.div`
  height: 136px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  gap: 2px;

  background-color: #fff;

  padding: 4px 0 0;

  @media (min-width: 1024px) {
    height: 160px;
    padding: 8px 8px;

    gap: 4px;
  }
`;

export const BuyButton = styled(Button)`
  width: 100%;

  @media (min-width: 1024px) {
    width: 128px;
  }
`;

export const Wrapper = styled.div`
  width: 144px;
  height: 264px;

  position: relative;

  background-color: #fff;

  ${BuyButton} {
    opacity: 1;
  }

  @media (min-width: 1024px) {
    width: 216px;
    height: 360px;

    ${BuyButton} {
      opacity: 0;
    }
  }

  &:hover {
    cursor: pointer;

    ${BuyButton} {
      opacity: 1;
    }

    @media (min-width: 1024px) {
      ${Details} {
        background-color: #e6e8ea;
      }
    }
  }
`;

export const Tag = styled.div`
  position: absolute;
  right: 0;
  width: 50px;
  height: 44px;

  border-top: 44px solid #f8475f;
  border-left: 50px solid transparent;

  @media (min-width: 1024px) {
    width: 80px;
    height: 72px;
    border-top: 72px solid #f8475f;
    border-left: 80px solid transparent;
  }

  span {
    position: relative;
    top: -42px;
    right: 24px;

    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 14px;

    color: #ffffff;

    @media (min-width: 1024px) {
      top: -60px;
      right: 40px;

      font-weight: 900;
      font-size: 16px;
      line-height: 22px;
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 128px;

  @media (min-width: 1024px) {
    height: 200px;
  }

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const Title = styled.h3`
  min-height: 24px;

  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 14px;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #7a7a7a;

  margin: 0;

  @media (min-width: 1024px) {
    font-size: 12px;
    line-height: 12px;
  }
`;

export const RatingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  height: 20px;
`;

export const ListPriceWrapper = styled.div`
  margin: 0;
  height: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 11px;
    text-align: center;
    text-decoration: line-through;

    color: #7a7a7a;

    margin: 0;

    @media (min-width: 1024px) {
      font-size: 12px;
      line-height: 12px;
    }
  }
`;

export const PriceWrapper = styled.div`
  margin: 0;
  height: 22px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    text-align: center;

    color: #000;

    margin: 0;

    @media (min-width: 1024px) {
      font-size: 18px;
      line-height: 22px;
    }
  }
`;

export const InstallmentsWrapper = styled.div`
  margin: 0;
  height: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 11px;
    text-align: center;

    color: #7a7a7a;

    margin: 0;

    @media (min-width: 1024px) {
      font-size: 12px;
      line-height: 12px;
    }
  }
`;
