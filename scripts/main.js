(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var r=function(){function t(e,r){var n=e.data,o=e.userId,i=e.handleImageClick,a=e.handleDeleteClick,u=e.handleLikeClick,c=e.handleUnLikeClick;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._templateSelector=r,this._title=n.name,this._imageUrl=n.link,this._id=n._id,this._owner=n.owner,this._userId=o,this._likes=n.likes,this._handleImageClick=i,this._handleDeleteClick=a,this._handleLikeClick=u,this._handleUnLikeClick=c}var r,n;return r=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector("li").cloneNode(!0)}},{key:"_setEventListeners",value:function(){this._setLikeEventListener(),this._setImageEventListener(),this._isOwner()&&(this._btnDelete.classList.add("cards__delete_active"),this._setDeleteEventListener())}},{key:"_isOwner",value:function(){if(this._owner._id==this._userId)return!0}},{key:"_setLikeEventListener",value:function(){var t=this;this._btnLike.addEventListener("click",(function(){t.checkUserLike(t._likes)?t._handleUnLikeClick():t._handleLikeClick()}))}},{key:"_toggleLike",value:function(t){this.checkUserLike(t)?this._btnLike.classList.add("cards__like_active"):this._btnLike.classList.remove("cards__like_active")}},{key:"checkUserLike",value:function(t){var e=this;return t.some((function(t){return t._id==e._userId}))}},{key:"setLikes",value:function(t){this._toggleLike(t),this._likesAmount.textContent=t.length,this._likes=t}},{key:"_setDeleteEventListener",value:function(){var t=this;this._btnDelete.addEventListener("click",(function(){t._handleDeleteClick()}))}},{key:"remove",value:function(t){t.remove(),t=null}},{key:"_setImageEventListener",value:function(){var t=this;this._cardImage.addEventListener("click",(function(){var e={name:t._title,link:t._imageUrl};t._handleImageClick(e)}))}},{key:"getId",value:function(){return this._id}},{key:"generate",value:function(){return this._cardElement=this._getTemplate(),this._cardTitle=this._cardElement.querySelector(".cards__title"),this._cardImage=this._cardElement.querySelector(".cards__image"),this._btnDelete=this._cardElement.querySelector(".cards__delete"),this._btnLike=this._cardElement.querySelector(".cards__like"),this._likesAmount=this._cardElement.querySelector(".cards__like-amount"),this._cardTitle.textContent=this._title,this._cardImage.src=this._imageUrl,this._cardImage.alt=this._title,this.setLikes(this._likes),this._setEventListeners(),this._cardElement}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var i=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._form=r,this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._submitButton=this._form.querySelector(this._submitButtonSelector)}var e,r;return e=t,(r=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideErrorMessage(t):this._showErrorMessage(t,t.validationMessage)}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._submitButton.disabled=!0,this._submitButton.classList.add(this._inactiveButtonClass)):(this._submitButton.disabled=!1,this._submitButton.classList.remove(this._inactiveButtonClass))}},{key:"_showErrorMessage",value:function(t,e){var r=this._form.querySelector(".".concat(t.id,"-error"));r.textContent=e,r.classList.add(this._errorClass),t.classList.add(this._inputErrorClass)}},{key:"_hideErrorMessage",value:function(t){var e=this._form.querySelector(".".concat(t.id,"-error"));e.textContent="",e.classList.remove(this._errorClass),t.classList.remove(this._inputErrorClass)}},{key:"_setEventListeners",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"resetValidation",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){t._hideErrorMessage(e)}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&o(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function u(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===a(o)?o:String(o)),n)}var o}var c=function(){function t(e,r){var n=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=n,this._container=document.querySelector(r)}var e,r;return e=t,(r=[{key:"addItemAppend",value:function(t){this._container.append(t)}},{key:"addItemPrepend",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}}])&&u(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==s(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===s(o)?o:String(o)),n)}var o}var f=function(){function t(e,r){var n=e.ESC_KEY,o=void 0===n?"Escape":n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._ESC_KEY=o,this._popup=document.querySelector(r),this._handleEscClose=this._handleEscClose.bind(this)}var e,r;return e=t,(r=[{key:"open",value:function(){this._popup.classList.add("popup_active"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_active"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){t.key===this._ESC_KEY&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._buttonClose=this._popup.querySelector(".popup__close"),this._buttonClose.addEventListener("click",this.close.bind(this)),this._popup.addEventListener("click",(function(e){e.target===e.currentTarget&&t.close()}))}}])&&l(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===p(o)?o:String(o)),n)}var o}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=b(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},h.apply(this,arguments)}function b(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=d(t)););return t}function v(t,e){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},v(t,e)}function m(t,e){if(e&&("object"===p(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}var _=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&v(t,e)}(a,t);var e,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=d(n);if(o){var r=d(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return m(this,t)});function a(t,e){var r,n=t.ESC_KEY,o=t.submitCallback;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,{ESC_KEY:n},e))._form=r._popup.querySelector(".popup__form"),r._inputList=r._form.querySelectorAll(".form__input"),r._submitCallback=o,r}return e=a,(r=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"setEventListeners",value:function(){var t=this;this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitCallback(t._getInputValues())})),h(d(a.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){this._form.reset(),h(d(a.prototype),"close",this).call(this)}}])&&y(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(f);function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function S(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==k(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===k(o)?o:String(o)),n)}var o}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=E(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},g.apply(this,arguments)}function E(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=j(t)););return t}function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}function C(t,e){if(e&&("object"===k(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}var L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}(a,t);var e,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=j(n);if(o){var r=j(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return C(this,t)});function a(t,e){var r,n=t.ESC_KEY;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,{ESC_KEY:n},e))._title=r._popup.querySelector(".popup__title"),r._image=r._popup.querySelector(".popup__image"),r}return e=a,(r=[{key:"open",value:function(t){var e=t.name,r=t.link;this._title.textContent=e,this._image.src=r,this._image.alt=e,g(j(a.prototype),"open",this).call(this)}}])&&S(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(f);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function P(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===O(o)?o:String(o)),n)}var o}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=T(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},I.apply(this,arguments)}function T(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=q(t)););return t}function U(t,e){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},U(t,e)}function R(t,e){if(e&&("object"===O(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function q(t){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},q(t)}var B=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&U(t,e)}(a,t);var e,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=q(n);if(o){var r=q(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return R(this,t)});function a(t,e){var r,n=t.ESC_KEY;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,{ESC_KEY:n},e))._form=r._popup.querySelector(".popup__form"),r}return e=a,(r=[{key:"setEventListeners",value:function(){var t=this;this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitCallback()})),I(q(a.prototype),"setEventListeners",this).call(this)}},{key:"setSubmitCallback",value:function(t){this._submitCallback=t}}])&&P(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(f);function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function x(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==D(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==D(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===D(o)?o:String(o)),n)}var o}var V=function(){function t(e){var r=e.userNameSelector,n=e.userJobSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userNameElement=document.querySelector(r),this._userJobElement=document.querySelector(n),this._userName=this._userNameElement.textContent,this._userJob=this._userJobElement.textContent}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{name:this._userName,about:this._userJob,avatar:"https://pictures.s3.yandex.net/frontend-developer/ava.jpg"}}},{key:"setUserInfo",value:function(t){var e=t.name,r=t.about;this._userNameElement.textContent=this._userName=e,this._userJobElement.textContent=this._userJob=r}}])&&x(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function K(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==A(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==A(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===A(o)?o:String(o)),n)}var o}var Y=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers,this._token=this._headers.authorization}var e,r;return e=t,(r=[{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:{authorization:this._token}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch(this._ifError)}},{key:"addCard",value:function(t){var e=t.name,r=t.link;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,link:r})}).then((function(t){return t.json()})).catch(this._ifError)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._token}}).catch(this._ifError)}},{key:"likeCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:this._token}}).then((function(t){return t.json()})).catch(this._ifError)}},{key:"unLikeCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:this._token}}).then((function(t){return t.json()})).catch(this._ifError)}},{key:"getUser",value:function(){return fetch("".concat(this._baseUrl,"/users/me "),{headers:{authorization:this._token}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch(this._ifError)}},{key:"setUser",value:function(t){var e=t.name,r=t.about;return fetch("".concat(this._baseUrl,"/users/me "),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,about:r})}).catch(this._ifError)}},{key:"ifError",value:function(t){console.log(t)}}])&&K(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),N="Escape",J=document.querySelector(".profile__btn-edit"),z=document.querySelector(".profile__btn-add"),M=document.querySelector(".profile__btn-avatar-edit"),H=document.forms.formEdit,$=document.forms.formAvatar,F=document.forms.formAdd,G={formSelector:".popup__form",inputSelector:".form__input",submitButtonSelector:".form__btn_type_submit",inactiveButtonClass:"form__btn_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__error_active"};function Q(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var W,X=new Y({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-59",headers:{authorization:"cb4b8bf9-d1cf-4125-b87a-d2721614cb5f","Content-Type":"application/json"}}),Z=new V({userNameSelector:".profile__title",userJobSelector:".profile__subtitle"});Promise.all([X.getInitialCards(),X.getUser()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,s=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);c=!0);}catch(t){s=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return u}}(e,r)||function(t,e){if(t){if("string"==typeof t)return Q(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Q(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];W=i._id,Z.setUserInfo(i),it.renderItems(o)})).catch((function(t){console.log(t)}));var tt=new _({ESC_KEY:N,submitCallback:function(t){X.setUser(t).then((function(e){if(!e.ok)return Promise.reject("Ошибка: ".concat(e.status));Z.setUserInfo(t)})).catch((function(t){console.log(t)})),tt.close()}},".popup_type_edit-form");tt.setEventListeners();var et=new _({ESC_KEY:N,submitCallback:function(t){X.addCard(t).then((function(t){it.addItemPrepend(st(t))})),et.close()}},".popup_type_add-form");et.setEventListeners();var rt=new _({ESC_KEY:N,submitCallback:{}},".popup_type_avatar-form");rt.setEventListeners();var nt=new L({ESC_KEY:N},".popup_type_image");nt.setEventListeners();var ot=new B({ESC_KEY:N},".popup_type_confirm");ot.setEventListeners();var it=new c({renderer:function(t){it.addItemAppend(st(t))}},".cards__list"),at=new i(G,F),ut=new i(G,H),ct=new i(G,$);function st(t){return new r({data:t,userId:W,handleImageClick:nt.open.bind(nt),handleDeleteClick:lt,handleLikeClick:ft,handleUnLikeClick:pt},"#card-template").generate()}function lt(){var t=this;ot.open(),ot.setSubmitCallback((function(){X.deleteCard(t.getId()).then((function(e){e.ok&&t._cardElement.remove()})),ot.close()}))}function ft(){var t=this;X.likeCard(this.getId()).then((function(e){t.setLikes(e.likes)}))}function pt(){var t=this;X.unLikeCard(this.getId()).then((function(e){t.setLikes(e.likes)}))}at.enableValidation(),ut.enableValidation(),ct.enableValidation(),M.addEventListener("click",(function(){ct.resetValidation(),rt.open()})),J.addEventListener("click",(function(){var t=Z.getUserInfo();tt.setInputValues(t),ut.resetValidation(),tt.open()})),z.addEventListener("click",(function(){at.resetValidation(),et.open()}))})();