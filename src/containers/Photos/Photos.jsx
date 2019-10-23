import React, { Component } from "react";

import HeaderBackground from "../../components/HeaderBackground/HeaderBackground";
import PhotoItem from "../../components/PhotoItem/PhotoItem";
import Navbar from "../../components/Navbar/Navbar";

import "./Photos.scss";

class Photos extends Component {
  render() {
    const { data, thePosition } = this.props;
    return (
      <>
        <Navbar thePosition={thePosition} />
        <HeaderBackground />
        <div className="photos__container">
          <div className="photos__top-title">
            <span className="photos__top-title_text">Free Stock Photos</span>
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

export default Photos;
