import React, { useContext, useEffect, useState } from 'react'
import HeadBanner from '../components/HeadBanner/HeadBanner'
import { useTranslation } from 'react-i18next'
import { Fade } from 'react-awesome-reveal';
import CustomCard from '../components/CustomCard/CustomCard';
import { useDispatch, useSelector } from 'react-redux';
import { TranslateContext } from '../context/TranslateContext';
import { fetchProductsData } from '../redux/slices/vehiclesSlice';

export default function Vehicles() {
    const { t } = useTranslation('global')
    const [activeTab, setActiveTab] = useState(0);
    let { data, isLoading, error } = useSelector(({ productsData }) => productsData);
    let dispatch = useDispatch();
    const { arLang } = useContext(TranslateContext);
    useEffect(()=>{
        window.scrollTo(0,0)
        dispatch(fetchProductsData(''))
    },[])
    useEffect(() => {
        dispatch(fetchProductsData('search'))
      }, [arLang])
    return <main>
        <HeadBanner text={t('navlinks.products')} bg={'https://s3-alpha-sig.figma.com/img/f311/ad26/49ec50a8d80e556c60aa0941fe5cba4e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GKVuCjPleiYoMQ8OWA6roalNyDx4jffndi6I3PLMUBEDcWfIgnsqJCIu2uIZWjb0HD8~I9UyE5W5~~Qqn~XGdMjF-MQ50o32AbvSAaad90GZNBcmgeCDPmy3uKVv~zvJppVnKg1xIBhA3W6bHdHQXndsxTcjIn2AD~GqkG~0S4FcFuIX8FsR0wo27797CnbFoljy-jmQ04m9DmS7WEtMC9injPyDMLOHj6gB-WgK9q4PJwHspzd97gA8XBR6Y0m8EfEANH0XScJb6yQsKISw9pz5rOMI-c33Pn2GyEngmg8rISzJkMzbpvgO2kcWvYee4Ty4CI7V4yPF3HQWtmHqNQ__'} />
        <section className='py-20'>
            <div className="container">
                <div className='flex justify-between mb-6'>
                    <Fade direction='up'>
                        <h3 className='text-[18px] md:text-[22px] lg:text-[32px] font-bold'>{t('custom-text.exportV')}</h3>
                    </Fade>
                </div>
                <input type="text" placeholder='Search' className='w-full my-3 bg-transparent border-gray-500 border py-2 px-4 outline-none rounded-lg' />
                <div className="flex space-x-4 border-b-2 border-gray-800">
                    <button
                        onClick={() => setActiveTab(0)}
                        className={`flex items-center space-x-2 px-4 py-2 focus:outline-none ${activeTab === 0
                            ? "text-white border-b-2 border-[#f00]"
                            : "text-white"
                            }`}
                    >
                        <span className='font-semibold'>Recent Cars</span>
                    </button>
                    <button
                        onClick={() => setActiveTab(1)}
                        className={`flex items-center space-x-2 px-4 py-2 focus:outline-none ${activeTab === 1
                            ? "text-white border-b-2 border-[#f00]"
                            : "text-white"
                            }`}
                    >
                        <span className='font-semibold'>Featured Cars</span>
                    </button>
                    {/* Add more buttons for additional tabs as needed */}
                </div>
                <div className="mt-4">
                    {activeTab === 0 && (
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
                    )}
                    {activeTab === 1 && (
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
                    )}
                </div>
            </div>
        </section>
    </main>
}
