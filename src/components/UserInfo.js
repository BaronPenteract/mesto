export default class UserInfo {
  constructor({userNameSelector, userJobSelector, userAvatarSelector}) {
    this._userNameElement = document.querySelector(userNameSelector);
    this._userJobElement = document.querySelector(userJobSelector);
    this._userAvatarElement = document.querySelector(userJobSelector);
    this._userAvatarElement = document.querySelector(userAvatarSelector);

    this._userName = this._userNameElement.textContent;
    this._userJob = this._userJobElement.textContent;
    //this._avatar = this._userAvatarElement.textContent;
  }

  getUserInfo() {
    return {
      name: this._userName,
      about: this._userJob,
      avatar: this._avatar,
    }
  }

  setUserInfo({name, about}) {
    if(name) {
      this._userNameElement.textContent = this._userName = name;
    }

    if(about) {
      this._userJobElement.textContent = this._userJob = about;
    }
  }

  setAvatar(avatarData) {
    if(avatarData.avatar) {
      this._userAvatarElement.src = avatarData.avatar;
    }
  }
}
