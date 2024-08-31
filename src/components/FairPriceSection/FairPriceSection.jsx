import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { useTranslation } from 'react-i18next'
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import MainButton from '../MainButton/MainButton';

export default function FairPriceSection({ data }) {
    const { t } = useTranslation('global');
    return <>
        <section className='py-16 relative text-white'>
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-20">
                    <div className='w-full my-2'>
                        <div className='flex flex-wrap gutter-x-6 items-start'>
                            <div className='w-1/2'>
                                <div className='w-full h-1/2 mb-10'>
                                    <Fade direction='up' className='h-full'>
                                        <img src={data?.Images[0]} className='w-full h-full object-cover' alt="img" />
                                    </Fade>
                                </div>
                                <div className='h-1/2'>
                                    <Fade direction='up' delay={200} className='w-full'>
                                        <img src={data?.Images[1]} className='w-full h-full ps-16 object-cover mt-10' alt="img" />
                                    </Fade>
                                </div>
                            </div>
                            <div className='w-1/2 px-6'>
                                <div>
                                    <Fade delay={400}>
                                        <img src={data?.Images[2]} alt="pic" className='w-full' />
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full my-2'>
                        <div className='prose'>
                            <Fade>
                                <h2 className='font-main mb-4 font-bold text-[20px] md:text-[32px]'>{data?.Title}</h2>
                                <p className='text-base my-14'>{data?.Description}</p>
                                <ul className='mt-8 list-none'>
                                    <li className='flex items-center my-4'>
                                        <FaCheck />
                                        <p className='ms-4 text-base md:text-[18px] lg:text-[20px]'>We are the UK’s largest provider, with more patrols in more places</p>
                                    </li>
                                    <li className='flex items-center my-4'>
                                        <FaCheck />
                                        <p className='ms-4 text-base md:text-[18px] lg:text-[20px]'>We are the UK’s largest provider, with more patrols in more places</p>
                                    </li>
                                    <li className='flex items-center my-4'>
                                        <FaCheck />
                                        <p className='ms-4 text-base md:text-[18px] lg:text-[20px]'>We are the UK’s largest provider, with more patrols in more places</p>
                                    </li>
                                </ul>
                                <div className='pt-10'>
                                    <Link to={'/vehicles'}>
                                        <MainButton className={'rounded-lg py-4 text-[18px]'} text={t('custom-text.getStarted')} nav={true} />
                                    </Link>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}
