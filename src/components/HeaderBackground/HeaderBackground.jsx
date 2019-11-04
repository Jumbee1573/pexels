import React, { Suspense, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import axios from "axios";
import store from "../../store";
import PropTypes from "prop-types";

import SearchForm from "../../containers/SearchForm/SearchForm";

import { searching, addCategoriesData } from "../../actions/actionCreator";

import {
  SEARCH_HELP,
  RESET_CATEGORIES_DATA,
  AUTHORIZATION_KEY,
  SEARCH_URL,
  PER_PAGE,
  PER_PAGE_VALUE,
  PAGE,
  PAGE_VALUE
} from "../../constants";

import "./HeaderBackground.scss";

const HeaderBackground = ({
  backgroundPhotoInfo: { photos },
  searching,
  addCategoriesData
}) => {
  const [suggested, addSuggested] = useState([]);
  const [redirect, redirecting] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const shuffled = SEARCH_HELP.sort(() => {
      return 0.5 - Math.random();
    }).slice(0, 7);
    addSuggested(shuffled);
  }, []);

  const handleHelpClick = ({
    currentTarget: {
      dataset: { id }
    }
  }) => {
    searching(id);
    store.dispatch({
      type: RESET_CATEGORIES_DATA
    });
    axios
      .get(
        `${SEARCH_URL}${id}&${PER_PAGE}${PER_PAGE_VALUE}&${PAGE}${PAGE_VALUE}`,
        {
          headers: {
            Authorization: AUTHORIZATION_KEY
          }
        }
      )
      .then(({ data: { photos, page } }) => {
        addCategoriesData(photos, page);
        redirecting(true);
      });
  };

  return (
    <div className="header__background">
      {redirect === true ? <Redirect to="/categories" /> : null}
      <div className="header__content">
        <h1 className="header__content_title">{t("headerTitle")}</h1>
        <Suspense fallback={null}>
          <SearchForm meaning="content" />
        </Suspense>
        <div className="header__help-wrapper">
          <ul className="header__help">
            <li className="header__suggested">
              {t("suggested")}
              <span className="header__suggested_title">:</span>
            </li>
            <li>
              <ul className="header__help-list">
                {suggested.map((item, index) => (
                  <li
                    key={index}
                    className="header__help-list_item"
                    onClick={handleHelpClick}
                    data-id={item}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="header__background_image-wrapper">
        <img
          src={photos.length > 0 ? photos[0].src.original : null}
          alt="Background"
          className="header__background_image"
        />
      </div>
      <div className="header__background_footer">
        <span className="header__background_author">
          <a
            href={
              photos.length > 0
                ? photos[0].photographer_url
                : "http://localhost:3000/"
            }
            target="blank"
            className="header__background_author-link"
          >
            {photos.length > 0 ? photos[0].photographer : null}
          </a>
        </span>
      </div>
    </div>
  );
};

HeaderBackground.propTypes = {
  backgroundPhotoInfo: PropTypes.array,
  search: PropTypes.string,
  categories: PropTypes.array,
  searching: PropTypes.func,
  addCategoriesData: PropTypes.func
};

HeaderBackground.defaultProps = {
  backgroundPhotoInfo: [],
  search: "",
  categories: [],
  searching: () => {},
  addCategoriesData: () => {}
};

export default connect(
  ({ search, categories }) => ({ search, categories }),
  { searching, addCategoriesData }
)(HeaderBackground);
