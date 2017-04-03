import {HttpClient} from 'aurelia-fetch-client';

import {Saison} from '../models/saison';
import {Match} from '../models/match';

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

	getSaison(idsaison) {
    return this.http.fetch(`saison?idsaison=${idsaison}`).then(response => response.json()).then(data => {
      return new Saison(data[0]);
    });
  }

	getMatchs(idsaison) {
		return this.http.fetch(`saison/matchs?idsaison=${idsaison}`).then(response => response.json()).then(data => {
      return data.map(match => {
        return new Match(match);
      }) || [];
    });
	}

}
