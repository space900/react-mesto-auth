import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [photoName, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  React.useEffect(() => {
    setName("");
    setLink("");
  }, [props.isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({ photoName, link });
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="addCard"
      buttonTitle="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="popup__photo-name"
        type="text"
        placeholder="Название"
        name="photoName"
        className="popup__text popup__text_field_name popup__text_input"
        minLength="2"
        maxLength="30"
        value={photoName || ""}
        onChange={handleChangeName}
      />
      <span className="popup__photo-name-error popup__text-input"></span>
      <input
        id="popup__link"
        type="url"
        placeholder="Ссылка на картинку"
        name="link"
        className="popup__text_field_link popup__text popup__text_input"
        value={link || ""}
        onChange={handleChangeLink}
      />
      <span className="popup__link-error popup__text-input"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
