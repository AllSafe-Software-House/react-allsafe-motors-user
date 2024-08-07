import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems
} from "@headlessui/react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./style.css";

export default function DropDownLanguage({ isSmall,classes }) {
  console.log('className: ', classes);
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

  const changeLanguage = (lng) => {
    localStorage.setItem("lang", JSON.stringify(lng));
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <select
        className={`main-select ${classes} ${isSmall && "small"} w-full`}
        onChange={(e) => changeLanguage(e.target.value)}
        value={currentLanguage}
      >
        <option value="" disabled>
          Select
        </option>
        <option value="ar">
          {currentLanguage === "en" ? "Arabic" : "العربية"}
        </option>
        <option value="en">
          {currentLanguage === "en" ? "English" : "الانجليزية"}
        </option>
      </select>
    </>
  );
}


export const DropDownProfile = ({ currentLanguage }) => {
  return (
    <div
      className={`absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ms-6 sm:pr-0`}
    >
      <Menu
        as="div"
        className={`relative ${currentLanguage === "en" ? "ml-6" : "mr-6"}`}
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
          className="absolute ${currentLanguage == 'ar' ? 'right-0' : 'left-0'} right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
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
  );
};

DropDownLanguage.propTypes = {
  isSmall: PropTypes.bool,
  classes: PropTypes.any,
};

DropDownProfile.propTypes = {
  currentLanguage: PropTypes.any,
};