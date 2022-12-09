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
    formElement.addEventListener('submit', function(e) {
      e.preventDefault();
    })

    setEventListeners(formElement);
  })
}

const showErrorMessage = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  errorElement.textContent = errorMessage;
  errorElement.classList.add(settings.errorClass);
  inputElement.classList.add(settings.inputErrorClass)
}

const hideErrorMessage = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  errorElement.textContent = '';
  errorElement.classList.remove(settings.errorClass);
  inputElement.classList.remove(settings.inputErrorClass)
}

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showErrorMessage(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideErrorMessage(formElement, inputElement);
  }
}

const hasInvalidInput = (inputList) => {
  return inputList.some(input => {
    return !input.validity.valid;
  })
}

const toggleButtonState = (inputList, button, inactiveButtonClass) => {
  if (hasInvalidInput(inputList)) {
    button.setAttribute('disabled', '');
    button.classList.add(inactiveButtonClass)
  } else {
    button.removeAttribute('disabled');
    button.classList.remove(inactiveButtonClass);
  }
}

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
  const buttonSubmitElement = formElement.querySelector(settings.submitButtonSelector);

  toggleButtonState(inputList, buttonSubmitElement, settings.inactiveButtonClass);
  inputList.forEach( inputElement => {
    inputElement.addEventListener('input', function(e) {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonSubmitElement, settings.inactiveButtonClass);
    })
  })
}

enableValidation(settings);
