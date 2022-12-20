export default class Card {
  constructor(data, templateSelector, openImagePopup) {
    this._templateSelector = templateSelector;
    this._title = data.title;
    this._imageUrl = data.imageUrl;
    this._openImagePopup = openImagePopup;
  }

  _getTemplate() {
    return document.querySelector(this._templateSelector).content.cloneNode(true);
  }

  _setEventListeners() {
    this._setLikeEventListener();
    this._setDeleteEventListener();
    this._setImageEventListener();
  }

  _setLikeEventListener() {
    const btnLike = this._cardElement.querySelector('.cards__like');

    btnLike.addEventListener('click', () => {
      btnLike.classList.toggle('cards__like_active');
    })
  }

  _setDeleteEventListener() {
    const btnDelete = this._cardElement.querySelector('.cards__delete');
    const liElement = this._cardElement.querySelector('li');

    btnDelete.addEventListener('click', () => {
      liElement.remove();
      this._cardElement = null;
    })
  }

  _setImageEventListener() {
    this._cardImage.addEventListener('click', () => {
      const data = {
        title: this._title,
        imageUrl: this._imageUrl
      };
      this._openImagePopup(data)
    })
  }

  generate() {
    this._cardElement = this._getTemplate();
    this._cardTitle = this._cardElement.querySelector('.cards__title');
    this._cardImage = this._cardElement.querySelector('.cards__image');

    this._cardTitle.textContent = this._title;
    this._cardImage.src = this._imageUrl;
    this._cardImage.alt = this._title;

    this._setEventListeners();

    return this._cardElement;
  }
}
