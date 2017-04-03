import {HttpClient} from 'aurelia-fetch-client';

import {Equipe} from '../models/equipe';

export class ServiceEquipes {
  constructor() {
    this.http = new HttpClient().configure(config => {
      config.withBaseUrl('http://localhost:3000/equipes/');
    });
  }

  get(query, sort) {
    return this.http.fetch(`?query=${query}&sort=${sort}`).then(response => response.json()).then(data => {
      return data.map(equipe => {
        return new Equipe(equipe);
      }) || [];
    });
  }

  delete(equipe) {
    return this.http.fetch('', {
      method: 'delete',
      body: json(equipe)
    });
  }

  post(equipe) {
    return this.http.fetch('', {
      method: 'post',
      body: json(equipe)
    });
  }

  put(equipe) {
    return this.http.fetch('', {
      method: 'put',
      body: json(equipe)
    });
  }

}
