import React from "react";

import SearchForm from "../../containers/SearchForm/SearchForm";

import Background from "../../images/background.jpeg";

import "./HeaderBackground.scss";

const HeaderBackground = () => (
  <div className="header__background">
    <div className="header__content">
      <h1 className="header__content_title">
        The best free stock photos & videos shared by talented creators
      </h1>
      <SearchForm placeholder="Search for free photos" meaning="content" />
    </div>
    <div className="header__background_image-wrapper">
      <img
        src={Background}
        alt="Background"
        className="header__background_image"
      />
    </div>
  </div>
);

export default HeaderBackground;
