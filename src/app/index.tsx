import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import HomeView from "./views/Home.view";

export default function App() {
  SwiperCore.use([Autoplay, Navigation, Pagination]);

  return <HomeView />;
}
