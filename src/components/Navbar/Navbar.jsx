import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../images/logo.png";

import SearchForm from "../../containers/SearchForm/SearchForm";

import "./Navbar.scss";

const Navbar = ({ thePosition }) => (
  <div className={thePosition ? "navbar navbar__transparent" : "navbar"}>
    <div className="navbar__container">
      <div className="navbar__container_item">
        <Link className="navbar__navigation" to="/">
          <img className="navbar__navigation_img" src={Logo} alt="Pexels" />
          <span className="navbar__navigation_title">Pexels</span>
        </Link>
        {thePosition ? (
          <div className="navbar__search-wrapper">
            <SearchForm
              placeholder="Search for free photos"
              nameClass="navbar__search "
            />
          </div>
        ) : null}
      </div>
      <div className="navbar__container_item">Language</div>
    </div>
  </div>
);

export default Navbar;
