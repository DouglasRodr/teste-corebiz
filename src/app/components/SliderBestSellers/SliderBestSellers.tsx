import { useEffect } from "react";
import { Navigation, Pagination } from "swiper";
import { SwiperSlide, useSwiper } from "swiper/react";
import useProducts from "../../../core/hooks/useProducts";
import SectionTitle from "../SectionTitle";
import ProductCard from "../ProductCard";
import Icon from "../Icon";
import * as S from "./SliderBestSellers.styles";

export default function SliderBestSellers() {
  const { fetchProducts, loading, products } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <S.Wrapper>
      <S.Container>
        <SectionTitle text="Mais Vendidos" variant="primary" />
        <S.Content>
          {loading ? (
            <S.LoadingWrapper>
              <S.Loading />
              <span>Carregando</span>
            </S.LoadingWrapper>
          ) : (
            <>
              <S.Slider
                loop={true}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 3000,
                  pauseOnMouseEnter: true,
                  disableOnInteraction: false,
                }}
                modules={[Navigation, Pagination]}
                slidesPerView={2}
                slidesPerGroup={2}
                spaceBetween={24}
                centeredSlidesBounds={true}
                breakpoints={{
                  512: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                  },
                  680: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                  },
                  1024: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    spaceBetween: 18,
                  },
                }}
              >
                {products?.map((product) => {
                  return (
                    <SwiperSlide key={product.productId}>
                      <ProductCard product={product} />
                    </SwiperSlide>
                  );
                })}
                <PreviousButton />
                <NextButton />
              </S.Slider>
            </>
          )}
        </S.Content>
      </S.Container>
    </S.Wrapper>
  );
}

function PreviousButton() {
  const swiper = useSwiper();
  return (
    <S.PreviousButton
      onClick={() => {
        swiper.slidePrev();
      }}
    >
      <Icon icon="arrowLeft" color="black" />
    </S.PreviousButton>
  );
}

function NextButton() {
  const swiper = useSwiper();

  return (
    <S.NextButton
      onClick={() => {
        swiper.slideNext();
      }}
    >
      <Icon icon="arrowRight" color="black" />
    </S.NextButton>
  );
}
