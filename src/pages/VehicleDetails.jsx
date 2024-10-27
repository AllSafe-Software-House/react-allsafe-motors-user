import React, { useContext, useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';
import { BsFuelPump } from 'react-icons/bs';
import { CiCalendarDate } from 'react-icons/ci';
import { GiGearStickPattern } from 'react-icons/gi';
import { MdOutlineSpeed } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import left from '../assets/images/VectorL.png';
import right from '../assets/images/VectorR.png';
import CustomCard from '../components/CustomCard/CustomCard';
import Loading from '../components/Loading/Loading';
import MainButton from '../components/MainButton/MainButton';
import { TranslateContext } from '../context/TranslateContext';
import { fetchProductDetalisData } from '../redux/slices/vehicleDetailsSlice';
import toast, { Toaster } from 'react-hot-toast';
export default function VehicleDetails() {
    const { t } = useTranslation('global')
    const { id } = useParams()
    let { data, isLoading, error } = useSelector(({ productDetails }) => productDetails);
    const { arLang } = useContext(TranslateContext);
    let dispatch = useDispatch();
    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(fetchProductDetalisData(id))
        if (error) {
            toast.error(error);
        }
    }, [])
    console.log(data?.data);
    useEffect(() => {
        dispatch(fetchProductDetalisData(id))
        if (error) {
            toast.error(error);
        }
    }, [arLang])
    const [mainSwiper, setMainSwiper] = useState(null);
    const [thumbSwiper, setThumbSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Handle when the main Swiper slide chang
    useEffect(() => {
        if (mainSwiper) {
            mainSwiper.on('slideChange', () => {
                const newIndex = mainSwiper.activeIndex;
                setActiveIndex(newIndex);
                thumbSwiper?.slideTo(newIndex);  // Sync the thumbnail swiper
            });
        }
    }, [mainSwiper, thumbSwiper]);

    // Handle when the thumbnail Swiper is clicked
    useEffect(() => {
        if (thumbSwiper) {
            thumbSwiper.on('click', (swiper) => {
                const newIndex = swiper.clickedIndex;
                setActiveIndex(newIndex);
                mainSwiper?.slideTo(newIndex);  // Sync the main swiper
            });
        }
    }, [thumbSwiper, mainSwiper]);
    return <main>
        <Toaster />
        {isLoading ? <Loading /> : <>
            <section className='pt-32 relative'>
                <img src={right} className='absolute right-0 top-0 z-[1]' alt="vector" />
                <img src={left} className='absolute left-0 bottom-0 z-[1]' alt="vector" />
                <div className="container">
                    <div className="lg:grid lg:grid-cols-1 gap-1">
                        <div className="my-5 p-0 lg:p-0">
                            <div className='h-[500px] bg-[#FFFFFF0F] rounded-xl py-5'>
                                <Swiper
                                    className='h-full'
                                    slidesPerView={1}
                                    navigation={true}
                                    onSwiper={setMainSwiper}
                                    modules={[Navigation]}  // Removed Controller module
                                >
                                    {data?.data?.productDetails?.Images.map((img, i) => (
                                        <SwiperSlide key={i}>
                                            <img src={img} className='w-full h-full rounded-xl object-contain' alt="chair" />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <Swiper
                                slidesPerView={2}
                                spaceBetween={1}
                                breakpoints={{
                                    586: {
                                        slidesPerView: 3,
                                        spaceBetween: 8,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 10,
                                    },
                                    1279: {
                                        slidesPerView: 4,
                                        spaceBetween: 15,
                                    },
                                }}
                                onSwiper={setThumbSwiper}
                                className="mySwiper"
                                modules={[Navigation]}
                            >
                                {data?.data?.productDetails?.Images.map((image, i) => (
                                    <SwiperSlide key={i}>
                                        <div className={`mt-5 w-[100px] mx-auto h-[100px]  overflow-hidden rounded-full cursor-pointer grayscale ${i === activeIndex ? 'border-2 border-[#f00] grayscale-0' : 'border-2'}`}>
                                            <img src={image} className='w-full h-full object-cover' alt="thumbnail" />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className="my-5">
                            <Fade>
                                <div className='flex h-full flex-col justify-center'>
                                    <div>
                                        <p>{data?.data?.productDetails?.modelNumber}</p>
                                        <h2 className='font-semibold text-[30px]'>{data?.data?.productDetails?.Title}</h2>
                                        <p>{data?.data?.productDetails?.brandName}</p>
                                        <p className='mt-7 text-[16px] md:text-[18px]'>{data?.data?.productDetails?.Description}</p>
                                        <div className='border-t border-white py-3 mt-3'>
                                            <div className='flex items-center flex-wrap'>
                                                {data?.data?.productDetails?.Attributes?.map((attr, i) => {
                                                    return (
                                                        (attr.Key !== 'colors' && attr.Key !== 'اللون') && (
                                                            <div key={i} className="w-1/4 my-2">
                                                                <div className='flex items-center'>
                                                                    {attr.Key === 'fuel' || attr.Key === 'الوقود' ? <BsFuelPump className='text-[25px] me-2' />
                                                                        : attr.Key === 'Speed' || attr.Key === 'السرعه' ? <MdOutlineSpeed className='text-[25px] me-2' />
                                                                            : attr.Key === 'transmission' || attr.Key === 'التحكم' ? <GiGearStickPattern className='text-[25px] me-2' />
                                                                                : attr.Key === 'year' || attr.Key === 'السنه' ? <CiCalendarDate className='text-[25px] me-2' />
                                                                                    : null}
                                                                    {attr.Value}
                                                                </div>
                                                            </div>
                                                        )
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-4 border-b pb-4'>
                                        <p className='font-medium'>{t('custom-text.colors')}</p>
                                        <div className='flex mt-3 items-center'>
                                            {data?.data?.productDetails?.Attributes?.map((attr, i) =>
                                                attr.Key == 'colors' || attr.Key == 'اللون' ? attr?.Value?.map((color, i) =>
                                                    <div key={i} style={{ backgroundColor: color }} className='h-[30px] w-[30px] mx-2 rounded-full'></div>
                                                ) : ''
                                            )}
                                        </div>
                                    </div>
                                    <p className='my-5 text-[20px]'>$600.72</p>
                                    <Link to={`/vehicles/vehicle-form/${id}`}>
                                        <MainButton text={t('custom-text.continue')} className={'w-full justify-center rounded-md'} />
                                    </Link>
                                </div>

                            </Fade>

                        </div>
                    </div>
                </div>
            </section>
            <section className='py-16 relative'>
                <img src={right} className='absolute right-0 top-0 z-[-1]' alt="vector" />
                <img src={left} className='absolute left-0 bottom-0 z-[-1]' alt="vector" />
                <div className="container">
                    <div className='flex justify-between'>
                        <Fade direction='up'>
                            <h3 className='text-[18px] md:text-[22px] lg:text-[32px] font-bold'>{t('custom-text.exportV')}</h3>
                        </Fade>
                    </div>
                    <div className="flex flex-wrap mt-3 items-center">
                        {data?.data?.productDetails?.relatedProductes?.map((car =>
                            <div key={car.ID} className="w-full h-full px-2 my-3 md:w-1/2 lg:w-1/4">
                                <CustomCard id={car.ID} name={car.Title} disc={car.Description} attrs={car?.Attributes} price={car.Price} image={car.Images[0]} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>}
    </main >
}
