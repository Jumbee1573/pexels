import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { IoIosSearch } from "react-icons/io";
import { withTranslation } from "react-i18next";
import { Redirect } from "react-router-dom";
import axios from "axios";
import store from "../../store";
import PropTypes from "prop-types";

import {
  RESET_CATEGORIES_DATA,
  AUTHORIZATION_KEY,
  SEARCH_URL,
  PER_PAGE,
  PER_PAGE_VALUE,
  PAGE,
  PAGE_VALUE
} from "../../constants";

import { searching, addCategoriesData } from "../../actions/actionCreator";

import "./SearchForm.scss";

class SearchForm extends Component {
  state = {
    searchValue: "",
    redirect: false
  };

  componentDidMount() {
    const { path, search } = this.props;
    if (path === "/categories") {
      this.setState({ searchValue: search });
    }
  }

  handleInputChange = ({ target: { value } }) => {
    this.setState({ searchValue: value });
  };

  searching = () => {
    const { searchValue } = this.state;
    const { addCategoriesData, searching, path } = this.props;
    if (searchValue.length >= 1) {
      searching(searchValue);
      store.dispatch({
        type: RESET_CATEGORIES_DATA
      });
      axios
        .get(
          `${SEARCH_URL}${searchValue}&${PER_PAGE}${PER_PAGE_VALUE}&${PAGE}${PAGE_VALUE}`,
          {
            headers: {
              Authorization: AUTHORIZATION_KEY
            }
          }
        )
        .then(({ data: { photos, page } }) => {
          if (path === "/categories") {
            addCategoriesData(photos, page);
          } else {
            addCategoriesData(photos, page);
            this.setState({ redirect: true });
          }
        });
    }
  };

  searchingOnEnter = ({ key }) => {
    if (key === "Enter") {
      this.searching();
    }
  };

  render() {
    const { searchValue, redirect } = this.state;
    const { meaning, t } = this.props;
    return (
      <div className="form__search">
        {redirect === true ? <Redirect to="/categories" /> : null}
        <input
          type="text"
          placeholder={t("inputPlaceholder")}
          onKeyPress={this.searchingOnEnter}
          onChange={this.handleInputChange}
          value={searchValue}
          className={
            meaning === "content"
              ? "form__search_input-content form-input"
              : "form__search_input form-input"
          }
        />
        <button
          onClick={this.searching}
          className={
            meaning === "content"
              ? "form__search_button-content form-button"
              : "form__search_button form-button"
          }
        >
          <IoIosSearch />
        </button>
      </div>
    );
  }
}

SearchForm.propTypes = {
  search: PropTypes.array,
  categories: PropTypes.array,
  searching: PropTypes.func,
  addCategoriesData: PropTypes.func,
  path: PropTypes.string,
  meaning: PropTypes.string
};

SearchForm.defaultProps = {
  search: [],
  categories: [],
  searching: () => {},
  addCategoriesData: () => {},
  path: "",
  meaning: ""
};

export default compose(
  connect(
    ({ search, categories }) => ({ search, categories }),
    { searching, addCategoriesData }
  ),
  withTranslation()
)(SearchForm);
