const initialCards = [
  {
    name: 'Верх-Чебула',
    link: 'http://chebula.ru/attachments/Image/IMG_5997.JPG?template=generic'
  },
  {
    name: 'Новороссийск',
    link: 'https://img.pac.ru/landmarks/476692/big/61C538047F00010130DB5476CFDE465B.jpg'
  },
  {
    name: 'Натухаевская',
    link: 'https://stroy-dom-anapa.ru/wp-content/uploads/2021/03/skola-natuhaevsk.jpg'
  },
  {
    name: 'Новосибирск',
    link: 'https://mtdata.ru/u16/photoA19E/20015809021-0/original.jpg'
  },
  {
    name: 'Кемерово',
    link: 'https://img-fotki.yandex.ru/get/373511/30348152.23d/0_9345b_8255e9f_orig'
  },
  {
    name: 'Мариинск',
    link: 'https://static.tildacdn.com/tild3439-3063-4536-b130-333465363630/5ca456b282c94d548f4e.jpeg'
  }
];
const editBtnEl = document.querySelector('.profile__btn-edit');
const addBtnEl = document.querySelector('.profile__btn-add');

/* Попапы */
const popupEls = document.querySelectorAll('.popup');
const editPopup = getPopup('popup_type_edit-form');
const addPopup = getPopup('popup_type_add-form');
const imagePopup = getPopup('popup_type_image');

/* Получение формы редактирования профиля и ее элементов */
const editFormEl = editPopup.querySelector('.form_type_edit');
const editFormNameEl = editFormEl.querySelector('.form__input_edit_name')
const editFormJobEl = editFormEl.querySelector('.form__input_edit_job');
const editFormBtnEl = editFormEl.querySelector('.form__btn_type_submit');

/* Редактируемые имя и профессия профиля */
const profileNameEl = document.querySelector('.profile__title');
const profileJobEl = document.querySelector('.profile__subtitle');

/* Получение формы добавления карточки */
const addFormEl = addPopup.querySelector('.form_type_add');
const addFormNameEl = addFormEl.querySelector('.form__input_add_name')
const addFormUrlEl = addFormEl.querySelector('.form__input_add_url');
const addFormBtnEl = addFormEl.querySelector('.form__btn_type_submit');

const cardsList = document.querySelector('.cards__list'); /* <ul class="cards__list"></ul> */
const cardTemplate = document.querySelector('#card-template').content; /* Это <li>...</li> */

function initializeCards(initialCards) {
  initialCards.forEach(function( initialCard ) {
    addCard(initialCard.name, initialCard.link);
  })
}

function addCard( name, url ) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitleEl = cardElement.querySelector('.cards__title');
  const cardImageEl = cardElement.querySelector('.cards__image');
  const cardDelButnEl = cardElement.querySelector('.cards__delete');
  const cardLikeButnEl = cardElement.querySelector('.cards__like');

  cardImageEl.src = url;
  cardImageEl.alt = name;
  cardTitleEl.textContent = name;

  cardDelButnEl.addEventListener('click', function(e) {
    const cardLiEl = e.target.closest('li');

    delCard(cardLiEl);
  })

  cardImageEl.addEventListener('click', function() {
    setImagePopupValues(name, url);
    openPopup(imagePopup);
  })

  cardLikeButnEl.addEventListener('click', function() {
    cardLikeButnEl.classList.toggle('cards__like_active');
  })

  cardsList.prepend(cardElement);
}

function delCard(cardLiEl) {
  cardLiEl.remove();
}

/* Получение конкретного попапа по классу модификатору*/
function getPopup(popupClass) {
  return Array.from(popupEls).find(popup => popup.classList.contains(popupClass)); /* До чего техника дошла! Преобразуем псевдомассив в массив, ищем попап с нужным классом*/
}

/* Функция сохранения формы редактирования профиля */
function editFormHandler(event) {
  event.preventDefault();

  profileNameEl.textContent = editFormNameEl.value;
  profileJobEl.textContent = editFormJobEl.value;
  closePopup(editPopup);
}

/* Open/Close popup window */
function openPopup(popupEl) {
  popupEl.classList.add('popup_active');
}

function closePopup(popupEl) {
  popupEl.classList.remove('popup_active');
}

/* Set edit form values */
function setEditFormValues() {
  if(!editPopup.classList.contains('popup_active')) {
    editFormNameEl.value = profileNameEl.textContent;
    editFormJobEl.value = profileJobEl.textContent;
  }
}

/* Set image popup values */
function setImagePopupValues(name, url) {
  const image = imagePopup.querySelector('.popup__image');
  const title = imagePopup.querySelector('.popup__title');

  image.src = url;
  image.alt = name;
  title.textContent = name;
}
/* ----------------------------------------------------------------------------------------------------- */

/* Закрытие Любого popup */
popupEls.forEach( function(popupEl) {
  const popupCloseBtnEl = popupEl.querySelector('.popup__close');
  popupCloseBtnEl.addEventListener('click', function() {
    closePopup(popupEl);
  })
});

/* Click по кнопке редактирования профиля */
editBtnEl.addEventListener('click', function() {
  setEditFormValues();
  openPopup(editPopup);
});

/* Слушатель submit формы редактирования профиля */
editFormEl.addEventListener('submit', editFormHandler);

/* Click по кнопке добавления карточки */
addBtnEl.addEventListener('click', function() {
  addFormNameEl.value = '';
  addFormUrlEl.value = '';
  openPopup(addPopup);
});

/* Слушатель submit формы добавления карточки */
addFormEl.addEventListener('submit', function(e) {
  e.preventDefault();

  let name = addFormNameEl.value;
  let url = addFormUrlEl.value;

  addCard(name, url);
  closePopup(addPopup);
});

/* ------------- */

initializeCards(initialCards);
/* Надеюсь, все не так печально) */
