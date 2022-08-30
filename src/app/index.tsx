import SwiperCore, { Autoplay } from "swiper";
import HomeView from "./views/Home.view";

export default function App() {
  SwiperCore.use([Autoplay]);
  
  return <HomeView />;
}
