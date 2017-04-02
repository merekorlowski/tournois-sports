import {HttpClient} from 'aurelia-fetch-client';

import {Saison} from '../models/saison';

export class ServiceSaisons {
  constructor() {
    this.http = new HttpClient().configure(config => {
      config.withBaseUrl('http://localhost:3000/');
    });
  }

  get(idligue) {
    return this.http.fetch(`saisons?idligue=${idligue}`).then(response => response.json()).then(data => {
      return data.map(saison => {
        return new Saison(saison);
      }) || [];
    });
  }

  delete(ligue) {
    return this.http.fetch('saison', {
      method: 'delete',
      body: json(ligue)
    });
  }

}
