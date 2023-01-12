import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(submitCallback, popupSelector) {
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
    this._form.addEventListener('submit', (e) => {
      e.preventDefault();
      this._submitCallback(this._getInputValues())
    })

    super.setEventListeners();
  }

  close() {
    this._form.reset();

    super.close();
  }
}
