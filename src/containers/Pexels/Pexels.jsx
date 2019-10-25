import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
// import { Switch, Route } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroller";

import { addResultData } from "../../actions/actionCreator";

// import Categories from "../Categories/Categories";
import Photos from "../Photos/Photos";

// import { data } from "../../data";

import "./Pexels.scss";

class Pexels extends Component {
  state = {
    page: `https://api.pexels.com/v1/curated?per_page=15&page=1`,
    result: [],
    thePosition: false
  };

  loadFunc = () => {
    const { addResultData } = this.props;
    // console.log(data[0].id);
    // addResultData({
    //   id: "werqwerq",
    //   photographer: "qwerqwe",
    //   photographer_url: "qwerqwer",
    //   origin: "qwerqwer"
    // });

    // data.map(({ id, photographer, photographer_url, src: { original } }) =>
    //   addResultData({ id, photographer, photographer_url, original })
    // );

    axios
      .get(`${this.state.page}`, {
        headers: {
          Authorization:
            "563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf"
        }
      })
      .then(res => {
        res.data.photos.map(
          ({ id, photographer, photographer_url, src: { original } }) =>
            addResultData({ id, photographer, photographer_url, original })
        );
        this.setState({
          page: res.data.next_page
        });
      });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
  }
  onScroll = () => {
    if (window.scrollY > 50) {
      this.setState({ thePosition: true });
    } else {
      this.setState({ thePosition: false });
    }
  };
  render() {
    const { thePosition } = this.state;
    const { resultData } = this.props;
    console.log(this.state);
    return (
      <>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadFunc}
          hasMore={true || false}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
        >
          <Photos data={resultData} thePosition={thePosition} />
          {/* 
            <Switch>
              <Route
                exact
                path="/"
                render={() =>
                    <Photos
                      data={this.state.result.data.photos}
                      thePosition={thePosition}
                    />
                  )
                }
              />
              <Route
            path="/categories"
            render={() => <Categories data={data} thePosition={true} />}
          />
            </Switch>
          */}
        </InfiniteScroll>
      </>
    );
  }
}

export default connect(
  ({ resultData }) => ({ resultData }),
  { addResultData }
)(Pexels);
