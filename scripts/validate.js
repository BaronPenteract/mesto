const settings = {
  formSelector: '.popup__form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__btn_type_submit',
  inactiveButtonClass: 'form__btn_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__error_active'
};

const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));

  formList.forEach( formElement => {

    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));

    console.log(inputList)
  })
}

enableValidation(settings);
