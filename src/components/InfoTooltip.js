import failed_icon from "../images/failed_icon.svg";
import success_icon from "../images/success_icon.svg";

function InfoTooltip(props) {
  return (
    <div className={`popup ${props.isOpen && "popup_is-opened"}`}>
      <div className="popup__container popup__container_type_status">
        <button
          className="popup__close"
          aria-label="Закрыть"
          type="button"
          onClick={props.onClose}
        />
        <img
          className="popup__icon"
          src={props.status ? success_icon : failed_icon}
          alt={props.status ? "Иконка успешная регистрация" : "Иконка ошибка при регистрации"}
        />
        <p className="popup__heading">
          {props.status
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте ещё раз."}
        </p>
      </div>
    </div>
  );
}

export default InfoTooltip;
