import React, { Component } from "react";

import { MODAL_DROPDOWN } from "../../constants";

import { FaAngleDown } from "react-icons/fa";
import { FiPlusCircle, FiHeart } from "react-icons/fi";

import "./ModalInner.scss";

class ModalInner extends Component {
  state = {
    value: ""
  };

  onChangeDownloadInput = ({ target: { value } }) => {
    this.setState({ value: value });
  };

  onSubmitDownloadForm = e => {
    e.preventDefault();
  };

  render() {
    const { photographer, original, id, photographer_url } = this.props;
    const { value } = this.state;
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
                    <span>Free Download</span>
                  </a>
                  <div className="modal__dropdown">
                    <div className="modal__dropdown_icon">
                      <FaAngleDown />
                    </div>
                    <form
                      onSubmit={this.onChangeDownloadForm}
                      className="modal__dropdown_list"
                    >
                      <span className="modal__dropdown_title">
                        Choose a size:
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
                                onChange={this.onChangeDownloadInput}
                              />
                              <span className={spanClassName}>
                                <strong>{spanSizeName}</strong> {spanSizeValue}
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
                          Free Download
                        </a>
                      </div>
                    </form>
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
  }
}

export default ModalInner;
