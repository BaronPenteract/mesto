let editBtn = document.querySelector('.profile__btn_edit');
let closePopupBtn = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let page = document.querySelector('.page');

/* Получение формы редактирования профиля и ее элементов */
let editForm = document.querySelector('#edit-form');
let editFormName = editForm.querySelector('#edit-form__name')
let editFormJob = editForm.querySelector('#edit-form__job');
let editFormBtn = editForm.querySelector('#edit-form__submit');

/* Редактируемые имя и профессия профиля */
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');
/* ------------- */

/* Слушатель submit формы редактирования профиля */
editForm.addEventListener('submit', editFormHandler);

/* Click по кнопке редактирования профиля */
editBtn.addEventListener('click', function(event) {
  event.preventDefault();

  popupHandler();
  editFormBtnHandler();
});

/* Click по кнопке закрытия popup */
closePopupBtn.addEventListener('click',  function(event) {
  event.preventDefault();

  popupHandler();
});

/* События изменения инпутов */
editFormName.addEventListener('input', editFormBtnHandler);
editFormJob.addEventListener('input', editFormBtnHandler);

/* Функция сохранения формы редактирования профиля */
function editFormHandler(event) {
  event.preventDefault();

  profileName.innerText = editFormName.value;
  profileJob.innerText = editFormJob.value;
  popupHandler();
}

/* Open/Close popup window */
function popupHandler() {
  popup.classList.toggle('popup_active');
  page.classList.toggle('page_no-scroll');
  setEditFormNameJob(); /* Если не было submit (не "если", а "не было"), то возвращаем старые значения c профиля */
}

/* Set edit form values */
function setEditFormNameJob() {
  editFormName.value = profileName.innerText;
  editFormJob.value = profileJob.innerText;
}

/* Проверка, заполнены ли поля формы */
function checkEditForm() {
  if( !editFormName.value || !editFormJob.value) {
    return false;
  }
  return true;
}

/* Если не заполнено поле, то кнопка неактивна */
function editFormBtnHandler() {
  if( !checkEditForm() ) {
    editFormBtn.setAttribute('disabled', true);
  } else {
    editFormBtn.removeAttribute('disabled');
  }
}
