import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({ name, about: description });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="editProfile"
      buttonTitle="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="popup__nickname"
        type="text"
        placeholder="Имя"
        name="name"
        className="popup__text popup__text_field_nickname popup__text_input"
        minLength="2"
        maxLength="40"
        required
        value={name || ""}
        onChange={handleChangeName}
      />
      <span className="popup__nickname-error popup__text-input"></span>
      <input
        id="popup__job"
        type="text"
        placeholder="О себе"
        name="job"
        className="popup__text popup__text_field_job popup__text_input"
        minLength="2"
        maxLength="200"
        required
        value={description || ""}
        onChange={handleChangeDescription}
      />
      <span className="popup__job-error popup__text-input"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
