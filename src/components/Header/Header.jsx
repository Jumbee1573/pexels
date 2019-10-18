import React from "react";

import Navbar from "../Navbar/Navbar";
import HeaderBackground from "../HeaderBackground/HeaderBackground";

import "./Header.scss";

const Header = ({ thePosition }) => (
  <>
    <Navbar thePosition={thePosition} />
    <HeaderBackground placeholder="Search for free photos" />
  </>
);

export default Header;
