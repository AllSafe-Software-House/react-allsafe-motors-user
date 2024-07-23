import { useEffect } from "react";
import "./style.css";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

export default function DropDown({isSmall}) {
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
        className={`main-select ${isSmall && 'small'}`}
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


DropDown.propTypes = {
  isSmall: PropTypes.bool,
};
