import { useEffect } from "react";
import useProducts from "../../../core/hooks/useProducts";
import SectionTitle from "../SectionTitle";
import * as S from "./SliderBestSellers.styles";
import { Pagination } from "swiper";
import { SwiperSlide } from "swiper/react";
import ProductCard from "../ProductCard";

export default function SliderBestSellers() {
  const { fetchProducts, loading, products } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <S.Wrapper>
      <S.Container>
        <SectionTitle text="Mais Vendidos" variant="primary" />
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <S.Slider
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              }}
              modules={[Pagination]}
              slidesPerView={4}
              slidesPerGroup={4}
            >
              {products?.map((product) => {
                return (
                  <SwiperSlide>
                    <ProductCard product={product} />
                  </SwiperSlide>
                );
              })}
            </S.Slider>
          )}
        </div>
      </S.Container>
    </S.Wrapper>
  );
}
