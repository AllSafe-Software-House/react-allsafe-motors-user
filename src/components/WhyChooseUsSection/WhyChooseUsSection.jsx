import React from 'react'
import { useTranslation } from 'react-i18next'
import daimond from '../../assets/images/f2.svg fill.png'
export default function WhyChooseUsSection() {
    const { t } = useTranslation('global')
    return <>
        <section className='py-16 text-white'>
            <div className="container">
                <h2 className='font-main mb-4 font-bold text-[25px] md:text-[32px]'>{t('custom-text.whyChooseUs')}</h2>
                <div className="flex flex-wrap items-center lg:gutter-x-4">
                    <div className='w-full my-2 md:w-1/2 px-2 lg:w-1/4'>
                        <img src={daimond} alt="crystal" className='mb-5' />
                        <h3 className='font-medium text-[20px]'>Special Financing Offers</h3>
                        <p className='pt-5'>Our stress-free finance department that can
                            find financial solutions to save you money.</p>
                    </div>
                    <div className='w-full my-2 md:w-1/2 px-2 lg:w-1/4'>
                        <img src={daimond} alt="crystal" className='mb-5' />
                        <h3 className='font-medium text-[20px]'>Special Financing Offers</h3>
                        <p className='pt-5'>Our stress-free finance department that can
                            find financial solutions to save you money.</p>
                    </div>
                    <div className='w-full my-2 md:w-1/2 px-2 lg:w-1/4'>
                        <img src={daimond} alt="crystal" className='mb-5' />
                        <h3 className='font-medium text-[20px]'>Special Financing Offers</h3>
                        <p className='pt-5'>Our stress-free finance department that can
                            find financial solutions to save you money.</p>
                    </div>
                    <div className='w-full my-2 md:w-1/2 px-2 lg:w-1/4'>
                        <img src={daimond} alt="crystal" className='mb-5' />
                        <h3 className='font-medium text-[20px]'>Special Financing Offers</h3>
                        <p className='pt-5'>Our stress-free finance department that can
                            find financial solutions to save you money.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
}
