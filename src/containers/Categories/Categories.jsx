import React, { Component, Suspense } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import axios from "axios";
import Spinner from "react-spinkit";
import { withTranslation } from "react-i18next";

import Menu from "../../components/Menu/Menu";
import PhotoItem from "../../components/PhotoItem/PhotoItem";

import { addCategoriesData } from "../../actions/actionCreator";

import "./Categories.scss";

class Categories extends Component {
  componentDidMount() {
    window.onscroll = () => {
      if (
        document.documentElement.scrollHeight -
          document.documentElement.scrollTop ===
        document.documentElement.clientHeight
      ) {
        this.loadMore();
      }
    };
  }

  loadMore = () => {
    const { addCategoriesData, categories, search } = this.props;
    axios
      .get(
        `https://api.pexels.com/v1/search?query=${search}&per_page=15&page=${categories.page}`,
        {
          headers: {
            Authorization:
              "563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf"
          }
        }
      )
      .then(({ data: { photos, page } }) => {
        addCategoriesData(photos, page);
      });
  };

  render() {
    const {
      categories,
      search,
      match: { path },
      t
    } = this.props;

    return (
      <>
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
            {categories.photos.map(
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
        <div className="photos__loader">
          <Spinner name="three-bounce" />
        </div>
      </>
    );
  }
}

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
