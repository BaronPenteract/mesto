import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._submitCallback = submitCallback;
  }

  _getInputValues() {
    this._inputList = this._form.querySelectorAll('.form__input');
    this._formValues = {};

    this._inputList.forEach(input => {
        this._formValues[input.name] = input.value;
    })
    return this._formValues;
  }

  setEventListeners() {
    this._form.addEventListener('submit', this._submitCallback.bind(this))

    super.setEventListeners();
  }

  close() {
    this._form.reset();

    super.close();
  }
}