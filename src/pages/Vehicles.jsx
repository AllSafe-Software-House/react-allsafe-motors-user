import React, { useContext, useEffect, useState } from 'react'
import HeadBanner from '../components/HeadBanner/HeadBanner'
import { useTranslation } from 'react-i18next'
import { Fade } from 'react-awesome-reveal';
import CustomCard from '../components/CustomCard/CustomCard';
import { useDispatch, useSelector } from 'react-redux';
import { TranslateContext } from '../context/TranslateContext';
import { fetchProductsData } from '../redux/slices/vehiclesSlice';
import Loading from '../components/Loading/Loading';

export default function Vehicles() {
    const { t } = useTranslation('global')
    const [activeTab, setActiveTab] = useState(0);
    let { data, isLoading, error } = useSelector(({ productsData }) => productsData);
    let dispatch = useDispatch();
    const { arLang } = useContext(TranslateContext);
    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(fetchProductsData(''))
    }, [])
    console.log(data?.data);

    useEffect(() => {
        dispatch(fetchProductsData('search'))
    }, [arLang])
    return <main>
        {isLoading? <Loading/> : <>
        <HeadBanner text={data?.data?.heroSection?.Title} bg={data?.data?.heroSection?.Image} disc={data?.data?.heroSection?.Description} />
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
                    <div className="flex flex-wrap mt-3 ">
                    {data?.data?.Products.map((car =>
                        <div key={car.ID} className="w-full h-full px-2 my-3 md:w-1/2 lg:w-1/4">
                            <CustomCard id={car.ID} name={car.Title} disc={car.Description} attrs={car?.Attributes} price={car.Price} image={car.Images[0]} />
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </section>
        </>}
    </main>
}
