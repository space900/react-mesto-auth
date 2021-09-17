import React from "react";

function PopupWithForm({ name, title, isOpen, onClose, buttonTitle, children, onSubmit }) {
  return (
    <section className={`popup popup_type_${name} ${isOpen ? "popup_is-opened" : ""}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name={`${name}_form`} onSubmit={onSubmit}>
          {children}
          <button
            className="popup__submit-btn popup__submit"
            type="submit"
            aria-label="Сохранить"
          >
            {buttonTitle}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
