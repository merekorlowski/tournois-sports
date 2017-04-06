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

  deleteMatch(match) {
    return this.http.fetch('match', {
      method: 'delete',
      body: json(match)
    });
  }

	getPoints(match, equipe) {
		return this.http.fetch(`match/equipe/points?idmatch=${match.idmatch}&idligue=${equipe.idligue}&nom=${equipe.nom}`).then(response => response.json()).then(data => {
			return data[0].ptsmarques;
    });
	}

}
