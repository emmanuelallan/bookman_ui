export default class BookmanAPI {
  static BASE_URL = 'https://bookman-api.herokuapp.com/api/v1';

  // create a store
  static createStore = async (storeInfo) => {
    await fetch(`${this.BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(storeInfo),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch((e) => console.log(e));
  };

  // login store
  static loginStore = async (storeInfo) => {
    await fetch(`${this.BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(storeInfo),
    })
      .then((res) => {
        if (res.ok) {
          return res.json().then((data) => data);
        }

        return [];
      })
      .catch((e) => e);
  };

  static getToken = async () => {
    const token = await JSON.parse(localStorage.getItem('bookman_token'));

    if (token) {
      return token;
    }

    return [];
  };
}
