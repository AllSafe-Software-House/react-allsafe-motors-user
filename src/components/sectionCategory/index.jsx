import MainButton from "../button";
import CardElement from "../card";
import SwiperElement from "../swiper";
import MainTitle from "../title";

export default function Categories() {
  let items = () => {
    let item;
    let arr = [];
    for (let i = 0; i < 10; i++) {
      item = (
        <CardElement
          title={"hello"}
          titleClass={"font-bold text-3xl"}
          alt="img"
          customButton={
            <MainButton
              text={"Add"}
              buttonClass={"rounded text-black p-3"}
            />
          }
          img={"https://picsum.photos/200"}
          imgClass={"w-full"}
          imgParentClass={"p-5"}
        />
      );
      arr.push(item);
    }
    console.log("arr: ", arr);
    return arr;
  };
  return (
    <section className="categories">
        <MainTitle text={'Top Categories Of The Month'} className={'text-center font-bold text-3xl'}/>
      <SwiperElement
        dataSlides={items()}
        dots={false}
        infinite={false}
        res={true}
        slidesPerView={6}
        spaceBetween={30}
      />
    </section>
  );
}
