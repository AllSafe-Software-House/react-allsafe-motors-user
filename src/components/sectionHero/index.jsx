import SwiperElement from "../swiper";
import { CardAd } from "../card";
import SidebarElement from "../sidebar";
export default function HeroSection() {
  let items = () => {
    let item;
    let arr = [];
    for (let i = 0; i < 3; i++) {
      item = <CardAd />;
      arr.push(item);
    }
    return arr;
  };
  return (
    <div className="my-7 grid grid-cols-1 gap-4 lg:grid-cols-4">
      <div className="smallSidebar hidden bg-[#f8f8f8] lg:block rounded-lg">
        <SidebarElement />
      </div>
      <div className="swiperSide lg:col-span-3 lg:col-start-2">
        <SwiperElement
          dataSlides={items()}
          dots={true}
          infinite={false}
          slidesPerView={1}
        />
      </div>
    </div>
  );
}
