export default class UserInfo {
  constructor({userName, userJob}) {
    this._userName = userName;
    this._userJob = userJob;

    this._userNameElement = document.querySelector('.profile__title');
    this._userJobElement = document.querySelector('.profile__subtitle');
  }

  getUserInfo() {
    return {
      userName: this._userName,
      userJob: this._userJob
    }
  }

  setUserInfo({userName, userJob}) {
    this._userName = userName;
    this._userJob = userJob;

    this._userNameElement.textContent = this._userName;
    this._userJobElement.textContent = this._userJob;
  }
}
