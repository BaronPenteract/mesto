import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ESC_KEY, submitCallback}, popupSelector) {
    super({ESC_KEY}, popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.form__input');
    this._buttonSubmit = this._form.querySelector('.form__btn_type_submit');
    this._submitCallback = submitCallback;
  }

  _getInputValues() {
    this._formValues = {};

    this._inputList.forEach(input => {
        this._formValues[input.name] = input.value;
    })
    return this._formValues;
  }

  setInputValues(data) {
    this._inputList.forEach(input => {
      input.value = data[input.name];
    })
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

  isLoading(isLoading, newSubmitButtonText = 'Сохранение...') {

    if( !this._buttonSubmit) {
      this._buttonSubmit = this._form.querySelector('.form__btn_type_submit');
    } // для вызова этой функции из объекта модалки формы подтверждения, т.к. там искать кнопку нет смысла

    this._buttonSubmit.disabled = isLoading;

    if(isLoading) {
      this._submitText = this._buttonSubmit.textContent;
      this._buttonSubmit.textContent = newSubmitButtonText;
    } else {
      this._buttonSubmit.textContent = this._submitText;
    }
  }
}
