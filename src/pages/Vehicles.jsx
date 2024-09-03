import React, { useContext, useEffect, useState } from 'react'
import HeadBanner from '../components/HeadBanner/HeadBanner'
import { useTranslation } from 'react-i18next'
import { Fade } from 'react-awesome-reveal';
import CustomCard from '../components/CustomCard/CustomCard';
import { useDispatch, useSelector } from 'react-redux';
import { TranslateContext } from '../context/TranslateContext';
import { fetchProductsData } from '../redux/slices/vehiclesSlice';
import Loading from '../components/Loading/Loading';
import { IoClose } from 'react-icons/io5';
import { FaFilter } from "react-icons/fa";
import MultiRangeSlider from '../components/Multiselect/MultiRangeSlider';
import 'react-tagsinput/react-tagsinput.css'; // Optional: import the default styles
import TagsInput from 'react-tagsinput';
export default function Vehicles() {
    const { t } = useTranslation('global')
    const [keywords, setKeywords] = useState([]);
    let { data, isLoading, error } = useSelector(({ productsData }) => productsData);
    let dispatch = useDispatch();
    const { arLang } = useContext(TranslateContext);
    const [model, setModel] = useState('')
    const [min, setMin] = useState('')
    const [max, setMax] = useState('')
    const [filters, setFilters] = useState({
        brand: '',
        price: '',
        model: '',
    });
    const handlePriceChange =() =>{
        setFilters(prevFilters => ({
            ...prevFilters,
            price: `${min},${max}`,
        }));        
        dispatch(fetchProductsData(filters))
    }
    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(fetchProductsData(filters))
    }, [])
    const handleChange = (tags) => {
        setKeywords(tags);
        setFilters(prevFilters => ({
            ...prevFilters,
            brand: tags.join(','),
        }));
    };
    useEffect(() => {
        dispatch(fetchProductsData(filters))
    }, [arLang])
    useEffect(() => {
        console.log(filters);
        dispatch(fetchProductsData(filters)); // Trigger search based on filters
    }, [filters.brand])
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log(filters);
            dispatch(fetchProductsData(filters)) // Trigger search based on filters
        }, 1000); // Wait 2000ms after the user stops typing

        return () => clearTimeout(timeoutId); // Cleanup the timeout
    }, [filters.model])
    return <main>
        {isLoading ? <Loading /> : <>
            <HeadBanner text={data?.data?.heroSection?.Title} bg={data?.data?.heroSection?.Image} disc={data?.data?.heroSection?.Description} />
            <section className='py-20'>
                <div className="container">

                    <div className='flex justify-between mb-6'>
                        <Fade direction='up'>
                            <h3 className='text-[18px] md:text-[22px] lg:text-[32px] font-bold'>{t('custom-text.exportV')}</h3>
                        </Fade>
                        <div className="dropdown dropdown-end">

                            <div tabIndex={0} role="button" className="btn m-1"><FaFilter /></div>
                            <div tabIndex={0} className="dropdown-content menu bg-base-100  rounded-box z-[1] w-52 px-5 pt-5 shadow">
                                <div>
                                    <label htmlFor="">{t('placeholders.model')}
                                        <input type="text" defaultValue={model} onChange={e => {
                                            setFilters(prevFilters => ({
                                                ...prevFilters,
                                                model: e.target.value,
                                            }));
                                            setModel(e.target.value);
                                        }} className='w-full my-3 bg-transparent border-gray-500 border py-2 px-4 outline-none rounded-lg' />
                                    </label>
                                </div>
                                <div>
                                    <label className='pb-3' htmlFor="">{t('placeholders.priceRange')}
                                    </label>
                                    <MultiRangeSlider setMin={setMin} setMax={setMax}  min={0} max={60000} />
                                    <button onClick={handlePriceChange} className="btn btn-sm bg-black text-white">Done</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <TagsInput className='w-full tagInput my-3 bg-transparent border-gray-500 border py-2 px-4 outline-none rounded-lg' value={keywords} onChange={handleChange} />
                    </div>
                    <div className="mt-4">
                        <div className="flex flex-wrap mt-3 ">
                            {data?.data?.Products.map((car =>
                                <div key={car.ID} className="w-full h-full px-2 my-3 md:w-1/2 lg:w-1/4">
                                    <CustomCard brand={car.brandName} id={car.ID} name={car.Title} disc={car.Description} attrs={car?.Attributes} price={car.Price} image={car.Images[0]} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>}
    </main>
}
