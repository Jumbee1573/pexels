import React, { Component } from "react";

import Menu from "../../components/Menu/Menu";
import PhotoItem from "../../components/PhotoItem/PhotoItem";

import "./Categories.scss";

class Categories extends Component {
  render() {
    const { thePosition, data } = this.props;
    return (
      <>
        <Menu thePosition={thePosition} />
        <div className="categories__container">
          <div className="photos__top-title">
            <span className="photos__top-title_text">
              Best searching photos
            </span>
          </div>
          <div className="photos__wrapper">
            {data.map(
              ({
                id,
                photographer,
                photographer_id,
                photographer_url,
                src: { landscape, original },
                url
              }) => (
                <PhotoItem
                  photographer={photographer}
                  photographer_url={photographer_url}
                  original={original}
                />
              )
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Categories;
