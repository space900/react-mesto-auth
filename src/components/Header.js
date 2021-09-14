import React from "react";
import logo from "../../src/images/logo_header.svg";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../utils/constants";

function Header(props) {
  // const location = useLocation();
  return (
    <header className="header">
      {/* <Link to={routes.root} className="header__link"> */}
        <img src={logo} alt="логотип Место" className="header__logo" />
      {/* </Link> */}
    </header>
  );
}

export default Header;
