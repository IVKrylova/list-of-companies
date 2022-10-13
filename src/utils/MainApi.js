import { checkResponse } from './utils';
import { mainOptions } from './constants';
import { LIMIT } from './constants';

class MainApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  getCompanies(page) {
    return fetch(`${this.baseUrl}/companies?_page=${page}&_limit=${LIMIT}`, {
      method: 'GET',
      headers: this.headers,
    })
    .then(checkResponse)
  }

  getCoworkers() {
    return fetch(`${this.baseUrl}/coworkers`, {
      method: 'GET',
      headers: this.headers,
    })
    .then(checkResponse)
    .then(res => res.res)
  }

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

  deleteCompany(id) {
    return fetch(`${this.baseUrl}/companies/${id}`, {
      method: 'DELETE',
      headers: this.headers,
    })
    .then(checkResponse)
    .then(res => res.res)
  }

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
