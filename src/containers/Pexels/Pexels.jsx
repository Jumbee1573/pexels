import React, { useState, useEffect, Suspense } from "react";
import axios from "axios";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroller";

import {
  addResultData,
  background_photo_info
} from "../../actions/actionCreator";

import Photos from "../Photos/Photos";

import { data } from "../../data";

import "./Pexels.scss";

const Pexels = ({
  addResultData,
  background_photo_info,
  resultData,
  backgroundPhotoInfo
}) => {
  //   const [page, changePage] = useState(
  //     "https://api.pexels.com/v1/curated?per_page=15&page=1"
  //   );
  const [thePosition, changePosition] = useState(false);

  const onScroll = () => {
    if (window.scrollY > 50) {
      changePosition(true);
    } else {
      changePosition(false);
    }
  };

  useEffect(() => {
    const random = Math.floor(Math.random() * 1000) + 1;
    axios
      .get(`https://api.pexels.com/v1/curated?per_page=1&page=${random}`, {
        headers: {
          Authorization:
            "563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf"
        }
      })
      .then(res => {
        const {
          photographer,
          photographer_url,
          src: { original }
        } = res.data.photos[0];
        background_photo_info({
          photographer,
          photographer_url,
          original
        });
      });

    window.addEventListener("scroll", onScroll, false);
    return () => {
      window.removeEventListener("scroll", onScroll, false);
    };
  });

  const loadFunc = () => {
    data.map(({ id, photographer, photographer_url, src: { original } }) =>
      addResultData({ id, photographer, photographer_url, original })
    );
    // axios
    //   .get(`${this.state.page}`, {
    //     headers: {
    //       Authorization:
    //         "563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf"
    //     }
    //   })
    //   .then(res => {
    //     res.data.photos.map(
    //       ({ id, photographer, photographer_url, src: { original } }) =>
    //         addResultData({ id, photographer, photographer_url, original })
    //     );
    //     changePage(res.data.next_page);
    //   });
  };
  return (
    <>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadFunc}
        hasMore={true || false}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        <Suspense fallback={null}>
          <Photos
            backgroundPhotoInfo={backgroundPhotoInfo}
            data={resultData}
            thePosition={thePosition}
          />
        </Suspense>
      </InfiniteScroll>
    </>
  );
};

export default connect(
  ({ resultData, backgroundPhotoInfo }) => ({
    resultData,
    backgroundPhotoInfo
  }),
  { addResultData, background_photo_info }
)(Pexels);
