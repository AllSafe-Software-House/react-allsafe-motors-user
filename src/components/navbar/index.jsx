import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import "./style.css";
import DropDown from "../dropDown";
import { FaRegUser } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import logo from '../../assets/logo.png'
import Search from "../search/inedx";

const navigation = [
  { name: "Home", nameAr: "الرئيسية", href: "/", id: 1 },
  { name: "About", nameAr: "من نحن", href: "/about", id: 2 },
];

export default function Navbar() {
  const { i18n } = useTranslation();
  const storedLanguage = JSON.parse(localStorage.getItem("lang")) || "en";
  const currentLanguage = i18n.language;

  useEffect(() => {
    const direction = i18n.dir(currentLanguage);
    document.body.setAttribute("dir", direction);
    console.log("currentLanguage: ", currentLanguage);
  }, [currentLanguage, i18n]);

  useEffect(() => {
    if (storedLanguage !== currentLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [storedLanguage, currentLanguage, i18n]);

  return (
    <>
      <nav className="hidden border-b-[1px] border-[#eeeeee33] bg-[#0088dd] py-3 sm:block">
        <div className="container flex flex-wrap items-center justify-between">
          <div className={`me-6 flex flex-shrink-0 items-center text-[10px]`}>
            <p className="text-[11px] text-[white]">
              WELCOME TO WOLMART STORE MESSAGE OR REMOVE IT!
            </p>
          </div>
          <div className="change-language flex items-center space-x-6 rtl:space-x-reverse">
            <a
              className={`text-[12px] ${
                currentLanguage === "ar" ? "border-r-" : "mr-1"
              } cursor-pointer dark:text-white`}
            >
              <DropDown />
            </a>
            <a href="#" className="text-[12px] text-white">
              Blog
            </a>
            <a href="#" className="text-[12px] text-white">
              Contact Us
            </a>
            <a href="#" className="text-[12px] text-white">
              My Account
            </a>
            <a href="#" className="flex items-center text-[12px] text-white">
              <FaRegUser
                className={`${currentLanguage === "ar" ? "ml-1" : "mr-1"}`}
              />{" "}
              Login / Register
            </a>
          </div>
        </div>
      </nav>
      <nav className="hidden border-b-[1px] bg-[#0088dd] py-3 sm:block">
        <div className="container flex flex-wrap items-center justify-between">
          <div className={`me-6 flex flex-shrink-0 items-center`}>
            <img
              alt="Your Company"
              src={logo}
              className="h-8 w-auto"
            />
          </div>
          <div className="searchInp"></div>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="tel:5541251234"
              className={`callUs flex items-center border-e-[1px] pe-6 text-sm text-white hover:underline`}
            >
              <IoCallOutline className={`me-2 text-4xl`} />
              <span>
                Call Us
                <br />
                <span className="font-bold">(555) 412-1234</span>
              </span>
            </a>
            <div className="wishlist text-sm">
              <Link
                to="/wishlist"
                className="flex flex-col items-center text-white"
              >
                <LuHeart className="text-3xl" />
                <span>Wishlist</span>
              </Link>
            </div>
            <div className="cart text-sm">
              <Link
                to="/cart"
                className="flex flex-col items-center text-white"
              >
                <FiShoppingCart className="text-3xl" />
                <span>Cart</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Disclosure as="nav" className="bg-white">
        <div className="container">
          <div className="relative flex h-16 items-center justify-between lg:w-[75%] ms-auto">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-6 w-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 group-data-[open]:block"
                />
              </DisclosureButton>
              <DropDown classes='!bg-black'/>  
            </div>
            
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              
              <div
                className={`hidden sm:${
                  currentLanguage === "en" ? "ml-6" : "mr-6"
                } sm:block`}
              >
                <div className="flex">
                  {navigation.map((item) => (
                    <NavLink
                      to={item.href}
                      key={item.id}
                      className={"rounded-md px-3 py-2 text-sm font-medium"}
                    >
                      {currentLanguage === "en" ? item.name : item.nameAr}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
            <div
              className={`absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ms-6 sm:pr-0`}
            >
              {/* Profile dropdown */}
              <Menu
                as="div"
                className={`relative ${
                  currentLanguage === "en" ? "ml-6" : "mr-6"
                }`}
              >
                <div>
                  <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="h-8 w-8 rounded-full"
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                    >
                      Your Profile
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                    >
                      Settings
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                    >
                      Sign out
                    </a>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Search/>
            
            {navigation.map((item) => (
              <NavLink
                to={item.href}
                key={item.id}
                className={"block rounded-md px-3 py-2 text-base font-medium"}
              >
                {currentLanguage === "en" ? item.name : item.nameAr}
              </NavLink>
            ))}
            <div className="flex items-center">
              <a
                href="tel:5541251234"
                className={`callUs flex items-center px-3 py-2 pe-6 text-sm text-black`}
              >
                <IoCallOutline className={`me-2 text-2xl lg:text-3xl`} />
                <span>
                  Call Us
                  <br />
                  <span className="font-bold">(555) 412-1234</span>
                </span>
              </a>
              <div className="wishlist px-3 py-2 text-sm">
                <Link to="/wishlist" className="flex items-center text-black">
                  <LuHeart className="me-2 text-2xl lg:text-3xl" />
                  <span>Wishlist</span>
                </Link>
              </div>
              <div className="cart px-3 py-2 text-sm">
                <Link to="/cart" className="flex items-center text-black">
                  <FiShoppingCart className="me-2 text-2xl lg:text-3xl" />
                  <span>Cart</span>
                </Link>
              </div>
            </div>
            <a
              className={`text-[12px] ${
                currentLanguage === "ar" ? "border-r-" : "mr-1"
              } cursor-pointer dark:text-black block w-full`}
            >
              <DropDown isSmall={true} />
            </a>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </>
  );
}
