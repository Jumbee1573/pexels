import React, { Component } from "react";

import HeaderBackground from "../../components/HeaderBackground/HeaderBackground";
import PhotoItem from "../../components/PhotoItem/PhotoItem";
import Menu from "../../components/Menu/Menu";

import "./Photos.scss";

class Photos extends Component {
  render() {
    const { data, thePosition } = this.props;
    console.log(this.props);
    return (
      <>
        <Menu thePosition={thePosition} />
        <HeaderBackground />
        <div className="photos__container">
          <div className="photos__top-title">
            <span className="photos__top-title_text">Free Stock Photos</span>
          </div>
          <div className="photos__wrapper">
            {data.map(({ id, photographer, photographer_url, original }) => (
              <PhotoItem
                photographer={photographer}
                photographer_url={photographer_url}
                original={original}
                id={id}
                key={id}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Photos;
