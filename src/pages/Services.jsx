import React, { useContext, useEffect } from 'react'
import HeadBanner from '../components/HeadBanner/HeadBanner'
import { useTranslation } from 'react-i18next'
import CustomCard from '../components/CustomCard/CustomCard'
import { Fade } from 'react-awesome-reveal'
import { useDispatch, useSelector } from 'react-redux'
import { TranslateContext } from '../context/TranslateContext'
import { fetchServicesData } from '../redux/slices/servicesSlice'
import Loading from '../components/Loading/Loading'

export default function Services() {
    const { t } = useTranslation('global')
    let { data, isLoading, error } = useSelector(({ servicesData }) => servicesData);
    const { arLang } = useContext(TranslateContext);
    let dispatch = useDispatch();
    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(fetchServicesData())
    }, [])
    console.log(data?.data);

    useEffect(() => {
        dispatch(fetchServicesData())
        if (error) {

        }
    }, [arLang])
    return <main>
        {isLoading ? <Loading /> : <>
            <HeadBanner text={data?.data?.heroSection?.Title} bg={data?.data?.heroSection?.Image} disc={data?.data?.heroSection?.Description} />
            <section className='py-20'>
                <div className="container">
                    <div className="flex flex-wrap items-center">
                        {data?.data?.Services?.map((serv) =>
                            <div key={serv.ID} className="w-full md:w-1/2 px-3 my-3">
                                <Fade>
                                    <CustomCard serv name={serv.Title} disc={serv.Description} image={serv.ImagePath} id={serv.ID} />
                                </Fade>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>}
    </main>
}
