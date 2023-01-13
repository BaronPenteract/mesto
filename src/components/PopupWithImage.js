import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor({ESC_KEY}, popupSelector) {
    super({ESC_KEY}, popupSelector);

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
