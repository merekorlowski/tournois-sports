import {HttpClient} from 'aurelia-fetch-client';

import {Employe} from '../models/employe';

export class ServiceEmployes {
  constructor() {
    this.http = new HttpClient().configure(config => {
      config.withBaseUrl('http://localhost:3000/employes/');
    });
  }

  get(query, sort) {
    return this.http.fetch(`?query=${query}&sort=${sort}`).then(response => response.json()).then(data => {
      return data.map(employe => {
        return new Employe(employe);
      }) || [];
    });
  }

}
