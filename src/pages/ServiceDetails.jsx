import React, { useContext, useEffect } from 'react'
import { Fade } from 'react-awesome-reveal'
import { TranslateContext } from '../context/TranslateContext';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServicesDetalisData } from '../redux/slices/serviceDetailsSlice';
import { useParams } from 'react-router-dom';

export default function ServiceDetails() {
    let { id } = useParams()
    let { data, isLoading, error } = useSelector(({ servicesDetails }) => servicesDetails);
    let dispatch = useDispatch();
    const { arLang } = useContext(TranslateContext);
    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(fetchServicesDetalisData(id))
    }, [])
    useEffect(() => {
        dispatch(fetchServicesDetalisData(id))
    }, [arLang])
    return <main>
        <Fade>
            <section className='h-[40vh] flex items-center justify-center'>
                <h1 className='font-medium text-[48px] md:text-[58px] lg:text-[68px]'>{data?.data?.Title}</h1>
            </section>
            <section>
                <div className="container">
                    <article className='mb-10'>
                        <div className='border-b py-5 border-[#A7A7A7]'>
                            {/* <p className='text-[25px] pb-4'>Lorem, ipsum.</p> */}
                            <p>{data?.data?.Description}</p>
                        </div>
                    </article>
                </div>
            </section>
        </Fade>
    </main>
}
