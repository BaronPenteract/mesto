const btnEditProfile = document.querySelector('.profile__btn-edit');
const btnAddCard = document.querySelector('.profile__btn-add');
const ESC_KEY = 'Escape';

/* Попапы */
const popupEls = document.querySelectorAll('.popup');
const popupElEditProfile = getPopup('popup_type_edit-form');
const popupElAddCard = getPopup('popup_type_add-form');
const popupElImage = getPopup('popup_type_image');

const imageOfPopupElImage = popupElImage.querySelector('.popup__image');
const titleOfPopupElImage = popupElImage.querySelector('.popup__title');


/* Получение формы редактирования профиля и ее элементов */
const formElEditProfile = popupElEditProfile.querySelector('.form_type_edit');
const inputNameProfileEl = formElEditProfile.querySelector('.form__input_edit_name')
const inputJobProfileEl = formElEditProfile.querySelector('.form__input_edit_job');

/* Редактируемые имя и профессия профиля */
const profileNameEl = document.querySelector('.profile__title');
const profileJobEl = document.querySelector('.profile__subtitle');

/* Получение формы добавления карточки */
const formElAddCard = popupElAddCard.querySelector('.form_type_add');
const inputNameCardEl = formElAddCard.querySelector('.form__input_add_name')
const inputUrlCardEl = formElAddCard.querySelector('.form__input_add_url');

const cardsListEl = document.querySelector('.cards__list'); /* <ul class="cards__list"></ul> */
const cardTemplateEl = document.querySelector('#card-template').content; /* Это <li>...</li> */

function initializeCards(initialCards) {
  initialCards.forEach(function( initialCard ) {
    const cardEl = createCard( initialCard.name, initialCard.link );
    addCard( cardEl );
  })
}

function createCard(name, url) {
  const cardEl = cardTemplateEl.cloneNode(true);
  const cardTitleEl = cardEl.querySelector('.cards__title');
  const cardImageEl = cardEl.querySelector('.cards__image');
  const btnDelCard = cardEl.querySelector('.cards__delete');
  const btnLikeCard = cardEl.querySelector('.cards__like');

  cardImageEl.src = url;
  cardImageEl.alt = name;
  cardTitleEl.textContent = name;

  btnDelCard.addEventListener('click', function(e) {
    const cardLiEl = e.target.closest('li');

    delCard(cardLiEl);
  })

  cardImageEl.addEventListener('click', function() {
    setValuesInPopupElImageAndOpen(name, url);
  })

  btnLikeCard.addEventListener('click', function() {
    btnLikeCard.classList.toggle('cards__like_active');
  })
  return cardEl;
}

function addCard( cardEl ) {
  cardsListEl.prepend( cardEl );
}

function delCard(cardLiEl) {
  cardLiEl.remove();
}

/* Получение конкретного попапа по классу модификатору*/
function getPopup(popupClass) {
  return Array.from(popupEls).find(popup => popup.classList.contains(popupClass)); /* До чего техника дошла! Преобразуем псевдомассив в массив, ищем попап с нужным классом*/
}


/* Open/Close popup window */
function openPopup(popupEl) {
  popupEl.classList.add('popup_active');
  const formElement = popupEl.querySelector('.popup__form');
  if(settings && formElement) {
    const inputList = Array.from(formElement.querySelectorAll(`${settings.inputSelector}`));
    const buttonSubmitElement = formElement.querySelector(`${settings.submitButtonSelector}`);

    toggleButtonState(inputList, buttonSubmitElement, settings.inactiveButtonClass);
  }
}

function closePopup(popupEl) {
  popupEl.classList.remove('popup_active');
}

/* Set edit form values */
function setValuesInFormElEditProfileAndOpen() {
  if(!popupElEditProfile.classList.contains('popup_active')) {
    inputNameProfileEl.value = profileNameEl.textContent;
    inputJobProfileEl.value = profileJobEl.textContent;
  }
  openPopup(popupElEditProfile);
}

/* Set image popup values */
function setValuesInPopupElImageAndOpen(name, url) {
  imageOfPopupElImage.src = url;
  imageOfPopupElImage.alt = name;
  titleOfPopupElImage.textContent = name;
  openPopup(popupElImage);
}
/* ----------------------------------------------------------------------------------------------------- */

/* Click по кнопке редактирования профиля */
btnEditProfile.addEventListener('click', function() {
  setValuesInFormElEditProfileAndOpen();
});

/* Слушатель submit формы редактирования профиля */
formElEditProfile.addEventListener('submit', function (e) {
  e.preventDefault();

  profileNameEl.textContent = inputNameProfileEl.value;
  profileJobEl.textContent = inputJobProfileEl.value;
  closePopup(popupElEditProfile);
});

/* Click по кнопке добавления карточки */
btnAddCard.addEventListener('click', function() {
  inputNameCardEl.value = '';
  inputUrlCardEl.value = '';
  openPopup(popupElAddCard);
});

/* Слушатель submit формы добавления карточки */
formElAddCard.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = inputNameCardEl.value;
  const url = inputUrlCardEl.value;
  const cardEl = createCard( name, url );

  addCard( cardEl );
  closePopup(popupElAddCard);
});

/* Закрытие Любого popup */
popupEls.forEach( function(popupEl) {
  const popupCloseBtnEl = popupEl.querySelector('.popup__close');

  popupCloseBtnEl.addEventListener('click', function() {
    closePopup(popupEl);
  })

  popupEl.addEventListener('click', function(e) {
    if (e.target === e.currentTarget) {
      closePopup(popupEl);
    }
  })

  document.addEventListener('keydown', function(e) {
    if (e.key === ESC_KEY) {
      closePopup(popupEl);
    }
  });
});
/* ------------- */

initializeCards(initialCards);
