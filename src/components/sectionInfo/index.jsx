import { IoAlbumsSharp } from "react-icons/io5";
import CardElement from "../card";
import SwiperElement from "../swiper";

export default function InfoSection() {
  let items = () => {
    let item;
    let arr = [];
    for (let i = 0; i < 9; i++) {
      item = (
        <div key={i}>
          <CardElement
            isHorizontal={true}
            cardClass="items-center shadow-none border-none"
            iconImg={<IoAlbumsSharp className="text-5xl me-3" />}
            title="Hello World"
            titleClass='text-start font-bold text-[15px]'
            p="We ensure secure payment"
            pClass='text-[13px] text-start'
          />
        </div>
      );
      arr.push(item);
    }
    return arr;
  };
  return (
    <section className="border p-5">
      <SwiperElement
        dataSlides={items()}
        infinite={true}
        slidesPerView={4}
        spaceBetween={20}
        res={true}
      />
    </section>
  );
}
