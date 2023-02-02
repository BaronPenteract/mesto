import Popup from "./Popup.js";

export default class PopupWithConfifmation extends Popup {
  constructor({ESC_KEY}, popupSelector) {
    super({ESC_KEY}, popupSelector);
    this._form = this._popup.querySelector('.popup__form');
  }

  setEventListeners() {
    this._form.addEventListener('submit', (e) => {
      e.preventDefault();
      this._submitCallback()
    })

    super.setEventListeners();
  }

  setSubmitCallback(callback) {
    this._submitCallback = callback;
  }
}
