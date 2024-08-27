import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { HiBars3BottomLeft } from "react-icons/hi2";
import { Link, NavLink } from 'react-router-dom';
import SideBar from '../SideBar/SideBar.jsx';
import { menuContext } from '../../context/SideMenuContext';
import { TranslateContext } from '../../context/TranslateContext';
import { CiSearch } from 'react-icons/ci';
function Navbar() {
    const { t } = useTranslation("global");
    const { handelChangeLang, arLang } = useContext(TranslateContext);
    const { setIsMenuOpen } = useContext(menuContext);
    const links = [
        { link: t("navlinks.home"), path: '/' },
        { link: t("navlinks.about_us"), path: '/about-us' },
        { link: t("navlinks.services"), path: '/services' },
        { link: t("navlinks.products"), path: '/vehicles' },
        { link: t("navlinks.contact_us"), path: '/contact-us' },
    ]
    const lang = localStorage.getItem('lang')
    return <>
        <SideBar />
        <header className='fixed w-full z-[9999]'>
            <nav className='py-5 absolute w-full font-Poppins bg-transparent backdrop-blur-md'>
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="logo">
                            <Link to={'/'}>
                                <img src="https://s3-alpha-sig.figma.com/img/c9dd/63b5/15ab00969e33794e08e612177e09d4bf?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UGKJtJl7p-8JBpkncoWxiC-vtDWCEI0DLOGP81BfaRmCbsFu2yKA1L0rCeWcMJnSaQmkrl1J~m6zTXZ7UytT3-JtyghTw2XmVFyGEhx3kWzUXlwge55zI3UgcQOgHdH5vYZQt3Annooi9B2-oSSXf8eJ8FlR3UkuxLuH0DrPGLklD-F2h3WxuogzJ-y2SRXJ-BjTDnu9Obk1mkJ5k8pSdeCtO6poA7WusCYk8~QutSiHc90heTiluu6bSdWFZZtS7ckyeLqcf1ON~ej9asiFZ5K4iXRIRcS-AViehkgBENG5x3kj5h9vAE1iKSnW4F~qAYqUGyCpGcge2LoJ7a9wXQ__" className='w-[100px]' alt="AL-Baqari Motors" />
                            </Link>
                        </div>
                        <ul className='items-center hidden lg:flex'>
                            {links.map((link, i) =>
                                <li key={i} className='mx-7'>
                                    <NavLink className="text-white font-semibold hover:text-[#FF0000] duration-[0.3s]" to={link.path}>{link.link}</NavLink>
                                </li>
                            )}
                        </ul>
                        <div className='flex items-center'>
                            {lang == 'ar' ? <span onClick={() => handelChangeLang("en")} className='text-[#BDCADB] me-6 hidden lg:inline cursor-pointer font-semibold hover:text-[#FF0000] duration-[0.3s]'>EN</span> :
                                <span onClick={() => handelChangeLang("ar")} className='text-[#BDCADB] me-6 cursor-pointer hidden lg:inline font-semibold hover:text-[#FF0000] duration-[0.3s]'>AR</span>
                            }
                            <Link to={'/vehicles'}>
                                <CiSearch className='text-white text-[25px] hidden lg:block'/>
                            </Link>
                        </div>
                        <HiBars3BottomLeft onClick={() => setIsMenuOpen(true)} className='text-white text-[45px] lg:hidden mx-5 cursor-pointer' />
                    </div>
                </div>
            </nav>
        </header>
    </>
}

export default Navbar;