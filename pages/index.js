import { initialCards, templateSelector, validationConfig } from "../utils/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";

/* Редактируемые имя и профессия профиля */
const userName = document.querySelector('.profile__title');
const userJob = document.querySelector('.profile__subtitle');

// User Info
const userInfo = new UserInfo({
  userName: userName.textContent,
  userJob: userJob.textContent
});

// Модалки
const popupWithFormEditUser = new PopupWithForm('.popup_type_edit-form', handleFormEditUserSubmit);
popupWithFormEditUser.setEventListeners();

const popupWithFormAddCard = new PopupWithForm('.popup_type_add-form', handleFormAddCardSubmit);
popupWithFormAddCard.setEventListeners();

const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();

// Кнопки открытия форм
const btnEditUser = document.querySelector('.profile__btn-edit');
const btnAddCard = document.querySelector('.profile__btn-add');


/* Получение формы редактирования профиля */
const formEditUser = document.querySelector('.form_type_edit');
const inputUserName = formEditUser.elements.userName;
const inputUserJob = formEditUser.elements.userJob;

/* Получение формы добавления карточки */
const formAddCard = document.querySelector('.form_type_add');

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

function handleFormEditUserSubmit(userData) { //правильно ли реализовал... вопрос... это, получается, не сабмитХэндлер

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



btnEditUser.addEventListener('click', function() {
  const getUserInfo = userInfo.getUserInfo();

  /* inputUserName.value = getUserInfo.userName;
  inputUserJob.value = getUserInfo.userJob; */

  ({ userName: inputUserName.value, userJob: inputUserJob.value } = getUserInfo);

  formEditUserValidator.resetValidation();
  popupWithFormEditUser.open();
});

btnAddCard.addEventListener('click', function() {
  formAddCardValidator.resetValidation();

  popupWithFormAddCard.open();
});
