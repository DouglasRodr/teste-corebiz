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
  height: 100%;

  padding: 8px 16px;
`;

export const Slider = styled(Swiper)`
  width: 100%;
  height: 100%;
  display: inline-grid;
`;
