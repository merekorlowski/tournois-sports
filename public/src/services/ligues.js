import {HttpClient} from 'aurelia-fetch-client';

import {Ligue} from '../models/ligue';

export class ServiceLigues {
  constructor() {
    this.http = new HttpClient().configure(config => {
      config.withBaseUrl('http://localhost:3000/ligues/');
    });
  }

  get(query, sort) {
    return this.http.fetch(`?query=${query}&sort=${sort}`).then(response => response.json()).then(data => {
      return data.map(ligue => {
        return new Ligue(ligue);
      }) || [];
    });
  }

}
