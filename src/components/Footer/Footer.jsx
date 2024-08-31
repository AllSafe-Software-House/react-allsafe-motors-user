import React from 'react'
import { useTranslation } from 'react-i18next'
import { BsFuelPump } from 'react-icons/bs'
import { CiCalendarDate } from 'react-icons/ci'
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { GiGearStickPattern } from 'react-icons/gi'
import { IoIosPhonePortrait } from 'react-icons/io'
import { MdOutlineSpeed } from 'react-icons/md'
import { Link } from 'react-router-dom'
import MainButton from '../MainButton/MainButton'

export default function Footer({ prod = true }) {
    const { t } = useTranslation('global')
    const links = [
        { link: t("navlinks.home"), path: '/' },
        { link: t("navlinks.about_us"), path: '/about-us' },
        { link: t("navlinks.services"), path: '/services' },
        { link: t("navlinks.products"), path: '/vehicles' },
        { link: t("navlinks.contact_us"), path: '/contact-us' },
    ]
    return <div>
        {prod ? <section className='' style={{
            backgroundImage: `
                            url('https://s3-alpha-sig.figma.com/img/5527/067e/ca25aa7aee38985bbf7c9e6cc48514dc?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p7oWec74g7Ukf3Sie1fmoYS5zKUKrTn~yWNTv68ibeJsyrKamBwq~ymT67ovrjNoDf47jJ67VWk15d73YFOj6ch~~Wrn3KpQhPzzXIiKXkrLZftCXBwuO-PLGUllNmvSpsGEryawjlFIDIunILGBDBOBk2dmSKgeQABdEBKS3rRFbW2iBIUotXi6fggmLQfmUhRxDEy3SKn5FoVXsHf3CHBhQSyYFkxFJvjwRHCe~vzz1-fNETgy9~wGBcQysPIm6lg~OSdHi-8TMb7JrH777TGU8aMeua~ofhOZPUYDsX89LObzJ23U0Mux2aGSatarALQK9qjTZWOaiasjmmWedQ__')
                        `,
            backgroundSize: 'cover',
            backgroundPosition: '50% 50%',
        }}>
            <div className="container">
                <div className="flex flex-wrap items-center  min-h-[80vh]">
                    <div className='md:w-1/2'>
                        <h4 className='font-bold text-[20px] py-3 lg:text-[30px]'>$165,000</h4>
                        <h2 className='font-bold py-3 text-[30px] md:text-[40px] lg:text-[52px]'>Ranger Black –
                            2021</h2>
                        <Link to={'contact-us'}>
                            <MainButton nav className={"rounded-lg mt-4 py-3"} text={t('navlinks.contact_us')} />
                        </Link>
                    </div>
                    <div className='w-full my-4 md:w-fit ms-auto'>
                        <div className='bg-[#FFFFFF1A] rounded-xl p-8'>
                            <div className='flex items-center flex-wrap'>
                                <div className="w-1/2 my-2">
                                    <div className='text-center md:text-start'>
                                        <BsFuelPump className='text-[40px] mb-2 mx-auto md:mx-0' />
                                        <p className='font-medium'>Petrol</p>
                                    </div>
                                </div>
                                <div className="w-1/2 my-2">
                                    <div className='text-center md:text-start'>
                                        <GiGearStickPattern className='text-[40px] mb-2 mx-auto md:mx-0' />
                                        <p className='font-medium'>Manual</p>
                                    </div>
                                </div>
                                <div className="w-1/2 my-2">
                                    <div className='text-center md:text-start'>
                                        <CiCalendarDate className='text-[40px] mb-2 mx-auto md:mx-0' />
                                        <p className='font-medium'>2021</p>
                                    </div>
                                </div>
                                <div className="w-1/2 my-2">
                                    <div className='text-center md:text-start'>
                                        <MdOutlineSpeed className='text-[40px] mb-2 mx-auto md:mx-0' />
                                        <p className='font-medium'>250 Miles</p>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white mt-24 p-5 rounded-xl'>
                                <h5 className='text-black px-4 font-bold'>{t('custom-text.contact')}</h5>
                                <div className='mt-5 text-black border-[#E1E1E1] flex items-center py-3 px-4 border rounded-full'>
                                    <IoIosPhonePortrait className='text-black text-[25px]' />
                                    +201099999999
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> : null}
        <footer className="mx-auto w-full relative text-center bg-black text-white">
            <div className="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12">
                <h2 className="font-bold text-xl xl:text-2xl leading-snug">
                    Ready to find your perfect ride?<br />Explore our collection today.
                </h2>

                <Link to={'/contact-us'} className="mt-8 xl:mt-12 px-12 py-5 text-lg font-medium leading-tight inline-block bg-[#f00] rounded-full shadow-xl border border-transparent hover:bg-white hover:text-black duration-200" >{t('navlinks.contact_us')}</Link>
                <div className="mt-14 xl:mt-20">
                    <ul className='items-center mx-auto mb-10 flex justify-center'>
                        <li className='mx-7'>
                            <Link className="text-white font-semibold hover:text-[#FF0000] duration-[0.3s]" >
                                <FaFacebookF className='text-inherit text-[25px]' />
                            </Link>
                        </li>
                        <li className='mx-7'>
                            <Link className="text-white font-semibold hover:text-[#FF0000] duration-[0.3s]" >
                                <FaLinkedin className='text-inherit text-[25px]' />
                            </Link>
                        </li>
                        <li className='mx-7'>
                            <Link className="text-white font-semibold hover:text-[#FF0000] duration-[0.3s]" >
                                <FaInstagram className='text-inherit text-[25px]' />
                            </Link>
                        </li>
                    </ul>
                    <ul className='items-center mx-auto sm:flex justify-center'>
                        {links.map((link, i) =>
                            <li key={i} className='mx-7 my-5'>
                                <Link className="text-white font-semibold hover:text-[#FF0000] duration-[0.3s]" to={link.path}>{link.link}</Link>
                            </li>
                        )}
                    </ul>
                    <p className="mt-7 inline-block text-base">© 2024 <a href="https://www.allsafeeg.com/en" target='_blank' className='text-blue-600 inline underline'>All Safe.com.</a> All rights reserved.</p>
                </div>
            </div>
        </footer>

    </div>
}
