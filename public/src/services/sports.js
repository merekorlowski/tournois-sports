import {HttpClient, json} from 'aurelia-fetch-client';

import {Sport} from '../models/sport';
import {Ligue} from '../models/ligue';
import {Tournoi} from '../models/tournoi';

export class ServiceSports {
  constructor() {
    this.http = new HttpClient().configure(config => {
      config.withBaseUrl('http://localhost:3000/sports/');
    });
  }

  get(query, sort) {
    return this.http.fetch(`?query=${query}&sort=${sort}`).then(response => response.json()).then(data => {
      return data.map(sport => {
        return new Sport(sport);
      }) || [];
    });
  }

  delete(sport) {
    return this.http.fetch('', {
      method: 'delete',
      body: json(sport)
    });
  }

  post(sport) {
    return this.http.fetch('', {
      method: 'post',
      body: json(sport)
    });
  }

  put(sport) {
    return this.http.fetch('', {
      method: 'put',
      body: json(sport)
    });
  }

}
