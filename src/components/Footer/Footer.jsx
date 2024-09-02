import React, { useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { BsFuelPump } from 'react-icons/bs'
import { CiCalendarDate } from 'react-icons/ci'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaTiktok } from 'react-icons/fa';
import { GiGearStickPattern } from 'react-icons/gi'
import { IoIosPhonePortrait } from 'react-icons/io'
import { MdOutlineSpeed } from 'react-icons/md'
import { Link } from 'react-router-dom'
import MainButton from '../MainButton/MainButton'
import { useDispatch, useSelector } from 'react-redux'
import { TranslateContext } from '../../context/TranslateContext'
import { fetchFooterData } from '../../redux/slices/footerSlice'
import { fetchContactUsData } from '../../redux/slices/contactSlice'

export default function Footer({ prod = true }) {
    let { footerData, error } = useSelector(({ footerData }) => footerData);
    const { arLang } = useContext(TranslateContext);
    console.log(footerData?.data);
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchFooterData())
        if (error) {
        }
    }, [])
    useEffect(() => {
        dispatch(fetchFooterData())
    }, [arLang])

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
                            url('${footerData?.data?.lastsection[0]?.Images[0]}')
                        `,
            backgroundSize: 'cover',
            backgroundPosition: '50% 50%',
        }}>
            <div className="container">
                <div className="flex flex-wrap items-center  min-h-[80vh]">
                    <div className='md:w-1/2'>
                        <h4 className='font-bold text-[20px] py-3 lg:text-[30px]'>{footerData?.data?.lastsection[0]?.Price}</h4>
                        <h2 className='font-bold py-3 text-[30px] md:text-[40px] lg:text-[52px]'>{footerData?.data?.lastsection[0]?.Title}</h2>
                        <Link className='inline-block' to={'contact-us'}>
                            <MainButton nav className={"rounded-lg mt-4 py-3"} text={t('navlinks.contact_us')} />
                        </Link>
                    </div>
                    <div className='w-full my-4 md:w-fit ms-auto'>
                        <div className='bg-[#00000069] rounded-xl p-8'>
                            <div className='flex items-center flex-wrap'>
                                {footerData?.data?.lastsection[0]?.Attributes?.map((attr, i) =>
                                    attr.Key !== 'colors' && (
                                        <div key={i} className="w-1/2 my-2">
                                            <div className='flex items-center'>
                                                {attr.Key === 'fuel' ? <BsFuelPump className='text-[40px] mb-2 mx-auto md:mx-0' />
                                                    : attr.Key === 'Speed' ? <MdOutlineSpeed className='text-[40px] mb-2 mx-auto md:mx-0' />
                                                        : attr.Key === 'transmission' ? <GiGearStickPattern className='text-[40px] mb-2 mx-auto md:mx-0' />
                                                            : attr.Key === 'year' ? <CiCalendarDate className='text-[40px] mb-2 mx-auto md:mx-0' />
                                                                : null}
                                                <p className='font-medium'>{attr.Value}</p>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> : null}
        <footer className="mx-auto w-full relative text-center bg-black text-white">
            <div className="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12">
                <h2 className="font-bold sm:w-1/2 lg:w-1/3 mx-auto text-xl xl:text-2xl leading-snug">
                    {footerData?.data?.messagefooter}
                </h2>

                <Link to={'/contact-us'} className="mt-8 xl:mt-12 px-12 py-5 text-lg font-medium leading-tight inline-block bg-[#f00] rounded-full shadow-xl border border-transparent hover:bg-white hover:text-black duration-200" >{t('navlinks.contact_us')}</Link>
                <div className="mt-14 xl:mt-20">
                    <ul className='items-center mx-auto mb-10 flex justify-center'>
                        {footerData?.data?.socailmedia?.map((social, i) => (
                            <li key={i} className='mx-7'>
                                <Link
                                    to={social.value}
                                    className="text-white font-semibold hover:text-[#FF0000] duration-[0.3s]"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {social.key === 'Facebook' && <FaFacebookF className='text-inherit text-[25px]' />}
                                    {social.key === 'Instagram' && <FaInstagram className='text-inherit text-[25px]' />}
                                    {social.key === 'Linkedin' && <FaLinkedin className='text-inherit text-[25px]' />}
                                    {social.key === 'Twitter' && <FaTwitter className='text-inherit text-[25px]' />}
                                    {social.key === 'TikTok' && <FaTiktok className='text-inherit text-[25px]' />}
                                </Link>
                            </li>
                        ))}
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
