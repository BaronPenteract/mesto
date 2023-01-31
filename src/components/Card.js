export default class Card {
  constructor({data, handleImageClick}, templateSelector) {
    this._templateSelector = templateSelector;
    this._title = data.name;
    this._imageUrl = data.link;
    this._likes = data.likes.length;
    this._handleImageClick = handleImageClick;
  }

  _getTemplate() {
    return document.querySelector(this._templateSelector).content.querySelector('li').cloneNode(true);
  }

  _setEventListeners() {
    this._setLikeEventListener();
    this._setDeleteEventListener();
    this._setImageEventListener();
  }

  _setLikeEventListener() {
    this._btnLike = this._cardElement.querySelector('.cards__like');

    this._btnLike.addEventListener('click', () => {
      this._toggleLike();
    })
  }

  _toggleLike() {
    this._btnLike.classList.toggle('cards__like_active');
  }

  _setDeleteEventListener() {
    this._btnDelete = this._cardElement.querySelector('.cards__delete');

    this._btnDelete.addEventListener('click', () => {
      this._deleteCard();
    })
  }

  _deleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _setImageEventListener() {
    this._cardImage.addEventListener('click', () => {
      const data = {
        name: this._title,
        link: this._imageUrl
      };
      this._handleImageClick(data)
    })
  }

  generate() {
    this._cardElement = this._getTemplate();
    this._cardTitle = this._cardElement.querySelector('.cards__title');
    this._cardImage = this._cardElement.querySelector('.cards__image');
    this._likesAmount = this._cardElement.querySelector('.cards__like-amount');

    this._cardTitle.textContent = this._title;
    this._cardImage.src = this._imageUrl;
    this._cardImage.alt = this._title;
    this._likesAmount.textContent = this._likes;

    this._setEventListeners();

    return this._cardElement;
  }
}
