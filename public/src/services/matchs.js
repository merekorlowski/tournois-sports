import {HttpClient, json} from 'aurelia-fetch-client';

import {Match} from '../models/match';
import {Equipe} from '../models/equipe';

export class ServiceMatchs {
  constructor() {
    this.http = new HttpClient().configure(config => {
      config.withBaseUrl('http://localhost:3000/');
    });
  }

  getEquipes(idmatch) {
    return this.http.fetch(`match/equipes?idmatch=${idmatch}`).then(response => response.json()).then(data => {
      return data.map(equipe => {
        return new Equipe(equipe);
      }) || [];
    });
  }

  deleteMatch(idmatch) {
    return this.http.fetch('match', {
      method: 'delete',
      body: json(idmatch)
    });
  }

	getPoints(idmatch, idequipe) {
		return this.http.fetch(`match/equipe/points?idmatch=${idmatch}&idequipe=${idequipe}`).then(response => response.json()).then(data => {
			return data[0].nbrpoints;
    });
	}

}
