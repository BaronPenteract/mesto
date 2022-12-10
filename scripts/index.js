const btnEditProfile = document.querySelector('.profile__btn-edit');
const btnAddCard = document.querySelector('.profile__btn-add');

/* Попапы */
const popupList = document.querySelectorAll('.popup');
const popupEditProfile = getPopup('popup_type_edit-form');
const popupAddCard = getPopup('popup_type_add-form');
const popupImage = getPopup('popup_type_image');

const imageOfPopupImage = popupImage.querySelector('.popup__image');
const titleOfPopupImage = popupImage.querySelector('.popup__title');


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
const cardTemplate = document.querySelector('#card-template').content; /* Это <li>...</li> */

function initializeCards(initialCards) {
  initialCards.forEach(function( initialCard ) {
    const card = createCard( initialCard.name, initialCard.link, cardTemplate );
    addCard( card, cardList );
  })
}

function createCard(name, url, cardTemplate) {
  const card = cardTemplate.cloneNode(true);
  const cardTitle = card.querySelector('.cards__title');
  const cardImage = card.querySelector('.cards__image');
  const btnDelCard = card.querySelector('.cards__delete');
  const btnLikeCard = card.querySelector('.cards__like');

  cardImage.src = url;
  cardImage.alt = name;
  cardTitle.textContent = name;

  btnDelCard.addEventListener('click', function(e) {
    const cardClosestLiTag = e.target.closest('li');

    delCard(cardClosestLiTag);
  })

  cardImage.addEventListener('click', function() {
    setValuesInPopupElImageAndOpen(name, url, popupImage);
  })

  btnLikeCard.addEventListener('click', function() {
    btnLikeCard.classList.toggle('cards__like_active');
  })
  return card;
}

function addCard( card, cardList ) {
  cardList.prepend( card );
}

function delCard(cardClosestLiTag) {
  cardClosestLiTag.remove();
}

/* Получение конкретного попапа по классу модификатору*/
function getPopup(popupClass) {
  return Array.from(popupList).find(popup => popup.classList.contains(popupClass));
}


/* Open/Close popup window */
function closePopupByEscape(e) {
  const popupEl = Array.from(popupList).find(popup => popup.classList.contains('popup_active'))

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

/* Set image popup values */
function setValuesInPopupElImageAndOpen(name, url, popupImage) {
  imageOfPopupImage.src = url;
  imageOfPopupImage.alt = name;
  titleOfPopupImage.textContent = name;
  openPopup(popupImage);
}
/* ----------------------------------------------------------------------------------------------------- */

/* Click по кнопке редактирования профиля */
btnEditProfile.addEventListener('click', function() {
  setValuesInFormEditProfileAndOpen();
  resetFormState(formEditProfile);
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
  resetFormState(formAddCard);
  openPopup(popupAddCard);
});

/* Слушатель submit формы добавления карточки */
formAddCard.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = inputNameCard.value;
  const url = inputUrlCard.value;
  const card = createCard(name, url, cardTemplate);

  addCard(card, cardList);
  closePopup(popupAddCard);
});

/* Закрытие Любого popup */
popupList.forEach( function(popupEl) {
  const popupCloseBtnEl = popupEl.querySelector('.popup__close');

  popupCloseBtnEl.addEventListener('click', function() {
    closePopup(popupEl);
  })

  popupEl.addEventListener('click', function(e) {
    if (e.target === e.currentTarget) {
      closePopup(popupEl);
    }
  })
});
/* ------------- */

initializeCards(initialCards);
