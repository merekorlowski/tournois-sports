import {HttpClient, json} from 'aurelia-fetch-client';

import {Usager} from '../models/usager';

export class ServiceUsagers {
  constructor() {
    this.http = new HttpClient().configure(config => {
      config.withBaseUrl('http://localhost:3000/');
    });
  }

  get(query, sort) {
    return this.http.fetch(`usagers?query=${query}&sort=${sort}`).then(response => response.json()).then(data => {
      return data.map(usager => {
        return new Usager(usager);
      }) || [];
    });
  }

	getGerantsLibres() {
		return this.http.fetch(`usagers/gerants`).then(response => response.json()).then(data => {
      return data.map(gerant => {
        return new Usager(gerant);
      }) || [];
    });
	}

  delete(usager) {
    return this.http.fetch('usager', {
      method: 'delete',
      body: json(usager)
    });
  }

  post(usager) {
    return this.http.fetch('usager', {
      method: 'post',
      body: json(usager)
    });
  }

  put(usager) {
    return this.http.fetch('usager', {
      method: 'put',
      body: json(usager)
    });
  }

}
