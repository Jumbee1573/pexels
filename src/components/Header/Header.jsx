import React from "react";

import Navbar from "../Navbar/Navbar";

import "./Header.scss";

const Header = ({ thePosition }) => (
  <>
    <Navbar thePosition={thePosition} />
  </>
);

export default Header;
