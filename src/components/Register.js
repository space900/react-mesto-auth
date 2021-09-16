import React from "react";
import { routes } from "../utils/constants";
import { Link, withRouter } from "react-router-dom";

function Register(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onRegistration(email, password);
    setEmail("");
    setPassword("");
  }

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
  }

  return (
    <div className="entry">
      <h2 className="popup__title popup__title_authorization">Регистрация</h2>
      <form className="popup__form popup__form_authorization" onSubmit={handleSubmit}>
        <input
          required={true}
          onChange={handleEmailChange}
          value={email}
          type="email"
          className="popup__text popup__text_authorization"
          placeholder="Email"
          minLength="8"
          maxLength="40"
        />
        <input
          required={true}
          onChange={handlePasswordChange}
          value={password}
          type="password"
          className="popup__text popup__text_authorization"
          placeholder="Пароль"
        />
        <button type="submit" className="popup__submit popup__submit_authorization">
          Зарегистрироваться
        </button>
        <p className="popup__register">
          Уже зарегистрированы?{" "}
          <Link className="popup__link" to={routes.login}>
            Войти
          </Link>
        </p>
      </form>
    </div>
  );
}

export default withRouter(Register);
