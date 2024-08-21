import React, { useContext } from 'react';
import { TranslateContext } from '../../context/TranslateContext';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { menuContext } from '../../context/SideMenuContext';
function SideBar() {
  const { t } = useTranslation("global");
  const { handelChangeLang, arLang } = useContext(TranslateContext);
  const { isMenuOpen, setIsMenuOpen } = useContext(menuContext);
  const links = [
    { link: t("navlinks.home"), path: '/' },
    { link: t("navlinks.about_us"), path: '/about-us' },
    { link: t("navlinks.services"), path: '/services' },
    { link: t("navlinks.products"), path: '/vehicles' },
    { link: t("navlinks.contact_us"), path: '/contact-us' },
  ]
  return <>
    <div className={`slidBar right-[-150%] skew-x-[12deg] duration-[0.7s] fixed ${isMenuOpen ? 'menu-active' : ''} w-full h-full z-[99999] bg-[#fff]`}>
      <dir>
        <IoMdClose onClick={() => setIsMenuOpen(false)} className={`text-black text-[50px] mx-5 cursor-pointer ml-auto`} />
      </dir>
      <ul className='flex mt-28 flex-col items-center justify-between h-2/3'>
        {links.map((link, i) =>
          <li key={i} onClick={()=> setIsMenuOpen(false)} className='mx-7'>
            <NavLink className="text-black text-[45px] font-semibold  duration-[0.3s]" to={link.path}>{link.link}</NavLink>
          </li>
        )}
        <li className='mx-7'>
          {arLang ? <span  onClick={() => {handelChangeLang("en"); setIsMenuOpen(false)}} className='text-[#000] text-[45px] cursor-pointer font-semibold duration-[0.3s]'>English</span> :
            <span onClick={() => {handelChangeLang("ar"); setIsMenuOpen(false)}} className='text-[#000] text-[45px] cursor-pointer font-semibold duration-[0.3s]'>العربية</span>
          }
        </li>
      </ul>
    </div>
  </>
}

export default SideBar;