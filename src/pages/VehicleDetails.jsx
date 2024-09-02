import React, { useContext, useEffect, useState } from 'react'
import { Fade } from 'react-awesome-reveal';
import { BsFuelPump } from 'react-icons/bs';
import { CiCalendarDate } from 'react-icons/ci';
import { GiGearStickPattern } from 'react-icons/gi';
import { MdOutlineSpeed } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Controller } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import MainButton from '../components/MainButton/MainButton';
import { useTranslation } from 'react-i18next';
import CustomCard from '../components/CustomCard/CustomCard';
import left from '../assets/images/VectorL.png'
import right from '../assets/images/VectorR.png'
import { useDispatch, useSelector } from 'react-redux';
import { TranslateContext } from '../context/TranslateContext';
import { fetchProductDetalisData } from '../redux/slices/vehicleDetailsSlice';
import Loading from '../components/Loading/Loading';

export default function VehicleDetails() {
    const { t } = useTranslation('global')
    const { id } = useParams()
    let { data, isLoading, error } = useSelector(({ productDetails }) => productDetails);
    const { arLang } = useContext(TranslateContext);
    let dispatch = useDispatch();
    const images = ['https://s3-alpha-sig.figma.com/img/5e04/709e/6424eb18f47268bd197a88c3bc96dff5?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UQWyaX3~FEgarfsuc5-~sMs2AFORFVmTvHQ6zyscLzqp6fbd7fsPEWVb-p-1c-Fah3l4x-L3za4uKznRgVDtMt0YxSpBgJwVnvaJIlopELQ90t5qd2-Kt-7UzDPjaEytJrfUXxBBTHK8bwPzsatvxpicJRPqhJPMU4NFYYvJszo1bEPogBONJ8FyRNw7i2Uk6LwPrI6K4ROTe2WrgnYbG80oM6x~FfsaIQEtz7uaMoOa-I1QaEZOBY47bYi7JjT6OesG4f3YW~3QLVjqk~VEqB13Gj8VkzNo~nIbdCC6cZY7VuCVt~7JUqmhoClTgHdVoz88wQ98e7Lc4WvlZzmzwQ__',
        'https://s3-alpha-sig.figma.com/img/b715/e80e/cd27bafb01ffb424d8802f899a95b2ad?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pQjOOOIlSo~sBQz9HMUxvG2temQaFcLjFtvsmpd8-XMwETIqA4Xf6p9NM-Q12d2lse~81xxNJ~PNALldwZoIPbBD686p3u3tr7bz3izvrkP3bTFQGa-6bhp99ziw0g5Od~Zwa0smOS2XUHasMoqh1TEcq1QEia1Z0DC~lJscPqtYWii67jVXM76A2mUeJS5g5VNHyEf5aAZy1oGU~TWI66wJrYHT~GiAKLDjx1UJOODDAAwALEz9AeQhnfmHBhMjxXRPQ54L2b6nNRHz0oGP2EWJmLGX~MItGVS8iYgk68DWh92tyCaPEvTdQMu-mYgPANq26~02uGlMisJtqvzk1A__',
        'https://s3-alpha-sig.figma.com/img/5edc/831e/0b3ab5df71c63fdc600c1a13a8962f51?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hZAr3AWew2oRvN~8vGXfBXxCtxZmIrW0r-cjpsVT1pTBQwne0CR5U-5vD2EwM30k8vd1~Oi1wLRX9GAIkdS9Pnns3t2PLfog3YDcq~mJS7Z9NMTi2j4r-blZtWpGY~nKZiLz0333L~NLZkrzQkTKG2yFd8CqdZU5bWdBXZnThICPWA0lfHlhTg8TGc00OSVxeUfdnFl~zfyEwR9K6Ar88O~ca0v1lH9UgfIsR1LedWb~FDGylsYSoC-c~HbIQf0L01FYXINtTXp7aGz8SktlCnaZg3LsC6uhiXw2GZCKHwdPJ1w~OVYWDrKWBpmti7ioW5G55e38mlSmspqQwmUWiQ__',
        'https://s3-alpha-sig.figma.com/img/2d20/3977/c60d30e50e3c0655ca7cc456e96de1cb?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b0YXe-R75Kx4P1ei6U1LFCQ2X3WjVzrN0qk14RhANozVyJRWjJMd56fqQWSFiyOS65LzOlTIuDbBhnf6WtFkqlvKMlt02K3OPgFiNPyuAQBfk2AOIz1AmcFTLCwPNPlxIfwCj38YS7sYRASOw2mtyKVUBxcNQ3RWJuDVfgCKvKAkuTeDX2Zqu83sHfmlNez0lOtOK30eZJEbIUEDJwdcRi-Wd8Gksc732haFZypaMXcN7qAR4rIqSWje9V3LKdeQGM5FJ7CV3asutJm6TK-bAx0iFNCI2ZJB2gzYqyARN-Ju9WPoo9ctMXTAMS6kLNgXYXdmuotpzxhL~2E6Io1XoQ__']
    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(fetchProductDetalisData(id))
    }, [])
    console.log(data?.data);
    useEffect(() => {
        dispatch(fetchProductDetalisData(id))
        if (error) {
        }
    }, [arLang])
    const [mainSwiper, setMainSwiper] = useState(null);
    const [thumbSwiper, setThumbSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Handle when the main Swiper slide changes
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
        {isLoading ? <Loading /> : <>
            <section className='pt-32 relative'>
                <img src={right} className='absolute right-0 top-0 z-[-1]' alt="vector" />
                <img src={left} className='absolute left-0 bottom-0 z-[-1]' alt="vector" />
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
                                modules={[Navigation]}  // Removed Controller module
                            >
                                {data?.data?.productDetails?.Images.map((image, i) => (
                                    <SwiperSlide key={i}>
                                        <div className={`mt-5 rounded-lg overflow-hidden cursor-pointer ${i === activeIndex ? 'border-2 border-[#f00]' : 'border-2'}`}>
                                            <img src={image} className='w-full h-[60px] object-cover' alt="thumbnail" />
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
                                                        attr.Key !== 'colors' && (
                                                            <div key={i} className="w-1/4 my-2">
                                                                <div className='flex items-center'>
                                                                    {attr.Key === 'fuel' ?
                                                                        <div className='flex items-center justify-center'>
                                                                            <BsFuelPump className='text-[25px] me-2' />
                                                                            {attr.Value}
                                                                        </div>
                                                                        : attr.Key === 'Speed' ? <div className='flex items-center justify-center'>
                                                                            <MdOutlineSpeed className='text-[25px] me-2' />
                                                                            {attr.Value}
                                                                        </div>
                                                                            : attr.Key === 'transmission' ? <div className='flex items-center justify-center'>
                                                                                <GiGearStickPattern className='text-[25px] me-2' />
                                                                                {attr.Value}
                                                                            </div>
                                                                                : attr.Key === 'year' ? <div className='flex items-center justify-center'>
                                                                                    <CiCalendarDate className='text-[25px] me-2' />
                                                                                    {attr.Value}
                                                                                </div>
                                                                                    : null}
                                                                    {/* {attr.Value} */}
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
                                                attr.Key == 'colors' ? attr.Value.map((color, i) =>
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
