import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../images/logo.png";
// import Ru from "../../images/ru.png";
import En from "../../images/en.png";

import SearchForm from "../../containers/SearchForm/SearchForm";

import "./Menu.scss";

const Menu = ({ thePosition }) => (
  <div className={thePosition ? "menu menu__transparent" : "menu"}>
    <div className="menu__container">
      <div className="menu__container_item">
        <Link className="menu__navigation" to="/">
          <img className="menu__navigation_img" src={Logo} alt="Pexels" />
          <span className="menu__navigation_title">Pexels</span>
        </Link>
        {thePosition ? (
          <div className="menu__search-wrapper">
            <SearchForm
              placeholder="Search for free photos"
              nameClass="menu__search"
            />
          </div>
        ) : null}
      </div>
      <div className="menu__container_item">
        <button className="menu__language_trigger">
          <img className="menu__language" src={En} alt="Language" />
        </button>
      </div>
    </div>
  </div>
);

export default Menu;
