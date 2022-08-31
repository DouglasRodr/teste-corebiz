import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ImageWrapper = styled.div`
  width: 100px;
  height: 100px;

  img {
    width: 100%;
    height: auto;

    object-fit: cover;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;

export const InfoWrapper = styled.div`
  width: 210px;
  height: 100px;

  padding: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.div`
  width: 100%;
  height: 40px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  h3 {
    height: 24px;
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 14px;

    display: flex;
    align-items: flex-start;
    justify-content: center;

    color: #7a7a7a;

    margin: 0;

    @media (min-width: 1024px) {
      font-size: 12px;
      line-height: 12px;
    }

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;

export const RemoveButton = styled.div`
  cursor: pointer;

  padding: 0px 8px;
`;

export const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  justify-content: space-between;
`;

export const QuantitySelector = styled.div`
  width: 100px;
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  p {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    font-size: 14px;
    line-height: 14px;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;

export const QuantitySelectorButton = styled.div`
  width: 32px;
  height: 32px;
  padding: 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  cursor: pointer;
`;

export const Totals = styled.div`
  height: 32px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const UnitPrice = styled.span`
  display: block;
  text-align: right;

  font-size: 10px;
  line-height: 10px;

  color: #7a7a7a;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const TotalPrice = styled.span`
  display: block;
  text-align: right;

  font-weight: 600;
  font-size: 14px;
  line-height: 14px;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
