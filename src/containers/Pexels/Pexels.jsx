import React, { Component, Suspense } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Spinner from "react-spinkit";

import {
  addResultData,
  background_photo_info
} from "../../actions/actionCreator";

import Photos from "../Photos/Photos";

import "./Pexels.scss";

class Pexels extends Component {
  state = {
    thePosition: false
  };

  onScroll = () => {
    if (window.scrollY > 50) {
      this.setState({ thePosition: true });
    } else {
      this.setState({ thePosition: false });
    }
  };

  componentDidMount() {
    const { background_photo_info } = this.props;
    const random = Math.floor(Math.random() * 1000) + 1;
    axios
      .get(`https://api.pexels.com/v1/curated?per_page=1&page=${random}`, {
        headers: {
          Authorization:
            "563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf"
        }
      })
      .then(({ data: { photos } }) => {
        background_photo_info(photos);
      });

    this.loadFunc();

    window.onscroll = () => {
      if (
        document.documentElement.scrollHeight -
          document.documentElement.scrollTop ===
        document.documentElement.clientHeight
      ) {
        this.loadFunc();
      }
    };

    window.addEventListener("scroll", this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
  }

  loadFunc = () => {
    const {
      addResultData,
      resultData: { page }
    } = this.props;
    axios
      .get(`https://api.pexels.com/v1/curated?per_page=15&page=${page}`, {
        headers: {
          Authorization:
            "563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf"
        }
      })
      .then(({ data: { photos, page } }) => {
        addResultData(photos, page);
      });
  };

  render() {
    const { thePosition } = this.state;
    const { resultData, backgroundPhotoInfo, likes } = this.props;
    return (
      <>
        <Suspense fallback={null}>
          <Photos
            backgroundPhotoInfo={backgroundPhotoInfo}
            resultData={resultData}
            thePosition={thePosition}
            likes={likes}
          />
        </Suspense>
        <div className="photos__loader">
          <Spinner name="three-bounce" />
        </div>
      </>
    );
  }
}

export default connect(
  ({ resultData, backgroundPhotoInfo, likes }) => ({
    resultData,
    backgroundPhotoInfo,
    likes
  }),
  { addResultData, background_photo_info }
)(Pexels);
