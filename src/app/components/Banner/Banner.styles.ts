import styled from "styled-components";

export const Wrapper = styled.div<{
  imageDesktop: string;
  imageMobile: string;
}>`
  width: 100%;
  height: 192px;

  background-image: url(${(p) => p.imageMobile});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  color: #fff;

  @media (min-width: 576px) and (max-width: 1024px) {
    height: 304px;
  }

  @media (min-width: 1024px) {
    height: 432px;

    background-image: url(${(p) => p.imageDesktop});
  }
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
`;

export const CallToAction = styled.div`
  width: 304px;

  @media (min-width: 1024px) {
    width: 456px;
  }
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 36px;

  text-align: left;

  @media (min-width: 1024px) {
    font-weight: 900;
    font-size: 45px;
    line-height: 45px;
  }
`;

export const Subtitle = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;

  text-align: left;

  @media (min-width: 1024px) {
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
  }
`;
