import {HttpClient} from 'aurelia-fetch-client';

import {Tournoi} from '../models/tournoi';

export class ServiceTournois {
  constructor() {
    this.http = new HttpClient().configure(config => {
      config.withBaseUrl('http://localhost:3000/tournois/');
    });
  }

  get(query, sort) {
    return this.http.fetch(`?query=${query}&sort=${sort}`).then(response => response.json()).then(data => {
      return data.map(tournoi => {
        return new Tournoi(tournoi);
      }) || [];
    });
  }

}
