import React from 'react'
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next'
import { MdArrowOutward } from 'react-icons/md';
import { Link } from 'react-router-dom';
import svg from '../../assets/images/SVG.png'
import lol from '../../assets/images/Group 773975265.png'
export default function ServicesSection({ data }) {
    const { t } = useTranslation('global');
    return <>
        <section className='py-16'>
            <div className="container">
                <div className='flex justify-between'>
                    <Fade direction='up'>
                        <h3 className='text-[18px] md:text-[22px] lg:text-[32px] font-bold'>{t('custom-text.ourServices')}</h3>
                    </Fade>
                    <Fade direction='up' delay={200}>
                        <Link to={'/services'} className='flex group'>
                            {t('custom-text.viewAll')}
                            <MdArrowOutward className='ms-2 group-hover:rotate-45 duration-150 text-[22px]' />
                        </Link>
                    </Fade>
                </div>
                <div className="flex mt-10 flex-wrap  items-center">
                    {data?.map((serv) =>
                        <div key={serv.ID} className="w-full md:w-1/2 lg:w-1/4 px-3 my-3">
                            <Fade>
                                <img src={svg} className='mb-2' alt="logo" />
                                <p className='font-medium py-2 text-[18px] md:text-[20px]'>{serv.Title}</p>
                                <p className=''>{serv.Description}</p>
                            </Fade>
                        </div>
                    )}
                </div>
            </div>
        </section>
    </>
}
