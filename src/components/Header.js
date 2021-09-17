import React from "react";
import logo from "../../src/images/logo_header.svg";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../utils/constants";

function Header(props) {
  const location = useLocation();
  return (
    <header className="header">
      <img src={logo} alt="логотип Место" className="header__logo" />
      {location.pathname === "/sign-in" && (
        <Link to={routes.register} className="header__link">
          Регистрация
        </Link>
      )}

      {location.pathname === "/sign-up" && (
        <Link to={routes.login} className="header__link">
          Войти
        </Link>
      )}
      {props.loggedIn && (
        <div className="header__user">
          <p className="header__email">{props.email}</p>
          <button onClick={props.onSignOut} className="header__button" type="button">
            Выйти
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
