import styled, { keyframes } from "styled-components";
import { Swiper } from "swiper/react";

export const Wrapper = styled.div`
  margin: 32px 0 64px 0;

  height: 336px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    height: 416px;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1240px;
  margin: 0 auto;

  padding: 0 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Content = styled.div`
  height: 288px;

  @media (min-width: 1024px) {
    height: 360px;
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  height: 100%;

  gap: 16px;

  span {
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 36px;

    color: #000;
  }
`;

const Spinner = keyframes`  
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  width: 24px;
  height: 24px;
  border: 4px solid #000;
  border-top: 4px solid transparent;
  border-radius: 50%;
  animation: ${Spinner} 1s linear infinite;
`;

export const Slider = styled(Swiper)`
  padding: 0;

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper-pagination-bullets {
    position: relative;
    bottom: 0;
  }

  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }

  .swiper-button-disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  @media (min-width: 1024px) {
    padding: 0 32px;

    .swiper-pagination-bullets {
      display: none;
    }

    .swiper-button-prev,
    .swiper-button-next {
      display: block;
    }
  }
`;

export const NextButton = styled.div`
  display: none;
  width: 36px;
  height: 36px;
  position: absolute;
  top: 50%;
  right: 0;
  cursor: pointer;
  z-index: 2;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const PreviousButton = styled.div`
  display: none;
  width: 36px;
  height: 36px;
  position: absolute;
  top: 50%;
  left: 0;
  cursor: pointer;
  z-index: 2;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
