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
      headers: this.headers
    })
    .then(checkResponse)
  }

  // метод получения сотрудников
  getCoworkers() {
    return fetch(`${this.baseUrl}/coworkers`, {
      method: 'GET',
      headers: this.headers
    })
    .then(checkResponse)
  }
}

export const mainApi = new MainApi(mainOptions);
