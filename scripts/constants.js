const ESC_KEY = 'Escape';

const initialCards = [
  {
    name: 'р.п. Верх-Чебула',
    link: 'https://avatars.dzeninfra.ru/get-zen_doc/2763421/pub_630cf6f6aaa53c70f210f4e4_630cf88dbf33e43cb0dcc330/scale_2400'
  },
  {
    name: 'г. Новороссийск',
    link: 'https://img.pac.ru/landmarks/476692/big/61C538047F00010130DB5476CFDE465B.jpg'
  },
  {
    name: 'ст. Натухаевская',
    link: 'https://stroy-dom-anapa.ru/wp-content/uploads/2021/03/skola-natuhaevsk.jpg'
  },
  {
    name: 'г. Новосибирск',
    link: 'https://mtdata.ru/u16/photoA19E/20015809021-0/original.jpg'
  },
  {
    name: 'г. Кемерово',
    link: 'https://img-fotki.yandex.ru/get/373511/30348152.23d/0_9345b_8255e9f_orig'
  },
  {
    name: 'г. Мариинск',
    link: 'https://static.tildacdn.com/tild3439-3063-4536-b130-333465363630/5ca456b282c94d548f4e.jpeg'
  }
];

const settings = {
  formSelector: '.popup__form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__btn_type_submit',
  inactiveButtonClass: 'form__btn_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__error_active'
};

