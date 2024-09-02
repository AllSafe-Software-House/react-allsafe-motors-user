import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { useTranslation } from 'react-i18next';
import { MdArrowOutward } from 'react-icons/md'
import { Link } from 'react-router-dom'
import CustomCard from '../CustomCard/CustomCard';

export default function VehiclesSection({ data }) {
    const { t } = useTranslation('global');
    console.log(data)
    return <>
        <section className='py-16'>
            <div className="container">
                <div className='flex justify-between'>
                    <Fade direction='up'>
                        <h3 className='text-[18px] md:text-[22px] lg:text-[32px] font-bold'>{t('custom-text.exportV')}</h3>
                    </Fade>
                    <Fade direction='up' delay={200}>
                        <Link to={'/vehicles'} className='flex group'>
                            {t('custom-text.viewAll')}
                            <MdArrowOutward className='ms-2 group-hover:rotate-45 duration-150 text-[22px]' />
                        </Link>
                    </Fade>
                </div>
                <div className="flex flex-wrap mt-3 items-center">
                    {data?.map((car =>
                        <div key={car.ID} className="w-full px-2 my-3 md:w-1/2 lg:w-1/4">
                            <CustomCard id={car.ID} name={car.Title} disc={car.Description} attrs={car?.Attributes} price={car.Price} image={car.Images[0]} />
                        </div>
                    ))}

                </div>
            </div>
        </section>
    </>
}
