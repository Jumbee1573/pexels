import React, { Component } from "react";

import Navbar from "../../components/Navbar/Navbar";

import "./Categories.scss";

class Categories extends Component {
  render() {
    const { thePosition } = this.props;
    return (
      <>
        <Navbar thePosition={thePosition} />
        <div className="categories__container">categories</div>
      </>
    );
  }
}

export default Categories;
