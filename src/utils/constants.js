export const initialCards = [];

// настройки для валидации
// export const settings = {
//   formSelector: ".popup__form",
//   inputSelector: ".popup__text_input",
//   submitButtonSelector: ".popup__submit",
//   inactiveButtonClass: "popup__submit_disabled",
//   inputErrorClass: "popup__text_invalid",
//   errorClass: "`${inputElement.id}-error`",
// };

// роуты
export const routes = {
  register: "/sign-up",
  login: "/sign-in",
  root: "/",
};

// базовый URL
export const defaultUrl = "https://auth.nomoreparties.co";

// попапы
export const popupType = {
  popupAddCard: ".popup_cards",
  popupEditProfile: ".popup_texts",
  popupImage: ".popup_photo",
  popupChangeAvatar: ".popup_avatar",
};

// переменные
export const popupCardLinkInput = document.querySelector(".popup__text_field_link");
export const popupCardNameInput = document.querySelector(".popup__text_field_name");
export const userInfoTitle = ".info__title";
export const userInfoSubtitle = ".info__subtitle";
export const profileAvatar = ".profile__picture";
export const profileAvatarButton = document.querySelector(".profile__picture");
export const gridList = ".photo-grid__list";
export const popupPhoto = document.querySelector(".popup_photo");
// export const popupImage = popupPhoto.querySelector(".popup__image");
// export const popupImageCaption = popupPhoto.querySelector(".popup__caption");
export const cardTemplateSelector = ".photo-grid__list-template";
export const editProfileForm = document.querySelector(".popup_texts");
export const addCardModal = document.querySelector(".popup_cards");
// export const addCardForm = addCardModal.querySelector(".popup__form");
export const openPopupEditProfileButton = document.querySelector(".info__edit-btn");
export const openPopupAddCardButton = document.querySelector(".profile__btn");
export const closeButtonProfile = document.querySelector(".popup__close_texts");
export const closeButtonCard = document.querySelector(".popup__close_cards");
export const closeButtonPhoto = document.querySelector(".popup__close_image");
export const nameInput = document.querySelector(".popup__text_field_nickname");
export const jobInput = document.querySelector(".popup__text_field_job");
export const changeProfileAvatar = document.querySelector(".popup_avatar");
export const submitDeletePopup = document.querySelector(".popup_delete");
