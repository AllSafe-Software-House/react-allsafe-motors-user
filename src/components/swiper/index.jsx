import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const SwiperElement = ({
  spaceBetween,
  navigation,
  infinite,
  dots,
  className,
  dataSlides,
  res,
}) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [key, setKey] = useState(0);

  useEffect(() => {
    const direction = i18n.dir(currentLanguage);
    document.body.setAttribute("dir", direction);
    setKey((prevKey) => prevKey + 1);
  }, [currentLanguage, i18n]);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const ar = () => {
    let item;
    const items = [];
    dataSlides.map((single, i) => {
      item = <SwiperSlide key={i}>{single}</SwiperSlide>;
      items.push(item);
    });
    return items;
  };
  return (
    <Swiper
      key={key}
      spaceBetween={spaceBetween}
      autoplay={
        infinite && {
          delay: 2500,
          disableOnInteraction: false,
        }
      }
      navigation={navigation}
      pagination={dots && pagination}
      modules={[Pagination, Navigation, Autoplay]}
      className={`mySwiper ${className}`}
      loop={true}
      dir={currentLanguage === "ar" ? "rtl" : "ltr"}
      breakpoints={
        res && {
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }
      }
    >
      {ar()}
    </Swiper>
  );
};

SwiperElement.propTypes = {
  slidesPerView: PropTypes.number,
  spaceBetween: PropTypes.number,
  navigation: PropTypes.bool,
  infinite: PropTypes.bool,
  dots: PropTypes.bool,
  className: PropTypes.string,
  res: PropTypes.bool,
  dataSlides: PropTypes.array.isRequired,
};

export default SwiperElement;
