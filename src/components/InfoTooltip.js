import failed_icon from "../images/failed_icon.svg";
import success_icon from "../images/success_icon.svg";

function InfoTooltip(props) {
  return (
    <div className={`popup ${props.isOpen && "popup_is-opened"}`}>
      <div className="popup__container">
        <img
          className="popup__icon"
          src={props.isSuccess ? success_icon : failed_icon}
          alt={
            props.isSuccess ? "Иконка успешная регистрация" : "Иконка ошибка при регистрации"
          }
        />
        <p className="popup__heading">
          {props.isSuccess
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте ещё раз."}
        </p>
      </div>
    </div>
  );
}

export default InfoTooltip;
