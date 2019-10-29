import React, { useState, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "../../i18n";

import Logo from "../../images/logo.png";
import Ru from "../../images/ru.png";
import En from "../../images/en.png";

import SearchForm from "../../containers/SearchForm/SearchForm";

import "./Menu.scss";

const Menu = ({ thePosition }) => {
  const [language, changeLanguage] = useState("en");
  const { i18n } = useTranslation();

  return (
    <div className={thePosition ? "menu menu__transparent" : "menu"}>
      <div className="menu__container">
        <div className="menu__container_item">
          <Link className="menu__navigation" to="/">
            <img className="menu__navigation_img" src={Logo} alt="Pexels" />
            <span className="menu__navigation_title">Pexels</span>
          </Link>
          {thePosition ? (
            <div className="menu__search-wrapper">
              <Suspense fallback={null}>
                <SearchForm nameClass="menu__search" />
              </Suspense>
            </div>
          ) : null}
        </div>
        <div className="menu__container_item">
          <button
            onClick={
              language === "en"
                ? () => {
                    changeLanguage("ru");
                    i18n.changeLanguage("ru");
                  }
                : () => {
                    changeLanguage("en");
                    i18n.changeLanguage("en");
                  }
            }
            className="menu__language_trigger"
          >
            <img
              className="menu__language"
              src={language === "en" ? En : Ru}
              alt="Language"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
