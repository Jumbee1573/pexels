import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";

import HeaderBackground from "../../components/HeaderBackground/HeaderBackground";
import PhotoItem from "../../components/PhotoItem/PhotoItem";
import Menu from "../../components/Menu/Menu";

import "../../i18n";

import "./Photos.scss";

const Photos = ({ resultData, thePosition, backgroundPhotoInfo, likes }) => {
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
            ({ id, photographer, photographer_url, src: { original } }) =>
              likes.indexOf(id) !== -1 ? (
                <PhotoItem
                  photographer={photographer}
                  photographer_url={photographer_url}
                  original={original}
                  id={id}
                  key={id}
                  like={true}
                />
              ) : (
                <PhotoItem
                  photographer={photographer}
                  photographer_url={photographer_url}
                  original={original}
                  id={id}
                  key={id}
                  like={false}
                />
              )
          )}
        </div>
      </div>
    </>
  );
};

export default Photos;
