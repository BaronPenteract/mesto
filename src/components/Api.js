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
      .then( res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch( err => {
        console.log(err)
      })
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
    .then( res => res.json())
    .catch( err => {
      console.log(err)
    })
  }

  deleteCard(cardId) {
    console.log(`Card ${cardId} deleted`);
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
      },
    })
    .catch( err => {
      console.log(err)
    })
  }

  getUser() {
    return fetch(`${this._baseUrl}/users/me `, {
      headers: {
        authorization: this._token
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch( err => {
        console.log(err)
      })
  }

  setUser({name, about}) {
    return fetch(`${this._baseUrl}/users/me `,{
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
    .catch( err => {
      console.log(err)
    })
  }

}
