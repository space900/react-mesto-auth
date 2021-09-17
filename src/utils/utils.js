// улучшенный UX форм
export function renderLoading(isLoading, popup) {
  if (isLoading) {
    popup.querySelector(".popup__submit_save-btn").textContent = "Сохранение...";
  } else {
    if (popup.classList.contains("popup_cards")) {
      popup.querySelector(".popup__submit_save-btn").textContent = "Создать";
    } else if (popup.classList.contains("popup_delete")) {
      popup.querySelector(".popup__submit_save-btn").textContent = "Да";
    } else {
      popup.querySelector(".popup__submit_save-btn").textContent = "Сохранить";
    }
  }
}

export const nameInput = document.querySelector(".popup__text_field_nickname");
export const jobInput = document.querySelector(".popup__text_field_job");
