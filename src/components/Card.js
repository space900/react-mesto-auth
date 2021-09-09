import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;

  const cardDeleteButtonClassName = `photo-grid__delete-btn ${
    isOwn ? "photo-grid__delete-btn_visible" : "photo-grid__delete-btn_hide"
  }`;

  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `photo-grid__like-btn ${
    isLiked && "photo-grid__like-btn_active"
  }`;

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteCard() {
    onCardDelete(card);
  }

  return (
    <li className="photo-grid__card">
      <img
        src={`${card.link}`}
        alt={`${card.name}`}
        className="photo-grid__image"
        onClick={handleClick}
      />
      <button
        className={cardDeleteButtonClassName}
        aria-label="Удалить"
        type="button"
        onClick={handleDeleteCard}
      ></button>
      <h3 className="photo-grid__title">{card.name}</h3>
      <div className="photo-grid__like-container">
        <button
          className={cardLikeButtonClassName}
          aria-label="Лайк"
          type="button"
          onClick={handleLikeClick}
        />
        <h4 className="photo-grid__like-count">{card.likes.length}</h4>
      </div>
    </li>
  );
}

export default Card;
