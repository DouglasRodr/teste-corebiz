import usePageTitle from "../../core/hooks/usePageTitle";
import Newsletter from "../components/Newsletter";
import SliderBanners from "../components/SliderBanners/SliderBanners";
import SliderBestSellers from "../components/SliderBestSellers";
import DefaultLayout from "../layout";

export default function HomeView() {
  usePageTitle("Home");

  return (
    <DefaultLayout>
      <SliderBanners />
      <SliderBestSellers />
      <Newsletter />
    </DefaultLayout>
  );
}
