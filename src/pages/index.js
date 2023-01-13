import './index.css';
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import {
  initialCards,
  validationConfig,
  ESC_KEY,
  templateSelector,
  userNameSelector,
  userJobSelector,
  btnEditUser,
  btnAddCard,
  formEditUser,
  formAddCard,
} from "../utils/constants.js";

// User Info
const userInfo = new UserInfo({
  userNameSelector,
  userJobSelector
});

// Модалки
const popupWithFormEditUser = new PopupWithForm({
  ESC_KEY,
  submitCallback: handleFormEditUserSubmit
}, '.popup_type_edit-form');

popupWithFormEditUser.setEventListeners();

const popupWithFormAddCard = new PopupWithForm({
  ESC_KEY,
  submitCallback: handleFormAddCardSubmit
}, '.popup_type_add-form');

popupWithFormAddCard.setEventListeners();

const popupWithImage = new PopupWithImage({
  ESC_KEY
}, '.popup_type_image');
popupWithImage.setEventListeners();

const cardsContainer = new Section({
  items: initialCards,
  renderer: (item) => {
    cardsContainer.addItem(createCard(item));
  }
}, '.cards__list'); /* <ul class="cards__list"></ul> */



/* Validators */
const formAddCardValidator = new FormValidator(validationConfig, formAddCard);
const formEditUserValidator = new FormValidator(validationConfig, formEditUser);

/* Submit handlers */
function handleFormEditUserSubmit(userData) {
  userInfo.setUserInfo(userData);

  popupWithFormEditUser.close();
}

function handleFormAddCardSubmit(cardData) {
  cardsContainer.addItem(createCard(cardData));

  popupWithFormAddCard.close();
}

function createCard(data) {
  return new Card(
    {
      data,
      handleImageClick: popupWithImage.open.bind(popupWithImage)
    },
    templateSelector
  ).generate();
}

/* ----------------------------------------------------------------------------------------------------- */
// Добавление карточек по умолчанию
cardsContainer.renderItems();

// Включение валидации
formAddCardValidator.enableValidation();
formEditUserValidator.enableValidation();

// Click listeners to open forms
btnEditUser.addEventListener('click', function() {
  const getUserInfo = userInfo.getUserInfo();

  popupWithFormEditUser.setInputValues(getUserInfo);

  formEditUserValidator.resetValidation();
  popupWithFormEditUser.open();
});

btnAddCard.addEventListener('click', function() {
  formAddCardValidator.resetValidation();

  popupWithFormAddCard.open();
});
