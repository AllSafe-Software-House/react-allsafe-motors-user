import React from 'react'
import { useTranslation } from 'react-i18next'
import { BsFuelPump } from 'react-icons/bs'
import { CiCalendarDate } from 'react-icons/ci'
import { GiGearStickPattern } from 'react-icons/gi'
import { MdArrowOutward, MdOutlineSpeed } from 'react-icons/md'
import { Link } from 'react-router-dom'
import stars from '../../assets/images/stars.png'
import MainButton from '../MainButton/MainButton'
export default function CustomCard({ image, name, disc, price, serv = false, id, attrs, brand }) {
    const { t } = useTranslation('global')
    return <>
        {serv ?
            <div style={{
                backgroundImage: `
                  linear-gradient(rgb(46 51 90 / 65%) 0%, rgb(28 27 51 / 34%) 100%), radial-gradient(146.13% 118.42% at 50% -15.5%, rgb(255 255 255 / 25%) 0%, rgba(255, 255, 255, 0) 99.59%),
                  url('${stars}')
                `,
            }} className='p-5 border-[#414246] border rounded-lg overflow-hidden'>
                <div>
                    <img src={image} className='w-full h-[120px] rounded-lg object-cover' alt={name} />
                </div>
                <div className='py-4'>
                    <h4 className='font-medium text-[20px]'>{name}</h4>
                    <p className='text-[15px] py-2'>{disc}</p>
                </div>
                <Link to={`service-Details/${id}`}>
                    <MainButton text={t('custom-text.explore')} nav className={'bg-transparent rounded-md border border-[#414246] '} />
                </Link>
            </div>
            : <div className='border-white hover:scale-105 duration-300 border flex justify-between flex-col rounded-lg overflow-hidden'>
                <Link to={`/vehicles/vehicle-details/${id}`} className='group'>
                    <div>
                        <img src={image} className='w-full' alt={name} />
                    </div>
                    <div className='p-5'>
                        <p className='text-[14px]'>{brand}</p>
                        <h4 className='font-medium text-[20px]'>{name}</h4>
                        <p className='text-[15px] py-2'>{disc}</p>
                        <div className='flex items-center flex-wrap'>
                            {attrs?.map((attr, i) => (
                                (attr.Key !== 'colors' && attr.Key !== 'اللون') && (
                                    <div key={i} className="w-1/2 my-2">
                                        <div className='flex items-center'>
                                            {attr.Key === 'fuel' || attr.Key === 'الوقود' ? <BsFuelPump className='text-[25px] me-2' />
                                                : attr.Key === 'Speed' || attr.Key === 'السرعه' ? <MdOutlineSpeed className='text-[25px] me-2' />
                                                    : attr.Key === 'transmission' || attr.Key === 'التحكم' ? <GiGearStickPattern className='text-[25px] me-2' />
                                                        : attr.Key === 'year' || attr.Key === 'السنه' ? <CiCalendarDate className='text-[25px] me-2' />
                                                            : null}
                                            {attr.Value}
                                        </div>
                                    </div>
                                )
                            ))}

                        </div>
                        <div className='mt-2 flex items-center justify-between pt-5 border-t border-white'>
                            <h4 className='text-base font-bold'>{price}</h4>
                            <Link to={'/vehicles/vehicle-details'} className='flex text-[#f00]'>
                                {t('custom-text.viewAll')}
                                <MdArrowOutward className='ms-2 group-hover:rotate-45 duration-150 text-[22px]' />
                            </Link>
                        </div>
                    </div>
                </Link>
            </div>}
    </>
}
