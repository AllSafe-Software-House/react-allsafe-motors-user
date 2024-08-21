import React from 'react'
import { useTranslation } from 'react-i18next'
import MainButton from '../MainButton/MainButton';
import { Fade } from 'react-awesome-reveal';

export default function AboutUsSection() {
    const { t } = useTranslation('global');
    return <>
        <section className='py-16 text-white'>
            <div className="container">
                <div className="flex flex-wrap md:gutter-x-4 items-center">
                    <div className="w-full my-2 md:w-1/2">
                        <Fade>
                            <iframe className='w-full rounded-md' height="550" src="https://www.youtube.com/embed/Aw9iMiefP5s?si=AvQozhnuhYr_IMXw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </Fade>
                    </div>
                    <div className="w-full my-2 md:ps-36 md:w-1/2">
                        <h2 className='font-main mb-4 font-bold text-[25px] md:text-[32px]'>{t('custom-text.export')}</h2>
                        <p className='text-base my-20'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been </p>
                        <p className='text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        <MainButton text={t('navlinks.about_us')} className={'mt-6 rounded-lg text-[20px]'} nav />
                    </div>
                </div>
            </div>
        </section>
    </>
}
