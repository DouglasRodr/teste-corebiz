import styled from "styled-components";

export const Wrapper = styled.div`
  width: 144px;
  height: 264px;

  position: relative;

  background-color: #fff;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    width: 216px;
    height: 360px;
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

export const Image = styled.img`
  width: 136px;
  height: 136px;

  object-fit: cover;

  @media (min-width: 1024px) {
    width: 216px;
    height: 216px;
  }
`;

export const Details = styled.div`
  height: 144px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background-color: #fff;

  padding: 8px;
`;

export const Title = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  text-align: center;

  color: #7a7a7a;

  margin: 0;
`;

export const RatingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  height: 16px;
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
    font-size: 12px;
    line-height: 12px;
    text-align: center;

    text-decoration: line-through;

    color: #7a7a7a;

    margin: 0;
  }
`;

export const PriceWrapper = styled.div`
  margin: 0;
  height: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    text-align: center;

    color: #000;

    margin: 0;
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
    font-size: 12px;
    line-height: 12px;
    text-align: center;

    color: #7a7a7a;

    margin: 0;
  }
`;

export const BuyButton = styled.button`
  width: 100%;
  height: 36px;

  @media (min-width: 1024px) {
    width: 128px;
    height: 32px;
  }
`;
