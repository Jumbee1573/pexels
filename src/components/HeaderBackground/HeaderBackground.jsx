import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";

import SearchForm from "../../containers/SearchForm/SearchForm";

import "./HeaderBackground.scss";

const HeaderBackground = ({ backgroundPhotoInfo }) => {
  const { t } = useTranslation();
  return (
    <div className="header__background">
      <div className="header__content">
        <h1 className="header__content_title">{t("headerTitle")}</h1>
        <Suspense fallback={null}>
          <SearchForm meaning="content" />
        </Suspense>
      </div>
      <div className="header__background_image-wrapper">
        <img
          src={
            backgroundPhotoInfo.length > 0
              ? backgroundPhotoInfo[0].original
              : null
          }
          alt="Background"
          className="header__background_image"
        />
      </div>
      <div className="header__background_footer">
        <span className="header__background_author">
          <a
            href={
              backgroundPhotoInfo.length > 0
                ? backgroundPhotoInfo[0].photographer_url
                : "https://www.pexels.com/"
            }
            target="blank"
            className="header__background_author-link"
          >
            {backgroundPhotoInfo.length > 0
              ? backgroundPhotoInfo[0].photographer
              : null}
          </a>
        </span>
      </div>
    </div>
  );
};

export default HeaderBackground;
