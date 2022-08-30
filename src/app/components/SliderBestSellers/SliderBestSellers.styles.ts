import styled from "styled-components";
import { Swiper } from "swiper/react";

export const Wrapper = styled.div`
  margin: 24px 0 32px 0;

  height: 408px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;

  padding: 8px 16px;
`;

export const Slider = styled(Swiper)`
  height: 100%;
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
