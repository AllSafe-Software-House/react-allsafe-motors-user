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

    return <>
        <SideBar />
        <header className='fixed w-full z-[9999]'>
            <nav className='py-5 absolute w-full font-Poppins bg-transparent backdrop-blur-md'>
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="logo">
                            <Link to={'/'}>
                                <img src="https://s3-alpha-sig.figma.com/img/c9dd/63b5/15ab00969e33794e08e612177e09d4bf?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N4c9LVt3ljQR5Zc4Ex7MavD5Yk-EjkBh6eScot8keZlkvU9-Ndn85v~Q9soJTQGNfolG4LYXPv5xPjf4C~eWU~X-tsVpKelL2rGWAemgVgF~LNRzHxiMuKbt4FXZsLsNz4G-2x9IDCOs2hWURl6N8HhSu7BLC50ZIGzJhDg4xwbRDmycKmVC4LtPqR42jOUbfyKoJpSRBwyN3ACedJ-Fyl3g2Wa2oN-Gi9CogK45JE0IvmMWYzPliPrJT3v9hFdcV9SfsGHn4b8GagBxqDIrKYtkjTQVq543M55ZduKXlRkHVquk3ED1e1or3weE3aJ0khgIhIEHeTI83ru09uO6Gw__" className='w-[100px]' alt="AL-Baqari Motors" />
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
                            {arLang ? <span onClick={() => handelChangeLang("en")} className='text-[#BDCADB] me-6 hidden lg:inline cursor-pointer font-semibold hover:text-[#FF0000] duration-[0.3s]'>EN</span> :
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