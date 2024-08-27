import React from 'react'
import { useTranslation } from 'react-i18next'
import { TbCarSuv } from 'react-icons/tb';

export default function ExploreSection() {
    const { t } = useTranslation('global');
    return <>
        <section className='py-10 text-white'>
            <div className="container">
                <h2 className='font-main mb-4 font-bold text-[25px] md:text-[32px]'>{t('custom-text.exploreTitle')}</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 flex-wrap">
                    <div className='w-full my-2'>
                        <div className='bg-[#121212] rounded-lg p-7'>
                            <div className='text-center'>
                                <TbCarSuv className='mx-auto text-[30px]' />
                                <p className='text-[20px]'>SUV</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full my-2'>
                        <div className='bg-[#121212] rounded-lg p-7'>
                            <div className='text-center'>
                                <TbCarSuv className='mx-auto text-[30px]' />
                                <p className='text-[20px]'>SUV</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full my-2'>
                        <div className='bg-[#121212] rounded-lg p-7'>
                            <div className='text-center'>
                                <TbCarSuv className='mx-auto text-[30px]' />
                                <p className='text-[20px]'>SUV</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full my-2'>
                        <div className='bg-[#121212] rounded-lg p-7'>
                            <div className='text-center'>
                                <TbCarSuv className='mx-auto text-[30px]' />
                                <p className='text-[20px]'>SUV</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full my-2'>
                        <div className='bg-[#121212] rounded-lg p-7'>
                            <div className='text-center'>
                                <TbCarSuv className='mx-auto text-[30px]' />
                                <p className='text-[20px]'>SUV</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full my-2'>
                        <div className='bg-[#121212] rounded-lg p-7'>
                            <div className='text-center'>
                                <TbCarSuv className='mx-auto text-[30px]' />
                                <p className='text-[20px]'>SUV</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}
