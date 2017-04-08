import {HttpClient, json} from 'aurelia-fetch-client';

import {Match} from '../models/match';
import {Equipe} from '../models/equipe';

export class ServiceMatchs {
  constructor() {
    this.http = new HttpClient().configure(config => {
      config.withBaseUrl('http://localhost:3000/');
    });
  }

	/**
	 * Retourner les équipes d'un match
	 * @param {string} idmatch 
	 */

  getEquipes(idmatch) {
    return this.http
			.fetch(`match/equipes?idmatch=${idmatch}`)
			.then(response => response.json())
			.then(data => {
				return data.map(equipe => {
					return new Equipe(equipe);
				}) || [];
			});
  }

	/**
	 * Retirer un match
	 * @param {Match} match 
	 */

  retirerMatch(match) {
    return this.http.fetch('match', {
      method: 'delete',
      body: json(match)
    });
  }

	/**
	 * Modifier un match
	 * @param {Match} match 
	 */

	modifierMatch(match) {
    return this.http.fetch('match', {
      method: 'put',
      body: json(match)
    });
  }

	/**
	 * Retourner les points d'une équipe dans un match
	 * @param {Match} match 
	 * @param {Equipe} equipe 
	 */

	getPoints(match, equipe) {
		return this.http
			.fetch(`match/equipe/points?idmatch=${match.idmatch}&idligue=${equipe.idligue}&nom=${equipe.nom}`)
			.then(response => response.json())
			.then(data => {
				return data[0].ptsmarques;
			});
	}

}
