import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { ShoppingCartProvider } from "../core/context";
import HomeView from "./views/Home.view";

export default function App() {
  SwiperCore.use([Autoplay, Navigation, Pagination]);

  return (
    <ShoppingCartProvider>
      <HomeView />
    </ShoppingCartProvider>
  );
}
