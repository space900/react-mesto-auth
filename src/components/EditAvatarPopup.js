import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const inputValue = React.useRef();

  React.useEffect(() => {
    inputValue.current.value = "";
  }, [props.isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({ avatar: inputValue.current.value });
    // inputValue.current.value = "";
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      buttonTitle="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="popup__avatar-name"
        type="url"
        placeholder="Ссылка на аватар"
        name="avatar"
        className="popup__text popup__text_field_name popup__text_input"
        required
        ref={inputValue}
      />
      <span className="popup__avatar-name-error popup__text-input"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
