import React, { Component } from "react";
// import axios from "axios";
import { Switch, Route } from "react-router-dom";

import Menu from "../../components/Menu/Menu";
import Categories from "../Categories/Categories";

import { data } from "../../data";

import "./Pexels.scss";
import Photos from "../Photos/Photos";

class Pexels extends Component {
  state = {
    // result: [],
    thePosition: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll, false);

    // axios
    //   .get(`https://api.pexels.com/v1/curated?per_page=15&page=1`, {
    //     headers: {
    //       Authorization:
    //         "563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf"
    //     }
    //   })
    //   .then(res => {
    //     this.setState({ result: res });
    //   });
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
    // console.log(this.state.result);
    // console.log(data);
    return (
      <>
        <Menu thePosition={thePosition} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Photos data={data} thePosition={thePosition} />}
          />
          <Route
            path="/categories"
            render={() => <Categories data={data} thePosition={true} />}
          />
        </Switch>
      </>
    );
  }
}

export default Pexels;
