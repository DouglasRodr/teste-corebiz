import { SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import * as S from "./SliderBanners.styles";
import Banner from "../Banner";
import banner from "../../assets/banner.jpg";
import bannerMobile from "../../assets/banner-mobile.jpg";

export default function SliderBanners() {
  return (
    <S.Slider
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
      modules={[Pagination]}
    >
      {[...Array(4)].map(() => {
        return (
          <SwiperSlide>
            <Banner
              imageDesktop={banner}
              imageMobile={bannerMobile}
              title="Criar ou migrar seu e-commerce?"
              subtitle="Olá, o que você está buscando?"
            />
          </SwiperSlide>
        );
      })}
    </S.Slider>
  );
}
