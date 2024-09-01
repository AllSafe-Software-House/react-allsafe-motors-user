import React, { useEffect, useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import { useTranslation } from 'react-i18next'
import MainButton from '../components/MainButton/MainButton'
import left from '../assets/images/VectorL.png'
import right from '../assets/images/VectorR.png'
import Loading from '../components/Loading/Loading'
export default function VehicleForm() {
    const { t } = useTranslation('global')
    const [selectedOption, setSelectedOption] = useState('option1')

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value)
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return <main>
        {isLoading? <Loading/> : <>
        <section className='pb-28 pt-56 relative'>
            <img src={right} className='absolute right-0 top-0 z-[-1]' alt="vector" />
            <img src={left} className='absolute left-0 bottom-0 z-[-1]' alt="vector" />
            <div className="container">
                <div className="flex flex-wrap">
                    <div className='lg:w-1/2 px-2'>
                        <Fade className='w-full h-full' duration={1200}>
                            <img src='https://s3-alpha-sig.figma.com/img/5e04/709e/6424eb18f47268bd197a88c3bc96dff5?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UQWyaX3~FEgarfsuc5-~sMs2AFORFVmTvHQ6zyscLzqp6fbd7fsPEWVb-p-1c-Fah3l4x-L3za4uKznRgVDtMt0YxSpBgJwVnvaJIlopELQ90t5qd2-Kt-7UzDPjaEytJrfUXxBBTHK8bwPzsatvxpicJRPqhJPMU4NFYYvJszo1bEPogBONJ8FyRNw7i2Uk6LwPrI6K4ROTe2WrgnYbG80oM6x~FfsaIQEtz7uaMoOa-I1QaEZOBY47bYi7JjT6OesG4f3YW~3QLVjqk~VEqB13Gj8VkzNo~nIbdCC6cZY7VuCVt~7JUqmhoClTgHdVoz88wQ98e7Lc4WvlZzmzwQ__' className='w-full h-full rounded-xl' alt="chair" />
                        </Fade>
                    </div>
                    <div className='lg:w-1/2 overflow-hidden px-2'>
                        <select
                            onChange={handleOptionChange}
                            name='confirm'
                            className="my-1 bg-black border-[#FFFFFF33] border py-2 px-4 outline-none rounded-lg w-full"
                        >
                            <option value={''} className='hover:bg-red-500' disabled selected>{t('placeholders.payment')}</option>
                            <option value={'option1'} className='hover:bg-red-500' >{t('payment.allSafe')}</option>
                            <option value={'option2'} className='hover:bg-red-500'>{t('payment.natural')}</option>
                            <option value={'option3'} className='hover:bg-red-500'>{t('payment.cash')}</option>
                        </select>
                        <div className='border-b px-4 mt-3 content'>
                            {selectedOption === 'option1' ? <>
                                <h2 className='text-[20px] font-medium'>{t('payment.allSafe')}</h2>
                                <p className='my-2'>{t('payment.allSafeText')}</p>
                            </> : selectedOption === 'option2' ? <>
                                <h2 className='text-[20px] font-medium'>{t('payment.natural')}</h2>
                                <p className='my-2'>{t('payment.naturalText')}</p>
                            </> : <>
                                <h2 className='text-[20px] font-medium'>{t('payment.cash')}</h2>
                                <p className='my-2'>{t('payment.cashText')}</p>
                            </>}
                        </div>
                        <form className='mt-10'>
                            <Fade direction='up' delay={400}>
                                <div className='flex flex-wrap items-center'>
                                    <div className='w-full px-2 my-3 lg:w-1/2'>
                                        <div>
                                            <input
                                                type="text"
                                                name='fname'
                                                placeholder={t('placeholders.first_name')}
                                                className="my-1 bg-[#FFFFFF0D] border-[#FFFFFF33] border py-2 px-4 outline-none rounded-lg w-full"
                                            />
                                        </div>
                                    </div>
                                    <div className='w-full px-2 my-3 lg:w-1/2'>
                                        <div>
                                            <input
                                                type="text"
                                                name='lname'
                                                placeholder={t('placeholders.last_name')}
                                                className=" my-1 bg-[#FFFFFF0D] border-[#FFFFFF33] border py-2 px-4 outline-none rounded-lg w-full"
                                            />
                                        </div>
                                    </div>
                                    <div className='w-full px-2 my-3'>
                                        <div>
                                            <input
                                                type="email"
                                                name='email'
                                                placeholder={t('placeholders.email')}
                                                className=" my-1 bg-[#FFFFFF0D] border-[#FFFFFF33] border py-2 px-4 outline-none rounded-lg w-full"
                                            />
                                        </div>
                                    </div>
                                    <div className='w-full px-2 my-3'>
                                        <div>
                                            <input
                                                type="text"
                                                name='phone'
                                                placeholder={t('placeholders.phonenumber')}
                                                className=" my-1 bg-[#FFFFFF0D] border-[#FFFFFF33] border py-2 px-4 outline-none rounded-lg w-full"
                                            />
                                        </div>
                                    </div>
                                    <div className='w-full px-2 my-3'>
                                        <div>
                                            <input
                                                type="text"
                                                name='message'
                                                placeholder={t('placeholders.address')}
                                                className=" my-1 bg-[#FFFFFF0D] border-[#FFFFFF33] border py-2 px-4 outline-none rounded-lg w-full"
                                            />
                                        </div>
                                    </div>
                                    <div className='w-full px-2 my-3'>
                                        <div>
                                            <select
                                                name='confirm'
                                                className="my-1 bg-black border-[#FFFFFF33] border py-2 px-4 outline-none rounded-lg w-full"
                                            >
                                                <option value={''} disabled selected>{t('placeholders.complete')}</option>
                                                <option value={'yes'}>{t('placeholders.yes')}</option>
                                                <option value={'no'}>{t('placeholders.no')}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='w-full px-2 mt-7'>
                                        <MainButton text={t('placeholders.submit')} className={'justify-center rounded-lg w-full'} submit />
                                    </div>
                                </div>
                            </Fade>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        
        </>}
    </main>
}
