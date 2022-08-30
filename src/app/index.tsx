import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import ShoppingCart from "./components/ShoppingCart";
import HomeView from "./views/Home.view";

export default function App() {
  SwiperCore.use([Autoplay, Navigation, Pagination]);

  return (
    <ShoppingCart>
      <HomeView />
    </ShoppingCart>
  );
}
