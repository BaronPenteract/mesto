export default class Card {
  constructor(data, templateSelector, handlers) {
    this._templateSelector = templateSelector;
    this._title = data.title;
    this._imageUrl = data.imageUrl;
    this._closePopupByEscape = handlers.closePopupByEscape;
  }

  _getTemplate() {
    return document.querySelector(this._templateSelector).content.cloneNode(true);
  }

  _setEventListeners() {
    this._like();
    this._delete();
    this._openBigPicture();
  }

  _like() {
    const btnLike = this._cardElement.querySelector('.cards__like');

    btnLike.addEventListener('click', () => {
      btnLike.classList.toggle('cards__like_active');
    })
  }

  _delete() {
    const btnDelete = this._cardElement.querySelector('.cards__delete');

    btnDelete.addEventListener('click', () => {
      btnDelete.closest('li').remove();
    })
  }

  _openBigPicture() {
    const popupImage = document.querySelector('.popup_type_image');

    this._cardElement.querySelector('.cards__image').addEventListener('click', () => {
      popupImage.querySelector('.popup__image').src = this._imageUrl;
      popupImage.querySelector('.popup__image').alt = this._title;
      popupImage.querySelector('.popup__title').textContent = this._title;

      document.addEventListener('keydown', this._closePopupByEscape);
      popupImage.classList.add('popup_active');
    })
  }

  generate() {
    this._cardElement = this._getTemplate();
    this._cardElement.querySelector('.cards__title').textContent = this._title;
    this._cardElement.querySelector('.cards__image').src = this._imageUrl;
    this._cardElement.querySelector('.cards__image').alt = this._title;

    this._setEventListeners();

    return this._cardElement;
  }
}
