import { useEffect, useRef } from "react";
import useProducts from "../../../core/hooks/useProducts";
import SectionTitle from "../SectionTitle";
import * as S from "./SliderBestSellers.styles";
import { Navigation, Pagination } from "swiper";
import { SwiperSlide } from "swiper/react";
import ProductCard from "../ProductCard";
import Icon from "../Icon";

export default function SliderBestSellers() {
  const { fetchProducts, loading, products } = useProducts();

  const navigationPrevRef = useRef<HTMLDivElement>(null);
  const navigationNextRef = useRef<HTMLDivElement>(null);

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
            <S.Slider
              pagination={{
                clickable: true,
              }}
              navigation={{
                prevEl: navigationPrevRef.current!, // Assert non-null
                nextEl: navigationNextRef.current!, // Assert non-null
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
              <S.PreviousButton ref={navigationPrevRef}>
                <Icon icon="arrowLeft" color="black" />
              </S.PreviousButton>
              <S.NextButton ref={navigationNextRef}>
                <Icon icon="arrowRight" color="black" />
              </S.NextButton>
            </S.Slider>
          )}
        </S.Content>
      </S.Container>
    </S.Wrapper>
  );
}
