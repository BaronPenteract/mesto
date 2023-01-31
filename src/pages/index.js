import './index.css';
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Api from '../components/Api.js';
import {
  //initialCards,
  validationConfig,
  ESC_KEY,
  templateSelector,
  userNameSelector,
  userJobSelector,
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

api.getInitialCards()
  .then( cards => {
    // Добавление карточек по умолчанию
    cardsContainer.renderItems(cards)
  })
  .catch( err => {
    console.log(err)
  })


// User Info
const userInfo = new UserInfo({
  userNameSelector,
  userJobSelector
});

api.getUser()
  .then(res => {
    userInfo.setUserInfo(res)
  })
  .catch( err => {
    console.log(err)
  })

// Модалки
const popupWithFormEditUser = new PopupWithForm({// Profile info
  ESC_KEY,
  submitCallback: handleFormEditUserSubmit
}, '.popup_type_edit-form');

popupWithFormEditUser.setEventListeners();

const popupWithFormAddCard = new PopupWithForm({// Card
  ESC_KEY,
  submitCallback: handleFormAddCardSubmit
}, '.popup_type_add-form');

popupWithFormAddCard.setEventListeners();

const popupWithFormEditAvatar = new PopupWithForm({// Avatar
  ESC_KEY,
  submitCallback: {}
}, '.popup_type_avatar-form');
popupWithFormEditAvatar.setEventListeners();

const popupWithImage = new PopupWithImage({// Image
  ESC_KEY
}, '.popup_type_image');
popupWithImage.setEventListeners();

const cardsContainer = new Section({// Section
  renderer: (item) => {
    cardsContainer.addItem(createCard(item));
  }
}, '.cards__list'); /* <ul class="cards__list"></ul> */



/* Validators */
const formAddCardValidator = new FormValidator(validationConfig, formAddCard);// Card
const formEditUserValidator = new FormValidator(validationConfig, formEditUser);//Profile info
const formEditAvatarValidator = new FormValidator(validationConfig, formEditAvatar);// Avatar

/* Submit handlers */
function handleFormEditUserSubmit(userData) {
  api.setUser(userData)
    .then( res => {
      if(res.ok) {
        userInfo.setUserInfo(userData);
        return;
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch(err => {
      console.log(err)
    })

  popupWithFormEditUser.close();
}

function handleFormAddCardSubmit(data) {

  function dateToString(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, 0);
    const day = date.getDate().toString().padStart(2, 0);
    const hours = date.getHours().toString().padStart(2, 0);
    const minutes = date.getMinutes().toString().padStart(2, 0);
    const seconds = date.getSeconds().toString().padStart(2, 0);
    const milliseconds = date.getMilliseconds().toString().padStart(3, 0);

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`
  }

  const user = userInfo.getUserInfo();
  const cardData = Object.assign(data, {
      "likes": [],
      "_id": "5d1f0611d321eb4bdcd707dd",
      "owner": user,
      "createdAt": dateToString(new Date())
    },
  )
  api.addCard(cardData)
    .then(res => {
      if(res.ok) {
        cardsContainer.addItem(createCard(cardData));
        return;
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch(err => {
      console.log(err)
    })

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
