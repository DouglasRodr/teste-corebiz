import { useEffect } from "react";
import useProducts from "../../../core/hooks/useProducts";
import SectionTitle from "../SectionTitle";
import * as S from "./SliderBestSellers.styles";
import { Navigation, Pagination } from "swiper";
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
              pagination={{
                clickable: true,
              }}
              navigation={true}
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
                  spaceBetween: 12,
                },
              }}
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
