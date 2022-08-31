import usePageTitle from "../../core/hooks/usePageTitle";
import NewsletterForm from "../components/NewsletterForm";
import SliderBanners from "../components/SliderBanners/SliderBanners";
import SliderBestSellers from "../components/SliderBestSellers";
import DefaultLayout from "../layout";

export default function HomeView() {
  usePageTitle("Home");

  return (
    <DefaultLayout>
      <SliderBanners />
      <SliderBestSellers />
      <NewsletterForm />
    </DefaultLayout>
  );
}
