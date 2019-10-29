import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { MODAL_DROPDOWN } from "../../constants";

import { FaAngleDown } from "react-icons/fa";
import { FiPlusCircle, FiHeart } from "react-icons/fi";

import "./ModalInner.scss";

const ModalInner = ({ photographer, original, id, photographer_url }) => {
  const [value, changeValue] = useState("");

  const onChangeDownloadInput = ({ target: { value } }) => {
    changeValue(value);
  };
  const { t } = useTranslation();
  return (
    <>
      <div className="modal__inner">
        <div className="modal__image-wrapper">
          <img src={original} alt={photographer} className="modal__image" />
        </div>
        <div className="modal__right-bar">
          <div className="modal__photo_download">
            <div className="modal__right_item">
              <div className="modal__button-group">
                <a
                  href={`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?&h=200&w=280&cs=srgb&dl=image-${id}.jpg&fm=jpg`}
                  download
                  target="blank"
                  className="modal__download_button"
                >
                  <span>{t("freeDownload")}</span>
                </a>
                <div className="modal__dropdown">
                  <div className="modal__dropdown_icon">
                    <FaAngleDown />
                  </div>
                  <div className="modal__dropdown_list">
                    <span className="modal__dropdown_title">
                      {t("chooseSize")}
                    </span>
                    {MODAL_DROPDOWN.map(
                      ({
                        liClassName,
                        labelClassName,
                        inputDataName,
                        inputName,
                        inputType,
                        inputValue,
                        inputClassName,
                        spanClassName,
                        spanSizeName,
                        spanSizeValue
                      }) => (
                        <div
                          className={liClassName}
                          key={`${inputDataName}${spanSizeValue}`}
                        >
                          <label className={labelClassName}>
                            <input
                              key={`${inputDataName}${spanSizeValue}`}
                              data-name={inputDataName}
                              name={inputName}
                              type={inputType}
                              value={inputValue}
                              className={inputClassName}
                              onChange={onChangeDownloadInput}
                            />
                            <span className={spanClassName}>
                              <strong>{t(`${spanSizeName}`)}</strong>{" "}
                              {spanSizeValue}
                            </span>
                          </label>
                        </div>
                      )
                    )}
                    <div className="modal__dropdown_item">
                      <a
                        href={`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?${value}&cs=srgb&dl=image-${id}.jpg&fm=jpg`}
                        download
                        className="modal__dropdown_button"
                      >
                        {t("freeDownload")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal__photo_info">
            <button className="modal__photo_like modal__photo_button">
              <FiHeart />
            </button>
            <button className="modal__photo_collection modal__photo_button">
              <FiPlusCircle />
            </button>
          </div>
          <a
            href={photographer_url}
            className="modal__photo_author"
            target="blank"
          >
            {photographer}
          </a>
        </div>
      </div>
    </>
  );
};

export default ModalInner;
