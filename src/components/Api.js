export default class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
    this._token = this._headers.authorization;
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: this._token
      }
    })
      .then( this._checkResult, this._ifError )
  }

  addCard({name, link}) {
    return fetch(`${this._baseUrl}/cards`,{
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        link
      })
    })
    .then( this._checkResult, this._ifError )
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
      },
    })
    .catch(this._ifError)
  }

  likeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        authorization: this._token,
      },
    })
    .then( this._checkResult, this._ifError )
  }

  unLikeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
      },
    })
    .then( this._checkResult, this._ifError )
  }

  getUser() {
    return fetch(`${this._baseUrl}/users/me `, {
        headers: {
          authorization: this._token
        }
      })
      .then( this._checkResult, this._ifError )
  }

  setUser({name, about}) {
    return fetch(`${this._baseUrl}/users/me`,{
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        about
      })
    })
    .catch( this._ifError )
  }

  setAvatar(avatarData) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(avatarData)
    })
    .then( this._checkResult, this._ifError )
  }

  _ifError( err ) {
    console.log(err)
  }

  _checkResult(result) {
    if (result.ok) {
      return result.json();
    }

    return Promise.reject(`Ошибка: ${result.status}`);
  }

}
