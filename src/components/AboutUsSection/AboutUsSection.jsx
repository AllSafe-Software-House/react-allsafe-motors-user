import React from 'react'
import { useTranslation } from 'react-i18next'
import MainButton from '../MainButton/MainButton';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

export default function AboutUsSection({ data }) {
    const { t } = useTranslation('global');
    return <>
        <section className='py-16 text-white'>
            <div className="container">
                <div className="flex flex-wrap md:gutter-x-4 items-center">
                    <div className="w-full my-2 md:w-1/2">
                        <Fade>
                            <iframe className='w-full rounded-md' height="550" src={data?.Images} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </Fade>
                    </div>
                    <div className="w-full my-2 md:ps-36 md:w-1/2">
                        <h2 className='font-main mb-4 font-bold text-[25px] md:text-[32px]'>{data?.Title}</h2>
                        <p className='text-base'>{data?.Description}</p>
                        <Link to={'/about-us'}>
                            <MainButton text={t('navlinks.about_us')} className={'mt-6 rounded-lg text-[20px]'} nav />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </>
}
