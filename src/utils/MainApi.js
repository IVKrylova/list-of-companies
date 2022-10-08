import { checkResponse } from './utils';
import { mainOptions } from './constants';

class MainApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  // метод получения компаний
  getCompanies() {
    return fetch(`${this.baseUrl}/companies`, {
      method: 'GET',
      headers: this.headers,
    })
    .then(checkResponse)
  }

  // метод получения сотрудников
  getCoworkers() {
    return fetch(`${this.baseUrl}/coworkers`, {
      method: 'GET',
      headers: this.headers,
    })
    .then(checkResponse)
  }

  // метод обновления данных компании
  updateCompanie(data) {
    return fetch(`${this.baseUrl}/companies/${data.id}`, {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify({
        name: data.name,
        address: data.address,
        id: data.id,
      })
    })
    .then(checkResponse)
  }

  // метод обновления данных сотрудника
  updateCoworker(data) {
    return fetch(`${this.baseUrl}/coworkers/${data.id}`, {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify({
        name: data.name,
        lastname: data.lastname,
        id: data.id,
        position: data.position,
        company: data.company,
      })
    })
    .then(checkResponse)
  }
}

export const mainApi = new MainApi(mainOptions);
