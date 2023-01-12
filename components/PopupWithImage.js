import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._title = this._popup.querySelector('.popup__title');
    this._image = this._popup.querySelector('.popup__image');
  }

  open({title, imageUrl}) {
    this._title.textContent = title;
    this._image.src = imageUrl;
    this._image.alt = title;

    super.open();
  }
}
