import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { CiSearch } from 'react-icons/ci';
import { HiBars3BottomLeft } from "react-icons/hi2";
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/All Safe Motors png.webp';
import { menuContext } from '../../context/SideMenuContext';
import { TranslateContext } from '../../context/TranslateContext';
import SideBar from '../SideBar/SideBar.jsx';
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
                                <img src={logo} className='w-[100px]' alt="All safe motors" />
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