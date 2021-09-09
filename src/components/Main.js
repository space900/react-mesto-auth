import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

import Card from "./Card";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <img
          onClick={props.onEditAvatar}
          src={currentUser.avatar}
          alt="аватар пользователя"
          className="profile__picture"
        />
        <div className="info">
          <h1 className="info__title">{currentUser.name}</h1>
          <button
            onClick={props.onEditProfile}
            className="info__edit-btn"
            aria-label="Редактировать"
            type="button"
          ></button>
          <p className="info__subtitle">{currentUser.about}</p>
        </div>
        <button
          onClick={props.onAddPlace}
          className="profile__btn"
          aria-label="Добавить"
          type="button"
        ></button>
      </section>

      <section className="photo-grid">
        <ul className="photo-grid__list">
          {props.cards.map((card) => {
            return (
              <Card
                key={card._id}
                card={card}
                onCardClick={props.onCardClick}
                onCardLike={props.onCardLike}
                onCardDelete={props.onCardDelete}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
