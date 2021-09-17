import React, { useRef } from "react";

function ImagePopup({ card, onClose }) {
  const imageFallbackContainer = useRef(null);

  return (
    <div className={`popup ${card.link ? "popup_is-opened" : ""}`}>
      <figure className="popup__position" ref={imageFallbackContainer}>
        <button
          className="popup__close popup__close_photo popup__close_image"
          aria-label="Закрыть"
          type="button"
          onClick={onClose}
        ></button>
        <img
          src={`${card.link}`}
          alt={`${card.name}`}
          className="popup__image"
          //   onLoad={e => {
          //     imageFallbackContainer.current.style.width = ${e.target.offsetWidth}px
          //     imageFallbackContainer.current.style.height = ${e.target.offsetHeight}px
          //   }}
        />
        <p className="popup__caption">{`${card.name}`}</p>
      </figure>
    </div>
  );
}

export default ImagePopup;
