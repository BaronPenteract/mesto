export default class Card {
  constructor({data, userId, handleImageClick, handleDeleteClick}, templateSelector) {
    this._templateSelector = templateSelector;
    this._title = data.name;
    this._imageUrl = data.link;
    this._id = data._id;
    this._owner = data.owner;
    this._userId = userId;
    this._likes = data.likes;
    this._handleImageClick = handleImageClick;
    this._handleDeleteClick = handleDeleteClick;
  }

  _getTemplate() {
    return document.querySelector(this._templateSelector).content.querySelector('li').cloneNode(true);
  }

  _setEventListeners() {
    this._setLikeEventListener();
    this._setImageEventListener();

    if(this._isOwner()) {
      this._btnDelete.classList.add('cards__delete_active');
      this._setDeleteEventListener();
    }
  }

  _isOwner() {
    if (this._owner._id == this._userId) {
      return true;
    }
  }

  _setLikeEventListener() {

    this._btnLike.addEventListener('click', () => {
      this._toggleLike();
    })
  }

  _toggleLike() {
    this._btnLike.classList.toggle('cards__like_active');
  }



  _setDeleteEventListener() {
    this._btnDelete.addEventListener('click', () => {
      this._handleDeleteClick(this.getId(), this._cardElement)
    })
  }

  remove(card) {
    card.remove();
    card = null;
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

  getId() {
    return this._id;
  }

  generate() {
    this._cardElement = this._getTemplate();
    this._cardTitle = this._cardElement.querySelector('.cards__title');
    this._cardImage = this._cardElement.querySelector('.cards__image');
    this._btnDelete = this._cardElement.querySelector('.cards__delete');
    this._btnLike = this._cardElement.querySelector('.cards__like');
    this._likesAmount = this._cardElement.querySelector('.cards__like-amount');

    this._cardTitle.textContent = this._title;
    this._cardImage.src = this._imageUrl;
    this._cardImage.alt = this._title;


    this._setEventListeners();

    return this._cardElement;
  }
}
