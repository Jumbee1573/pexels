import React, { Component, Suspense } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Spinner from "react-spinkit";
import Masonry from "react-masonry-css";
import { withTranslation } from "react-i18next";
import PropTypes from "prop-types";

import Menu from "../../components/Menu/Menu";
import PhotoItem from "../../components/PhotoItem/PhotoItem";

import {
  AUTHORIZATION_KEY,
  SEARCH_URL,
  PER_PAGE,
  PER_PAGE_VALUE,
  PAGE
} from "../../constants";

import { addCategoriesData } from "../../actions/actionCreator";

import "./Categories.scss";

class Categories extends Component {
  state = {
    isLoading: false,
    redirect: false
  };

  componentDidMount() {
    if (this.props.search === "") {
      this.setState({ redirect: true });
    }
    window.onscroll = () => {
      if (
        !this.state.isLoading &&
        document.documentElement.scrollHeight -
          document.documentElement.scrollTop ===
          document.documentElement.clientHeight
      ) {
        this.setState({ isLoading: true });
        this.loadMore();
      }
    };
  }

  loadMore = () => {
    const {
      addCategoriesData,
      categories: { page },
      search
    } = this.props;
    axios
      .get(
        `${SEARCH_URL}${search}&${PER_PAGE}${PER_PAGE_VALUE}&${PAGE}${page}`,
        {
          headers: {
            Authorization: AUTHORIZATION_KEY
          }
        }
      )
      .then(({ data: { photos, page } }) => {
        addCategoriesData(photos, page);
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { isLoading, redirect } = this.state;
    const {
      categories,
      search,
      match: { path },
      t
    } = this.props;
    const breakpointColumns = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1
    };

    console.log(search);
    return (
      <>
        {redirect === true ? <Redirect to="/" /> : null}
        <Suspense fallback={null}>
          <Menu thePosition={true} path={path} />
        </Suspense>
        <div className="categories__container">
          <div className="photos__top-title">
            <span className="photos__top-title_text">
              {t("categoriesTitle")} {search.length > 0 ? `"${search}"` : null}
            </span>
          </div>
          <div className="photos__wrapper">
            <Masonry
              breakpointCols={breakpointColumns}
              className="photos__masonry_grid"
              columnClassName="photos__masonry_grid-column"
            >
              {categories.photos.map(photos => (
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
  }
}

Categories.propTypes = {
  addCategoriesData: PropTypes.func,
  categories: PropTypes.object,
  search: PropTypes.string,
  match: PropTypes.object
};

Categories.defaultProps = {
  addCategoriesData: () => {},
  categories: {},
  search: "",
  match: {}
};

export default compose(
  connect(
    ({ categories, search }) => ({
      categories,
      search
    }),
    { addCategoriesData }
  ),
  withTranslation()
)(Categories);
