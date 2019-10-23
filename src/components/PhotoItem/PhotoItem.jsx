import React from "react";

import { FiPlusCircle, FiHeart } from "react-icons/fi";

import "./PhotoItem.scss";

const PhotoItem = ({ photographer_url, photographer, original }) => (
  <div className="photos__item">
    <img src={original} alt={photographer} className="photos__item_image" />
    <a href={photographer_url} className="photographer__name">
      {photographer}
    </a>
    <div className="photographer__info">
      <button className="photographer__info_collection">
        <FiPlusCircle />
      </button>
      <button className="photographer__info_like">
        <FiHeart />
      </button>
    </div>
  </div>
);

export default PhotoItem;
