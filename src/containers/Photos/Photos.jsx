import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import Masonry from "react-masonry-css";
import Spinner from "react-spinkit";

import HeaderBackground from "../../components/HeaderBackground/HeaderBackground";
import PhotoItem from "../../components/PhotoItem/PhotoItem";
import Menu from "../../components/Menu/Menu";

import "../../i18n";

import "./Photos.scss";

const Photos = ({
  resultData,
  thePosition,
  backgroundPhotoInfo,
  isLoading
}) => {
  const { t } = useTranslation();
  const breakpointColumns = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };
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
          <Masonry
            breakpointCols={breakpointColumns}
            className="photos__masonry_grid"
            columnClassName="photos__masonry_grid-column"
          >
            {resultData.photos.map(photos => (
              <PhotoItem photos={photos} key={photos.id} />
            ))}
          </Masonry>
          {isLoading === true ? (
            <div className="photos__loader">
              <Spinner name="three-bounce" />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

Photos.propTypes = {
  resultData: PropTypes.object,
  backgroundPhotoInfo: PropTypes.object,
  likes: PropTypes.array,
  thePosition: PropTypes.bool
};

Photos.defaultProps = {
  resultData: {},
  backgroundPhotoInfo: {},
  likes: [],
  thePosition: false
};

export default Photos;
