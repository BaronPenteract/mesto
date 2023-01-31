export default class UserInfo {
  constructor({userNameSelector, userJobSelector}) {
    this._userNameElement = document.querySelector(userNameSelector);
    this._userJobElement = document.querySelector(userJobSelector);

    this._userName = this._userNameElement.textContent;
    this._userJob = this._userJobElement.textContent;
  }

  getUserInfo() {
    return {
      name: this._userName,
      about: this._userJob,
      avatar: "https://pictures.s3.yandex.net/frontend-developer/ava.jpg",
      _id: "ef5f7423f7f5e22bef4ad607",
      cohort: "local"
    }
  }

  setUserInfo({name, about}) {
    this._userNameElement.textContent = this._userName = name;
    this._userJobElement.textContent = this._userJob = about;
  }
}
