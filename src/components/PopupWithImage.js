import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor({ESC_KEY}, popupSelector) {
    super({ESC_KEY}, popupSelector);

    this._title = this._popup.querySelector('.popup__title');
    this._image = this._popup.querySelector('.popup__image');
  }

  open({name, link}) {
    this._title.textContent = name;
    this._image.src = link;
    this._image.alt = name;

    super.open();
  }
}
