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
  userName: userName.value,
  userJob: userJob.value
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


/* Получение формы редактирования профиля и ее элементов */
const formEditUser = document.querySelector('.form_type_edit');
const inputNameUser = formEditUser.querySelector('.form__input_edit_name')
const inputJobUser = formEditUser.querySelector('.form__input_edit_job');

/* Получение формы добавления карточки */
const formAddCard = document.querySelector('.form_type_add');
const inputNameCard = formAddCard.querySelector('.form__input_add_name')
const inputUrlCard = formAddCard.querySelector('.form__input_add_url');

const cardsContainer = new Section({
  items: initialCards,
  renderer: (item) => {
    cardsContainer.addItem(createCard(item));
  }
}, '.cards__list'); /* <ul class="cards__list"></ul> */



/* Validators */
const formAddCardValidator = new FormValidator(validationConfig, formAddCard);
const formEditUserValidator = new FormValidator(validationConfig, formEditUser);


/* Set edit form values */
function setValuesInFormEditProfileAndOpen() {
  inputNameUser.value = userName.textContent;
  inputJobUser.value = userJob.textContent;

  openPopup(popupEditProfile);
}

/* Submit handlers */

function handleFormEditUserSubmit(e) {
  e.preventDefault();

  userInfo.setUserInfo({//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! что-то с контекстом, я полагаю
    userName: userName.value,
    userJob: userJob.value
  });

  popupWithFormEditUser.close();
}

function handleFormAddCardSubmit(e) {
  e.preventDefault();

  const data = {
    title: inputNameCard.value,
    imageUrl: inputUrlCard.value,
  };

  cardsContainer.addItem(createCard(data));

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
  popupWithFormEditUser.open();
});

btnAddCard.addEventListener('click', function() {
  formAddCard.reset();
  formAddCardValidator.resetValidation();

  popupWithFormAddCard.open();
});
