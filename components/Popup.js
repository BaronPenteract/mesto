import { ESC_KEY } from "../utils/constants.js";

export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  open() {
    this._popup.classList.add('popup_active');
    document.addEventListener('keydown', this._handleEscClose.bind(this));
  }

  close() {
    this._popup.classList.remove('popup_active');
    document.removeEventListener('keydown', this._handleEscClose.bind(this));
  }

  _handleEscClose(e) {
    if (e.key === ESC_KEY) {
      this.close();
    }
  }

  setEventListeners() {
    //слушатель клика на крестик
    this._buttonClose = this._popup.querySelector('.popup__close');
    this._buttonClose.addEventListener('click', this.close.bind(this));

    //слушатель клика по оверлею
    this._popup.addEventListener('click', (e) => {
      if(e.target === e.currentTarget) {
        this.close();
      }
    })
  }
}
