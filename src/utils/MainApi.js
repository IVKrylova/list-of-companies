import { checkResponse } from './utils';
import { mainOptions } from './constants';

class MainApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  // метод получения компаний
  getCompanies(page) {
    return fetch(`${this.baseUrl}/companies?_page=${page}`, {
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
    .then(res => res.res)
  }

  // метод обновления данных компании
  updateCompany(data) {
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
    .then(res => res.res)
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
    .then(res => res.res)
  }

  // метод добавления новой компании
  addCompany(data) {
    return fetch(`${this.baseUrl}/companies`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: data.name,
        address: data.address,
      })
    })
    .then(checkResponse)
    .then(res => res.res)
  }

  // метод добавления нового сотрудника
  addCoworker(data) {
    return fetch(`${this.baseUrl}/coworkers`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: data.name,
        lastname: data.lastname,
        company: data.company,
        position: data.position,
      })
    })
    .then(checkResponse)
    .then(res => res.res)
  }

  // метод удаления компании
  deleteCompany(id) {
    return fetch(`${this.baseUrl}/companies/${id}`, {
      method: 'DELETE',
      headers: this.headers,
    })
    .then(checkResponse)
    .then(res => res.res)
  }

  // метод удаления сотрудника
  deleteCoworker(id) {
    return fetch(`${this.baseUrl}/coworkers/${id}`, {
      method: 'DELETE',
      headers: this.headers,
    })
    .then(checkResponse)
    .then(res => res.res)
  }
}

export const mainApi = new MainApi(mainOptions);
