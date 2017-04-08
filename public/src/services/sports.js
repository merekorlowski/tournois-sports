import {HttpClient, json} from 'aurelia-fetch-client';

import {Sport} from '../models/sport';
import {Ligue} from '../models/ligue';
import {Tournoi} from '../models/tournoi';

export class ServiceSports {
  constructor() {
    this.http = new HttpClient().configure(config => {
      config.withBaseUrl('http://localhost:3000/');
    });
  }

	/**
	 * Retourner tous les sports
	 * @param {string} query 
	 * @param {string} sort 
	 */

  get(query, sort) {
    return this.http
			.fetch(`sports?query=${query}&sort=${sort}`)
			.then(response => response.json())
			.then(data => {
				return data.map(sport => {
					return new Sport(sport);
				}) || [];
			});
  }

	/**
	 * Ajouter un sport
	 * @param {Sport} sport 
	 */

  ajouter(sport) {
    return this.http.fetch('sport', {
      method: 'post',
      body: json(sport)
    });
  }

	/**
	 * Modifier un sport
	 * @param {Sport} sport 
	 */

  modifier(sport) {
    return this.http.fetch('sport', {
      method: 'put',
      body: json(sport)
    });
  }

	/**
	 * Retirer un sport
	 * @param {Sport} sport 
	 */

	retirerSport(sport) {
		return this.http.fetch('sport', {
      method: 'delete',
      body: json(sport)
    });
	}

}
