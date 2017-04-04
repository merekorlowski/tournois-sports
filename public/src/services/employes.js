import {HttpClient, json} from 'aurelia-fetch-client';

import {Employe} from '../models/employe';

export class ServiceEmployes {
  constructor() {
    this.http = new HttpClient().configure(config => {
      config.withBaseUrl('http://localhost:3000/');
    });
  }

  get(query, sort) {
    return this.http.fetch(`employes?query=${query}&sort=${sort}`).then(response => response.json()).then(data => {
      return data.map(employe => {
        return new Employe(employe);
      }) || [];
    });
  }

	delete(idemploye) {
    return this.http.fetch('employe', {
      method: 'delete',
      body: json(idemploye)
    });
  }

  post(employe) {
    return this.http.fetch('employe', {
      method: 'post',
      body: json(employe)
    });
  }

	put(employe) {
    return this.http.fetch('employe', {
      method: 'put',
      body: json(employe)
    });
  }

}
