const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
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
const editFormEl = document.querySelector('.form_type_edit');
const editFormNameEl = editFormEl.querySelector('.form__input_edit_name')
const editFormJobEl = editFormEl.querySelector('.form__input_edit_job');
const editFormBtnEl = editFormEl.querySelector('.form__btn_type_submit');

/* Редактируемые имя и профессия профиля */
const profileNameEl = document.querySelector('.profile__title');
const profileJobEl = document.querySelector('.profile__subtitle');

/* Получение формы редактирования профиля и ее элементов */
const addFormEl = document.querySelector('.form_type_add');
const addFormNameEl = addFormEl.querySelector('.form__input_add_name')
const addFormUrlEl = addFormEl.querySelector('.form__input_add_url');
const addFormBtnEl = addFormEl.querySelector('.form__btn_type_submit');

const cardsList = document.querySelector('.cards__list');

function initializeCards(initialCards) {
  showCards(initialCards);

  /* Добавляем события на показ изображения и удаление карточки */
  let cards = cardsList.querySelectorAll('.cards__item');

  cards.forEach((card, index) => {
    let cardDelBtnEl = card.querySelector('.cards__delete');
    let cardImageEl = card.querySelector('.cards__image');
    let cardTitleEl = card.querySelector('.cards__title');
    let cardLikeBtnEl = card.querySelector('.cards__like');

    cardDelBtnEl.addEventListener('click', function(e) {
      e.preventDefault();

      delCard(index);
      initializeCards(initialCards);
    });

    cardImageEl.addEventListener('click', function() {
      setImagePopupValues(cardImageEl, cardTitleEl);
      openPopup(imagePopup);
    });

    cardLikeBtnEl.addEventListener('click', function(e) {
      e.preventDefault();

      cardLikeBtnEl.classList.toggle('cards__like_active');
    }); /* После добавления/удаления карточки, лайк не сохраняется, в ТЗ про это, вроде, не сказано, поэтому пока так */
  })
}

/* Показать карточки */
function showCards(initialCards) {
  cardsList.innerHTML = '';
  initialCards.forEach((card) => {
    let cardHTML = `
      <li>
        <article>
          <div class="cards__item">
            <button class="cards__delete" type="button" title="Удалить"></button>
            <img class="cards__image" src="${card.link}" alt="${card.name}">
            <div class="cards__content">
              <h2 class="cards__title">${card.name}</h2>
              <button class="cards__like" type="button" title="Поставить лайк"></button>
            </div>
          </div><!-- /.cards__item -->
        </article>
      </li>
    `;
    cardsList.insertAdjacentHTML('beforeend', cardHTML);
  });
}

function addCard(name, url) {
  initialCards.unshift({name: name, link: url});
}

function delCard(index) {
  initialCards.splice(index, 1);
}

/* Получение конкретного попапа по классу модификатору*/
function getPopup(popupClass) {
  let popup;
  popupEls.forEach( function(el) {
    if ( el.classList.contains(popupClass)) {
      popup = el;
    }
  });
  return popup;
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
function setImagePopupValues(cardImage, cardTitle) {
  imagePopup.querySelector('.popup__image').src = cardImage.src;
  imagePopup.querySelector('.popup__title').textContent = cardTitle.textContent;
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
  initializeCards(initialCards);
  closePopup(addPopup);
});

/* ------------- */

initializeCards(initialCards);
/* Надеюсь, все не так печально) */
