import './index.css';
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithConfifmation from '../components/PopupWithConfirmation.js';
import UserInfo from "../components/UserInfo.js";
import Api from '../components/Api.js';
import {
  //initialCards,
  validationConfig,
  ESC_KEY,
  templateSelector,
  userNameSelector,
  userJobSelector,
  userAvatarSelector,
  btnEditUser,
  btnEditAvatar,
  btnAddCard,
  formEditUser,
  formAddCard,
  formEditAvatar,
} from "../utils/constants.js";

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-59',
  headers: {
    authorization: 'cb4b8bf9-d1cf-4125-b87a-d2721614cb5f',
    'Content-Type': 'application/json'
  }
});

// User Info
const userInfo = new UserInfo({
  userNameSelector,
  userJobSelector,
  userAvatarSelector,
});

let myUserId;

Promise.all([api.getInitialCards(), api.getUser()])
  .then(([cards, user]) => {
    myUserId = user._id;
    userInfo.setUserInfo(user);
    userInfo.setAvatar(user);
    cardsContainer.renderItems(cards);
  })
  .catch( err => {
    console.log(err)
  })

// Модалки
const popupWithFormEditUser = new PopupWithForm({// ------------------------------------------------Profile info
  ESC_KEY,
  submitCallback: handleFormEditUserSubmit
}, '.popup_type_edit-form');
popupWithFormEditUser.setEventListeners();

const popupWithFormAddCard = new PopupWithForm({// -------------------------------------------------Card
  ESC_KEY,
  submitCallback: handleFormAddCardSubmit
}, '.popup_type_add-form');
popupWithFormAddCard.setEventListeners();

const popupWithFormEditAvatar = new PopupWithForm({// ----------------------------------------------Avatar
  ESC_KEY,
  submitCallback: handleFormAvatarSubmit
}, '.popup_type_avatar-form');
popupWithFormEditAvatar.setEventListeners();

const popupWithImage = new PopupWithImage({// ------------------------------------------------------Image
  ESC_KEY
}, '.popup_type_image');
popupWithImage.setEventListeners();

const popupWithFormConfirm = new PopupWithConfifmation({ // ----------------------------------------Confim
  ESC_KEY,
}, '.popup_type_confirm');
popupWithFormConfirm.setEventListeners();

const cardsContainer = new Section({//--------------------------------------------------------------Section
  renderer: (item) => {
    cardsContainer.addItemAppend(createCard(item));
  }
}, '.cards__list'); /* <ul class="cards__list"></ul> */

/* Validators */
const formAddCardValidator = new FormValidator(validationConfig, formAddCard);// Card           \
const formEditUserValidator = new FormValidator(validationConfig, formEditUser);//Profile info   |--- Validators
const formEditAvatarValidator = new FormValidator(validationConfig, formEditAvatar);// Avatar   /

/* Submit handlers */
function handleFormEditUserSubmit(userData) {
  const currentUserData = userInfo.getUserInfo();
  let isDifferentValues;

  for( let currentKey in currentUserData ) {
    if(currentUserData[currentKey] !== userData[currentKey]) {
      isDifferentValues = true;
    }
  }

  if(isDifferentValues) {
    popupWithFormEditUser.isLoading(true);
    api.setUser(userData)
      .then( () => {
        userInfo.setUserInfo(userData);
        popupWithFormEditUser.close();
      })
      .catch( api.handleError )
      .finally( () => {
        popupWithFormEditUser.isLoading(false);
      })
  } else {
    popupWithFormEditUser.close();
  }
}

function handleFormAddCardSubmit(cardData) {
  popupWithFormAddCard.isLoading(true);
  api.addCard(cardData)
    .then(res => {
      cardsContainer.addItemPrepend(createCard(res));
      popupWithFormAddCard.close();
    })
    .catch( api.handleError )
    .finally( () => {
      popupWithFormAddCard.isLoading(false);
    })
}

function handleFormAvatarSubmit(avatarData) {
  popupWithFormEditAvatar.isLoading(true);

  api.setAvatar(avatarData)
    .then( res => {
      userInfo.setAvatar(res);
      popupWithFormEditAvatar.close();
    })
    .catch( api.handleError )
    .finally( () => {
      popupWithFormEditAvatar.isLoading(false);
    })
}

function createCard(data) { // ----------------------------------------------------------------Create card
  return new Card(
    {
      data,
      userId: myUserId,
      handleImageClick: popupWithImage.open.bind(popupWithImage),
      handleDeleteClick: handleDeleteClick,
      handleLikeClick: handleLikeClick,
    },
    templateSelector
  ).generate();
}

function handleDeleteClick() {
  popupWithFormConfirm.open();
  popupWithFormConfirm.setSubmitCallback(() => {
    PopupWithForm.prototype.isLoading.call(popupWithFormConfirm, true, 'Удаление...'); // так можно делать? вот в чем вопрос. Выглядит лучше
    api.deleteCard(this.getId())
      .then(res => {
       if( res.ok ) {
        this._cardElement.remove();
        popupWithFormConfirm.close();
       }
      })
      .catch( api.handleError )
      .finally( () => {
        PopupWithForm.prototype.isLoading.call(popupWithFormConfirm, false);
      });
  })
}

function handleLikeClick() {
  if (this.checkUserLike(this._likes)) {
    api.unLikeCard(this.getId())
      .then( res => {
        this.setLikes(res.likes);
      })
      .catch( api.handleError )
  } else {
    api.likeCard(this.getId())
      .then( res => {
        this.setLikes(res.likes);
      })
      .catch( api.handleError )
  }
}

/* ----------------------------------------------------------------------------------------------------- */
// Включение валидации
formAddCardValidator.enableValidation();
formEditUserValidator.enableValidation();
formEditAvatarValidator.enableValidation();

// Click listeners to open forms
btnEditAvatar.addEventListener('click', function() {// Avatar
  formEditAvatarValidator.resetValidation();

  popupWithFormEditAvatar.open();
})

btnEditUser.addEventListener('click', function() {// Profile information
  const getUserInfo = userInfo.getUserInfo();

  popupWithFormEditUser.setInputValues(getUserInfo);

  formEditUserValidator.resetValidation();
  popupWithFormEditUser.open();
});

btnAddCard.addEventListener('click', function() {// Card
  formAddCardValidator.resetValidation();

  popupWithFormAddCard.open();
});
