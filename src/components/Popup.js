export default class Popup {
  constructor({ ESC_KEY = 'Escape' }, popupSelector) {
    this._ESC_KEY = ESC_KEY;
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add('popup_active');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_active');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(e) {
    if (e.key === this._ESC_KEY) {
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
