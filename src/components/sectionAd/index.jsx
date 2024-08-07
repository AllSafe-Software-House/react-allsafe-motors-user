import { CardAd } from "../card";
import SwiperElement from "../swiper";

export default function AdSection() {
    let items = () => {
        let item;
        let arr = [];
        for (let i = 0; i < 10; i++) {
          item = <CardAd />;
          arr.push(item);
        }
        return arr;
      };
    return (
        <section className="ad-section">
            <SwiperElement dataSlides={items()} dots={false} infinite={true} res={true} slidesPerView={3} spaceBetween={20}/>
        </section>
    )
}