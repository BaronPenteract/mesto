export default class UserInfo {
  constructor({userNameSelector, userJobSelector}) {
    this._userNameElement = document.querySelector(userNameSelector);
    this._userJobElement = document.querySelector(userJobSelector);

    this._userName = this._userNameElement.textContent;
    this._userJob = this._userJobElement.textContent;
  }

  getUserInfo() {
    return {
      userName: this._userName,
      userJob: this._userJob
    }
  }

  setUserInfo({userName, userJob}) {
    this._userNameElement.textContent = this._userName = userName;
    this._userJobElement.textContent = this._userJob = userJob;
  }
}
