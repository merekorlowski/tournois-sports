import {HttpClient, json} from 'aurelia-fetch-client';

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

  retirer(saison) {
    return this.http.fetch('saison', {
      method: 'delete',
      body: json(saison)
    });
  }

	ajouter(saison) {
    return this.http.fetch('saison', {
      method: 'post',
      body: json(saison)
    });
  }

	modifier(saison) {
    return this.http.fetch('saison', {
      method: 'put',
      body: json(saison)
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

	ajouterMatch(match, equipeA, equipeB) {
		return this.http.fetch('saison/match', {
			method: 'post',
			body: json({
				match: match,
				equipeA: equipeA,
				equipeB: equipeB
			})
		});
	}

	retirerMatch(match) {
		return this.http.fetch('saison/match', {
			method: 'delete',
			body: json(match)
		});
	}

}
