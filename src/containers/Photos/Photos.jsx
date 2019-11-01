import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";

import "../../i18n";

import HeaderBackground from "../../components/HeaderBackground/HeaderBackground";
import PhotoItem from "../../components/PhotoItem/PhotoItem";
import Menu from "../../components/Menu/Menu";

import "./Photos.scss";

const Photos = ({ resultData, thePosition, backgroundPhotoInfo }) => {
  const { t } = useTranslation();
  return (
    <>
      <Suspense fallback={null}>
        <Menu thePosition={thePosition} />
      </Suspense>
      <Suspense fallback={null}>
        <HeaderBackground backgroundPhotoInfo={backgroundPhotoInfo} />
      </Suspense>
      <div className="photos__container">
        <div className="photos__top-title">
          <span className="photos__top-title_text">{t("contentTitle")}</span>
        </div>
        <div className="photos__wrapper">
          {resultData.photos.map(
            ({ id, photographer, photographer_url, src: { original } }) => (
              <PhotoItem
                photographer={photographer}
                photographer_url={photographer_url}
                original={original}
                id={id}
                key={id}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Photos;
