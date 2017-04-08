import {HttpClient, json} from 'aurelia-fetch-client';

import {Saison} from '../models/saison';
import {Match} from '../models/match';

export class ServiceSaisons {
  constructor() {
    this.http = new HttpClient().configure(config => {
      config.withBaseUrl('http://localhost:3000/');
    });
  }

	/**
	 * Retourner les saisons d'une ligue
	 * @param {string} idligue 
	 */

  get(idligue) {
    return this.http
			.fetch(`saisons?idligue=${idligue}`)
			.then(response => response.json())
			.then(data => {
				return data.map(saison => {
					return new Saison(saison);
				}) || [];
			});
  }

	/**
	 * Ajouter un saison à une ligue
	 * @param {Saison} saison 
	 */

	ajouter(saison) {
    return this.http
			.fetch('saison', {
				method: 'post',
				body: json(saison)
			});
  }

	/**
	 * Modifier un saison d'une ligue
	 * @param {Saison} saison 
	 */

	modifierSaison(saison) {
    return this.http
			.fetch('saison', {
				method: 'put',
				body: json(saison)
			});
  }

	/**
	 * Retirer un saison d'une ligue
	 * @param {Saison} saison 
	 */

  retirer(saison) {
    return this.http
			.fetch('saison', {
				method: 'delete',
				body: json(saison)
			});
  }

	/**
	 * Retourner un saison
	 * @param {string} idsaison 
	 */

	getSaison(idsaison) {
    return this.http
			.fetch(`saison?idsaison=${idsaison}`)
			.then(response => response.json())
			.then(data => {
				return new Saison(data[0]);
			});
  }

	/**
	 * Retourner les matchs d'une saison
	 * @param {string} idsaison 
	 */

	getMatchs(idsaison) {
		return this.http
			.fetch(`saison/matchs?idsaison=${idsaison}`)
			.then(response => response.json())
			.then(data => {
				return data.map(match => {
					return new Match(match);
				}) || [];
			});
	}

	/**
	 * Ajouter un match à un saison
	 * @param {Match} match 
	 */

	ajouterMatch(match) {
		return this.http
			.fetch('saison/match', {
				method: 'post',
				body: json(match)
			});
	}

	/**
	 * Retirer un match d'une saison
	 * @param {Match} match 
	 */

	retirerMatch(match) {
		return this.http
			.fetch('saison/match', {
				method: 'delete',
				body: json(match)
			});
	}

}
