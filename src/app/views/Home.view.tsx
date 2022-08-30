import usePageTitle from "../../core/hooks/usePageTitle";
import SliderBanners from "../features/SliderBanners/SliderBanners";
import SliderBestSellers from "../features/SliderBestSellers";
import DefaultLayout from "../layout";

export default function HomeView() {
  usePageTitle("Home");

  return (
    <DefaultLayout>
      <SliderBanners />
      <SliderBestSellers />
    </DefaultLayout>
  );
}
