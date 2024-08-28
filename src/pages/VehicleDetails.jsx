import React, { useContext, useEffect, useState } from 'react'
import { Fade } from 'react-awesome-reveal';
import { BsFuelPump } from 'react-icons/bs';
import { CiCalendarDate } from 'react-icons/ci';
import { GiGearStickPattern } from 'react-icons/gi';
import { MdOutlineSpeed } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import MainButton from '../components/MainButton/MainButton';
import { useTranslation } from 'react-i18next';
import CustomCard from '../components/CustomCard/CustomCard';
import left from '../assets/images/VectorL.png'
import right from '../assets/images/VectorR.png'
import { useDispatch, useSelector } from 'react-redux';
import { TranslateContext } from '../context/TranslateContext';
import { fetchProductDetalisData } from '../redux/slices/vehicleDetailsSlice';
export default function VehicleDetails() {
    const { t } = useTranslation('global')
    let { data, isLoading, error } = useSelector(({ productDetails }) => productDetails);
    const { arLang } = useContext(TranslateContext);
    let dispatch = useDispatch();
    const [mainImg, setMainImg] = useState('https://s3-alpha-sig.figma.com/img/5e04/709e/6424eb18f47268bd197a88c3bc96dff5?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UQWyaX3~FEgarfsuc5-~sMs2AFORFVmTvHQ6zyscLzqp6fbd7fsPEWVb-p-1c-Fah3l4x-L3za4uKznRgVDtMt0YxSpBgJwVnvaJIlopELQ90t5qd2-Kt-7UzDPjaEytJrfUXxBBTHK8bwPzsatvxpicJRPqhJPMU4NFYYvJszo1bEPogBONJ8FyRNw7i2Uk6LwPrI6K4ROTe2WrgnYbG80oM6x~FfsaIQEtz7uaMoOa-I1QaEZOBY47bYi7JjT6OesG4f3YW~3QLVjqk~VEqB13Gj8VkzNo~nIbdCC6cZY7VuCVt~7JUqmhoClTgHdVoz88wQ98e7Lc4WvlZzmzwQ__');
    const images = ['https://s3-alpha-sig.figma.com/img/5e04/709e/6424eb18f47268bd197a88c3bc96dff5?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UQWyaX3~FEgarfsuc5-~sMs2AFORFVmTvHQ6zyscLzqp6fbd7fsPEWVb-p-1c-Fah3l4x-L3za4uKznRgVDtMt0YxSpBgJwVnvaJIlopELQ90t5qd2-Kt-7UzDPjaEytJrfUXxBBTHK8bwPzsatvxpicJRPqhJPMU4NFYYvJszo1bEPogBONJ8FyRNw7i2Uk6LwPrI6K4ROTe2WrgnYbG80oM6x~FfsaIQEtz7uaMoOa-I1QaEZOBY47bYi7JjT6OesG4f3YW~3QLVjqk~VEqB13Gj8VkzNo~nIbdCC6cZY7VuCVt~7JUqmhoClTgHdVoz88wQ98e7Lc4WvlZzmzwQ__',
        'https://s3-alpha-sig.figma.com/img/b715/e80e/cd27bafb01ffb424d8802f899a95b2ad?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pQjOOOIlSo~sBQz9HMUxvG2temQaFcLjFtvsmpd8-XMwETIqA4Xf6p9NM-Q12d2lse~81xxNJ~PNALldwZoIPbBD686p3u3tr7bz3izvrkP3bTFQGa-6bhp99ziw0g5Od~Zwa0smOS2XUHasMoqh1TEcq1QEia1Z0DC~lJscPqtYWii67jVXM76A2mUeJS5g5VNHyEf5aAZy1oGU~TWI66wJrYHT~GiAKLDjx1UJOODDAAwALEz9AeQhnfmHBhMjxXRPQ54L2b6nNRHz0oGP2EWJmLGX~MItGVS8iYgk68DWh92tyCaPEvTdQMu-mYgPANq26~02uGlMisJtqvzk1A__',
        'https://s3-alpha-sig.figma.com/img/5edc/831e/0b3ab5df71c63fdc600c1a13a8962f51?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hZAr3AWew2oRvN~8vGXfBXxCtxZmIrW0r-cjpsVT1pTBQwne0CR5U-5vD2EwM30k8vd1~Oi1wLRX9GAIkdS9Pnns3t2PLfog3YDcq~mJS7Z9NMTi2j4r-blZtWpGY~nKZiLz0333L~NLZkrzQkTKG2yFd8CqdZU5bWdBXZnThICPWA0lfHlhTg8TGc00OSVxeUfdnFl~zfyEwR9K6Ar88O~ca0v1lH9UgfIsR1LedWb~FDGylsYSoC-c~HbIQf0L01FYXINtTXp7aGz8SktlCnaZg3LsC6uhiXw2GZCKHwdPJ1w~OVYWDrKWBpmti7ioW5G55e38mlSmspqQwmUWiQ__',
        'https://s3-alpha-sig.figma.com/img/2d20/3977/c60d30e50e3c0655ca7cc456e96de1cb?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b0YXe-R75Kx4P1ei6U1LFCQ2X3WjVzrN0qk14RhANozVyJRWjJMd56fqQWSFiyOS65LzOlTIuDbBhnf6WtFkqlvKMlt02K3OPgFiNPyuAQBfk2AOIz1AmcFTLCwPNPlxIfwCj38YS7sYRASOw2mtyKVUBxcNQ3RWJuDVfgCKvKAkuTeDX2Zqu83sHfmlNez0lOtOK30eZJEbIUEDJwdcRi-Wd8Gksc732haFZypaMXcN7qAR4rIqSWje9V3LKdeQGM5FJ7CV3asutJm6TK-bAx0iFNCI2ZJB2gzYqyARN-Ju9WPoo9ctMXTAMS6kLNgXYXdmuotpzxhL~2E6Io1XoQ__']
    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(fetchProductDetalisData(''))
    }, [])
    useEffect(() => {
        dispatch(fetchProductDetalisData(''))
        if (error) {
        }
    }, [arLang])
    return <main>
        <section className='pt-32 relative'>
            <img src={right} className='absolute right-0 top-0 z-[-1]' alt="vector" />
            <img src={left} className='absolute left-0 bottom-0 z-[-1]' alt="vector" />
            <div className="container">
                <div className="lg:grid lg:grid-cols-2 lg:gap-10">
                    <div className="my-5 p-0 lg:p-0">
                        <div className='h-[500px] bg-[#FFFFFF0F] rounded-xl py-5'>
                            <Fade className='w-full h-full' duration={1200}>
                                <img src={mainImg} className='w-full h-full rounded-xl object-contain' alt="chair" />
                            </Fade>
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
                            className="mySwiper"
                        >
                            {images.map((image, i) => (

                                <SwiperSlide key={i}>
                                    <Fade className='w-full' direction='up' delay={i * 200} triggerOnce>
                                        <div onClick={() => setMainImg(image)} className={`mt-5 rounded-lg overflow-hidden cursor-pointer ${image === mainImg ? 'border-2 border-[#f00] ' : 'border-2 '}`}>
                                            <img src={image} className='w-full  h-[150px]' />
                                        </div>
                                    </Fade>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="my-5">
                        <Fade>
                            <div className='flex h-full flex-col justify-center'>
                                <div>
                                    <p>Model: OLED42C2PSA</p>
                                    <h2 className='font-semibold text-[30px]'>Corolla Altis – 2023</h2>
                                    <p className='mt-7 text-[16px] md:text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume </p>
                                    <p className='mt-7 text-[16px] md:text-[18px]'>Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume</p>
                                    <p className='mt-7 text-[16px] md:text-[18px]'>Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume</p>
                                    <div className='border-t border-white py-3 mt-3'>
                                        <div className='flex items-center flex-wrap'>
                                            <div className="w-1/4 my-2">
                                                <div className='flex items-center justify-center'>
                                                    <BsFuelPump className='text-[25px] me-2' />
                                                    CVT
                                                </div>
                                            </div>
                                            <div className="w-1/4 my-2">
                                                <div className='flex items-center justify-center'>
                                                    <GiGearStickPattern className='text-[25px] me-2' />
                                                    CVT
                                                </div>
                                            </div>
                                            <div className="w-1/4 my-2">
                                                <div className='flex items-center justify-center'>
                                                    <CiCalendarDate className='text-[25px] me-2' />
                                                    2023
                                                </div>
                                            </div>
                                            <div className="w-1/4 my-2">
                                                <div className='flex items-center justify-center'>
                                                    <MdOutlineSpeed className='text-[25px] me-2' />
                                                    10 Miles
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-4 border-b pb-4'>
                                    <p className='font-medium'>Colors</p>
                                    <div className='flex mt-3 items-center'>
                                        <div className='h-[30px] w-[30px] bg-blue-700 mx-2 rounded-full'></div>
                                        <div className='h-[30px] w-[30px] bg-red-700 mx-2 rounded-full'></div>
                                        <div className='h-[30px] w-[30px] bg-yellow-700 mx-2 rounded-full'></div>
                                        <div className='h-[30px] w-[30px] bg-purple-600 mx-2 rounded-full'></div>
                                    </div>
                                </div>
                                <p className='my-5 text-[20px]'>$600.72</p>
                                <Link to={'/vehicles/vehicle-form'}>
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
                    <div className="w-full px-2 my-3 md:w-1/2 lg:w-1/4">
                        <CustomCard name={'Toyota Camry New'} disc={'3.5 D5 PowerPulse Momentum 5dr AW…'} miles={"20 Miles"} gear={'Automatic'} date={'2023'} fuel={'Petrol'} price={"$40,000"} image={'https://s3-alpha-sig.figma.com/img/60e9/18b1/d49e16d94a7d331d0a22d92bbd66a21e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hBX0yt96imFK3HppxfOFoH3TCHJCM-fZ6WiWoooUYczXhCNyTQauGgex4cKiZR29~T4qkfqlgOrSwgDhfmMtFYhG48h4hBc5-sK2tppXJ~F9qfh9aJ7LA8tSnrE0NJNuzoZekW9zTHzS4PeLUi21H862WOQEZg0rUB31~qSZczhSWnacKgBMcRY0XzrL8qr0wfeKqVtgfDSkA9WfQmmq~~mjq~~3CqGVrHXvsy7-b7B0hirWvRajlTA89OKOBRFByAySXPt5T1roe7RR7-8gmEo3KJ06lZn6E8NSxJHIPhk25Z8ONJmf4GIJnws8VbpEzwPtbfvBSpqi0RZYWKPHeg__'} />
                    </div>
                    <div className="w-full px-2 my-3 md:w-1/2 lg:w-1/4">
                        <CustomCard name={'Toyota Camry New'} disc={'3.5 D5 PowerPulse Momentum 5dr AW…'} miles={"20 Miles"} gear={'Automatic'} date={'2023'} fuel={'Petrol'} price={"$40,000"} image={'https://s3-alpha-sig.figma.com/img/60e9/18b1/d49e16d94a7d331d0a22d92bbd66a21e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hBX0yt96imFK3HppxfOFoH3TCHJCM-fZ6WiWoooUYczXhCNyTQauGgex4cKiZR29~T4qkfqlgOrSwgDhfmMtFYhG48h4hBc5-sK2tppXJ~F9qfh9aJ7LA8tSnrE0NJNuzoZekW9zTHzS4PeLUi21H862WOQEZg0rUB31~qSZczhSWnacKgBMcRY0XzrL8qr0wfeKqVtgfDSkA9WfQmmq~~mjq~~3CqGVrHXvsy7-b7B0hirWvRajlTA89OKOBRFByAySXPt5T1roe7RR7-8gmEo3KJ06lZn6E8NSxJHIPhk25Z8ONJmf4GIJnws8VbpEzwPtbfvBSpqi0RZYWKPHeg__'} />
                    </div>
                    <div className="w-full px-2 my-3 md:w-1/2 lg:w-1/4">
                        <CustomCard name={'Toyota Camry New'} disc={'3.5 D5 PowerPulse Momentum 5dr AW…'} miles={"20 Miles"} gear={'Automatic'} date={'2023'} fuel={'Petrol'} price={"$40,000"} image={'https://s3-alpha-sig.figma.com/img/60e9/18b1/d49e16d94a7d331d0a22d92bbd66a21e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hBX0yt96imFK3HppxfOFoH3TCHJCM-fZ6WiWoooUYczXhCNyTQauGgex4cKiZR29~T4qkfqlgOrSwgDhfmMtFYhG48h4hBc5-sK2tppXJ~F9qfh9aJ7LA8tSnrE0NJNuzoZekW9zTHzS4PeLUi21H862WOQEZg0rUB31~qSZczhSWnacKgBMcRY0XzrL8qr0wfeKqVtgfDSkA9WfQmmq~~mjq~~3CqGVrHXvsy7-b7B0hirWvRajlTA89OKOBRFByAySXPt5T1roe7RR7-8gmEo3KJ06lZn6E8NSxJHIPhk25Z8ONJmf4GIJnws8VbpEzwPtbfvBSpqi0RZYWKPHeg__'} />
                    </div>
                    <div className="w-full px-2 my-3 md:w-1/2 lg:w-1/4">
                        <CustomCard name={'Toyota Camry New'} disc={'3.5 D5 PowerPulse Momentum 5dr AW…'} miles={"20 Miles"} gear={'Automatic'} date={'2023'} fuel={'Petrol'} price={"$40,000"} image={'https://s3-alpha-sig.figma.com/img/60e9/18b1/d49e16d94a7d331d0a22d92bbd66a21e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hBX0yt96imFK3HppxfOFoH3TCHJCM-fZ6WiWoooUYczXhCNyTQauGgex4cKiZR29~T4qkfqlgOrSwgDhfmMtFYhG48h4hBc5-sK2tppXJ~F9qfh9aJ7LA8tSnrE0NJNuzoZekW9zTHzS4PeLUi21H862WOQEZg0rUB31~qSZczhSWnacKgBMcRY0XzrL8qr0wfeKqVtgfDSkA9WfQmmq~~mjq~~3CqGVrHXvsy7-b7B0hirWvRajlTA89OKOBRFByAySXPt5T1roe7RR7-8gmEo3KJ06lZn6E8NSxJHIPhk25Z8ONJmf4GIJnws8VbpEzwPtbfvBSpqi0RZYWKPHeg__'} />
                    </div>
                    <div className="w-full px-2 my-3 md:w-1/2 lg:w-1/4">
                        <CustomCard name={'Toyota Camry New'} disc={'3.5 D5 PowerPulse Momentum 5dr AW…'} miles={"20 Miles"} gear={'Automatic'} date={'2023'} fuel={'Petrol'} price={"$40,000"} image={'https://s3-alpha-sig.figma.com/img/60e9/18b1/d49e16d94a7d331d0a22d92bbd66a21e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hBX0yt96imFK3HppxfOFoH3TCHJCM-fZ6WiWoooUYczXhCNyTQauGgex4cKiZR29~T4qkfqlgOrSwgDhfmMtFYhG48h4hBc5-sK2tppXJ~F9qfh9aJ7LA8tSnrE0NJNuzoZekW9zTHzS4PeLUi21H862WOQEZg0rUB31~qSZczhSWnacKgBMcRY0XzrL8qr0wfeKqVtgfDSkA9WfQmmq~~mjq~~3CqGVrHXvsy7-b7B0hirWvRajlTA89OKOBRFByAySXPt5T1roe7RR7-8gmEo3KJ06lZn6E8NSxJHIPhk25Z8ONJmf4GIJnws8VbpEzwPtbfvBSpqi0RZYWKPHeg__'} />
                    </div>
                    <div className="w-full px-2 my-3 md:w-1/2 lg:w-1/4">
                        <CustomCard name={'Toyota Camry New'} disc={'3.5 D5 PowerPulse Momentum 5dr AW…'} miles={"20 Miles"} gear={'Automatic'} date={'2023'} fuel={'Petrol'} price={"$40,000"} image={'https://s3-alpha-sig.figma.com/img/60e9/18b1/d49e16d94a7d331d0a22d92bbd66a21e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hBX0yt96imFK3HppxfOFoH3TCHJCM-fZ6WiWoooUYczXhCNyTQauGgex4cKiZR29~T4qkfqlgOrSwgDhfmMtFYhG48h4hBc5-sK2tppXJ~F9qfh9aJ7LA8tSnrE0NJNuzoZekW9zTHzS4PeLUi21H862WOQEZg0rUB31~qSZczhSWnacKgBMcRY0XzrL8qr0wfeKqVtgfDSkA9WfQmmq~~mjq~~3CqGVrHXvsy7-b7B0hirWvRajlTA89OKOBRFByAySXPt5T1roe7RR7-8gmEo3KJ06lZn6E8NSxJHIPhk25Z8ONJmf4GIJnws8VbpEzwPtbfvBSpqi0RZYWKPHeg__'} />
                    </div>
                    <div className="w-full px-2 my-3 md:w-1/2 lg:w-1/4">
                        <CustomCard name={'Toyota Camry New'} disc={'3.5 D5 PowerPulse Momentum 5dr AW…'} miles={"20 Miles"} gear={'Automatic'} date={'2023'} fuel={'Petrol'} price={"$40,000"} image={'https://s3-alpha-sig.figma.com/img/60e9/18b1/d49e16d94a7d331d0a22d92bbd66a21e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hBX0yt96imFK3HppxfOFoH3TCHJCM-fZ6WiWoooUYczXhCNyTQauGgex4cKiZR29~T4qkfqlgOrSwgDhfmMtFYhG48h4hBc5-sK2tppXJ~F9qfh9aJ7LA8tSnrE0NJNuzoZekW9zTHzS4PeLUi21H862WOQEZg0rUB31~qSZczhSWnacKgBMcRY0XzrL8qr0wfeKqVtgfDSkA9WfQmmq~~mjq~~3CqGVrHXvsy7-b7B0hirWvRajlTA89OKOBRFByAySXPt5T1roe7RR7-8gmEo3KJ06lZn6E8NSxJHIPhk25Z8ONJmf4GIJnws8VbpEzwPtbfvBSpqi0RZYWKPHeg__'} />
                    </div>
                    <div className="w-full px-2 my-3 md:w-1/2 lg:w-1/4">
                        <CustomCard name={'Toyota Camry New'} disc={'3.5 D5 PowerPulse Momentum 5dr AW…'} miles={"20 Miles"} gear={'Automatic'} date={'2023'} fuel={'Petrol'} price={"$40,000"} image={'https://s3-alpha-sig.figma.com/img/60e9/18b1/d49e16d94a7d331d0a22d92bbd66a21e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hBX0yt96imFK3HppxfOFoH3TCHJCM-fZ6WiWoooUYczXhCNyTQauGgex4cKiZR29~T4qkfqlgOrSwgDhfmMtFYhG48h4hBc5-sK2tppXJ~F9qfh9aJ7LA8tSnrE0NJNuzoZekW9zTHzS4PeLUi21H862WOQEZg0rUB31~qSZczhSWnacKgBMcRY0XzrL8qr0wfeKqVtgfDSkA9WfQmmq~~mjq~~3CqGVrHXvsy7-b7B0hirWvRajlTA89OKOBRFByAySXPt5T1roe7RR7-8gmEo3KJ06lZn6E8NSxJHIPhk25Z8ONJmf4GIJnws8VbpEzwPtbfvBSpqi0RZYWKPHeg__'} />
                    </div>
                </div>
            </div>
        </section>
    </main>
}
