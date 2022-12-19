import { ESC_KEY, initialCards, templateSelector, settings } from "./constants.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const btnEditProfile = document.querySelector('.profile__btn-edit');
const btnAddCard = document.querySelector('.profile__btn-add');

/* Попапы */
const popupList = document.querySelectorAll('.popup');
const popupEditProfile = getPopup('popup_type_edit-form');
const popupAddCard = getPopup('popup_type_add-form');


/* Получение формы редактирования профиля и ее элементов */
const formEditProfile = popupEditProfile.querySelector('.form_type_edit');
const inputNameProfile = formEditProfile.querySelector('.form__input_edit_name')
const inputJobProfile = formEditProfile.querySelector('.form__input_edit_job');

/* Редактируемые имя и профессия профиля */
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');

/* Получение формы добавления карточки */
const formAddCard = popupAddCard.querySelector('.form_type_add');
const inputNameCard = formAddCard.querySelector('.form__input_add_name')
const inputUrlCard = formAddCard.querySelector('.form__input_add_url');

const cardList = document.querySelector('.cards__list'); /* <ul class="cards__list"></ul> */

/* Validators */
const formAddCardValidator = new FormValidator(settings, formAddCard);
const formEditProfileValidator = new FormValidator(settings, formEditProfile);


/* Получение конкретного попапа по классу модификатору*/
function getPopup(popupClass) {
  return Array.from(popupList).find(popup => popup.classList.contains(popupClass));
}


/* Open/Close popup window */
function closePopupByEscape(e) {
  const popupEl = getPopup('popup_active');

  if (!popupEl) {
    return;
  }

  if (e.key === ESC_KEY) {
    closePopup(popupEl);
  }
}

function openPopup(popupEl) {
  popupEl.classList.add('popup_active');
  document.addEventListener('keydown', closePopupByEscape);
}

function closePopup(popupEl) {
  popupEl.classList.remove('popup_active');
  document.removeEventListener('keydown', closePopupByEscape);
}

/* Set edit form values */
function setValuesInFormEditProfileAndOpen() {
  if(!popupEditProfile.classList.contains('popup_active')) {
    inputNameProfile.value = profileName.textContent;
    inputJobProfile.value = profileJob.textContent;
  }
  openPopup(popupEditProfile);
}

/* ----------------------------------------------------------------------------------------------------- */

/* Click по кнопке редактирования профиля */
btnEditProfile.addEventListener('click', function() {
  setValuesInFormEditProfileAndOpen();
  formEditProfileValidator.resetFormState();
});

/* Слушатель submit формы редактирования профиля */
formEditProfile.addEventListener('submit', function (e) {
  e.preventDefault();

  profileName.textContent = inputNameProfile.value;
  profileJob.textContent = inputJobProfile.value;
  closePopup(popupEditProfile);
});

/* Click по кнопке добавления карточки */
btnAddCard.addEventListener('click', function() {
  formAddCard.reset();
  formAddCardValidator.resetFormState();
  openPopup(popupAddCard);
});

/* Слушатель submit формы добавления карточки */
formAddCard.addEventListener('submit', function(e) {
  e.preventDefault();

  const data = {
    title: inputNameCard.value,
    imageUrl: inputUrlCard.value,
  };

  const card = new Card(data, templateSelector, {closePopupByEscape});
  cardList.prepend(card.generate());

  closePopup(popupAddCard);
});

/* Закрытие Любого popup */
popupList.forEach( function(popupElement) {
  const popupCloseBtn = popupElement.querySelector('.popup__close');

  popupCloseBtn.addEventListener('click', function() {
    closePopup(popupElement);
  })

  popupElement.addEventListener('click', function(e) {
    if (e.target === e.currentTarget) {
      closePopup(popupElement);
    }
  })
});
/* ------------- */



initialCards.forEach( data => {
  const card = new Card(data, templateSelector, {closePopupByEscape});
  cardList.prepend(card.generate());
})

formAddCardValidator.enableValidation();

formEditProfileValidator.enableValidation();
