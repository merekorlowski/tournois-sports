import {HttpClient, json} from 'aurelia-fetch-client';

import {Usager} from '../models/usager';

export class ServiceUsagers {
  constructor() {
    this.http = new HttpClient().configure(config => {
      config.withBaseUrl('http://localhost:3000/usagers/');
    });
  }

  get(query, sort) {
    return this.http.fetch(`?query=${query}&sort=${sort}`).then(response => response.json()).then(data => {
      return data.map(usager => {
        return new Usager(usager);
      }) || [];
    });
  }

  delete(usager) {
    return this.http.fetch('', {
      method: 'delete',
      body: json(usager)
    });
  }

  post(usager) {
    return this.http.fetch('', {
      method: 'post',
      body: json(usager)
    });
  }

  put(usager) {
    return this.http.fetch('', {
      method: 'put',
      body: json(usager)
    });
  }

}
