import React from "react";
import { withRouter } from "react-router-dom";

function Login(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onLogin(email, password);
  }

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
  }

  return (
    <div className="entry">
      <h2 className="popup__title popup__title_authorization">Вход</h2>
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
          Войти
        </button>
      </form>
    </div>
  );
}

export default withRouter(Login);
