import React from "react";
// import {withRouter} from 'react-router-dom';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { Route, Switch, useHistory, Redirect, withRouter } from "react-router-dom";
import api from "../utils/Api";
import { routes } from "../utils/constants";
import Login from "./Login";
import * as auth from "../utils/auth";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ProtectedRoute from "./ProtectedRoute";
import Register from "./Register";
import InfoTooltip from "./InfoTooltip";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);

  const [isSingUp, setSignUp] = React.useState(false);
  const [isSignIn, setSignIn] = React.useState(false);

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState(false);

  const history = useHistory();

  const messageSignUp = isSingUp ? "Регистрация" : "Зарегистрироваться";
  const messageSingIn = isSignIn ? "Вход" : "Войти";

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cards]) => {
        setCurrentUser(userData);
        setCards(cards);
      })
      .catch((e) => console.log(`Ошибка при получении данных: ${e}`));
  }, []);

  const tokenCheck = React.useCallback(() => {
    if (localStorage.getItem("jwt")) {
      const jwt = localStorage.getItem("jwt");
      if (jwt) {
        auth
          .checkToken(jwt)
          .then((res) => {
            if (res) {
              setLoggedIn(true);
              setEmail(res.data.email);
              history.push(routes.root);
            }
          })
          .catch((e) => {
            localStorage.removeItem("jwt");
            console.log(e);
            history.push(routes.register);
          });
      }
    }
  }, [history]);

  React.useEffect(() => {
    if (loggedIn) {
      history.push(routes.root);
    }
  }, [loggedIn, history]);

  React.useEffect(() => {
    tokenCheck();
  }, [tokenCheck]);

  function handleRegistration(email, password) {
    setSignUp(true);
    auth
      .register(email, password)
      .then((res) => {
        if (res) {
          setStatus(true);
          setIsInfoTooltipOpen(true);
          history.push(routes.login);
        }
      })
      .catch((e) => {
        setStatus(false);
        setIsInfoTooltipOpen(true);
        console.log(`Ошибка при регистрации: ${e}`);
      })
      .finally(() => {
        setSignUp(false);
      });
  }

  function handleLogin(email, password) {
    setSignIn(true);
    auth
      .authorize(email, password)
      .then((res) => {
        if (res) {
          localStorage.setItem("jwt", res.token);
          tokenCheck();
        }
      })
      .catch((e) => {
        setIsInfoTooltipOpen(true);
        setStatus(false);
        console.log(`Ошибка при попытке авторизации: ${e}`);
      })
      .finally(() => {
        setSignIn(false);
      });
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddCardClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .setLike(card._id, !isLiked)
      .then((newCard) => {
        setCards((cards) => cards.map((c) => (c._id === card._id ? newCard : c)));
      })
      .catch((err) => console.log(`Ошибка при попытке поставить лайк: ${err}`));
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards(cards.filter((c) => c._id !== card._id));
        closeAllPopups();
      })
      .catch((err) => console.log(`Ошибка при удалении карточки: ${err}`));
  }

  function handleUpdateUser(userData) {
    api
      .getUserData(userData)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log(`Ошибка при обновлении пользователя: ${err}`));
  }

  function handleUpdateAvatar(userData) {
    api
      .changeAvatar(userData)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log(`Ошибка при обновлении аватара: ${err}`));
  }

  function handleAddPlace(data) {
    api
      .addCard(data)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(`Ошибка при добавлении карточки: ${err}`));
  }

  const closeByEsc = React.useCallback((e) => {
    if (e.key === "Escape") {
      closeAllPopups();
    }
  }, []);

  React.useEffect(() => {
    if (
      isAddPlacePopupOpen ||
      isEditAvatarPopupOpen ||
      isEditProfilePopupOpen ||
      selectedCard
    ) {
      document.addEventListener("keydown", closeByEsc);
    }
    return () => document.removeEventListener("keydown", closeByEsc);
  }, [
    closeByEsc,
    isAddPlacePopupOpen,
    isEditAvatarPopupOpen,
    isEditProfilePopupOpen,
    selectedCard,
  ]);

  function signOut() {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsInfoTooltipOpen(false);
    setSelectedCard({});
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header loggedIn={loggedIn} email={email} onSignOut={signOut} />
        {/* <Route path="/login">
          <Login />
        </Route> */}
        <Switch>
          <ProtectedRoute
            exact
            path={routes.root}
            loggedIn={loggedIn}
            component={Main}
            cards={cards}
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddCardClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <Route path={routes.login}>
            <Login onLogin={handleLogin} onActionText={messageSingIn} />
          </Route>
          <Route path={routes.register}>
            <Register onRegistration={handleRegistration} onActionText={messageSignUp} />
          </Route>
          <Route>
            {loggedIn ? <Redirect to={routes.root} /> : <Redirect to={routes.login} />}
          </Route>
        </Switch>

        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlace}
        />

        <PopupWithForm title="Вы уверены?" name="remove" buttonTitle="Да" />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <InfoTooltip status={status} isOpen={isInfoTooltipOpen} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
