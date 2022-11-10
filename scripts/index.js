let editBtn = document.querySelector('.profile__btn-edit');
let closePopupBtn = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');

/* Получение формы редактирования профиля и ее элементов */
let editForm = document.querySelector('.form_type_edit');
let editFormName = editForm.querySelector('.form__input_edit_name')
let editFormJob = editForm.querySelector('.form__input_edit_job');
let editFormBtn = editForm.querySelector('.form__btn_type_submit');
/* Редактируемые имя и профессия профиля */
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');

/* Функция сохранения формы редактирования профиля */
function editFormHandler(event) {
  event.preventDefault();

  profileName.textContent = editFormName.value;
  profileJob.textContent = editFormJob.value;
  togglePopup();
}

/* Open/Close popup window */
function togglePopup() {
  setEditFormNameJob(); /* Если не было submit (не "если", а "не было"), то возвращаем старые значения c профиля */
  popup.classList.toggle('popup_active');
}

/* Set edit form values */
function setEditFormNameJob() {
  if(!popup.classList.contains('popup_active')) {
    editFormName.value = profileName.textContent;
    editFormJob.value = profileJob.textContent;
  }
}
/* ------------- */

/* Слушатель submit формы редактирования профиля */
editForm.addEventListener('submit', editFormHandler);

/* Click по кнопке редактирования профиля */
editBtn.addEventListener('click', togglePopup);

/* Click по кнопке закрытия popup */
closePopupBtn.addEventListener('click', togglePopup);
