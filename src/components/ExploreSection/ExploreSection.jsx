import React from 'react'
import { useTranslation } from 'react-i18next'
import { TbCarSuv } from 'react-icons/tb';

export default function ExploreSection({ data }) {
    const { t } = useTranslation('global');
    return <>
        <section className='py-10 text-white'>
            <div className="container">
                <h2 className=' mb-4 font-bold text-[25px] md:text-[32px]'>{t('custom-text.exploreTitle')}</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 flex-wrap">
                    {data?.map((brand =>
                        <div key={brand.ID} className='w-full my-2'>
                            <div className='bg-[#121212] hover:bg-black hover:border-white border border-transparent duration-200 rounded-lg p-7'>
                                <div className='text-center'>
                                    <img src={brand.ImagePath} height={30} width={30} className='mx-auto' alt={brand.Name} />
                                    <p className='text-[20px]'>{brand.Name}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    </>
}
