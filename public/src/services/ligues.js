import {HttpClient, json} from 'aurelia-fetch-client';

import {Ligue} from '../models/ligue';
import {Gestionnaire} from '../models/gestionnaire';
import {Arbitre} from '../models/arbitre';
import {Equipe} from '../models/equipe';
import {Saison} from '../models/saison';

export class ServiceLigues {
  constructor() {
    this.http = new HttpClient().configure(config => {
      config.withBaseUrl('http://localhost:3000/');
    });
  }

	/**
	 * Retourner tous les ligues d'une sport
	 * @param {string} query 
	 * @param {string} sort 
	 * @param {string} idsport 
	 */

  get(query, sort, idsport) {
    return this.http
			.fetch(`ligues?query=${query}&sort=${sort}&idsport=${idsport}`)
			.then(response => response.json())
			.then(data => {
				return data.map(ligue => {
					return new Ligue(ligue);
				}) || [];
    });
  }

	/**
	 * Retourner un ligue
	 * @param {string} idligue 
	 */

	getLigue(idligue) {
		return this.http
			.fetch(`ligue?idligue=${idligue}`)
			.then(response => response.json())
			.then(data => {
				return new Ligue(data[0]);
			});	
	}

	/**
	 * Ajouter une ligue
	 * @param {Ligue} ligue 
	 */

	ajouter(ligue) {
		return this.http.fetch('ligue', {
      method: 'post',
      body: json(ligue)
    });
	}

	/**
	 * Modifier une ligue
	 * @param {Ligue} ligue 
	 */

	modifierLigue(ligue) {
		return this.http.fetch('ligue', {
      method: 'put',
      body: json(ligue)
    });
	}

	/**
	 * Retirer une ligue 
	 * @param {Ligue} ligue 
	 */

  retirer(ligue) {
    return this.http.fetch('ligue', {
      method: 'delete',
      body: json(ligue)
    });
  }

	/**
	 * Retourner tous les equipes d'une ligue
	 * @param {string} idligue 
	 */

	getEquipes(idligue) {
		return this.http
			.fetch(`ligue/equipes?idligue=${idligue}`)
			.then(response => response.json())
			.then(data => {
				return data.map(equipe => {
					return new Equipe(equipe);
				}) || [];
			});
	}

	/**
	 * Retourner tous les saisons d'une ligue
	 * @param {string} idligue 
	 */

	getSaisons(idligue) {
		return this.http
			.fetch(`ligue/saisons?idligue=${idligue}`)
			.then(response => response.json())
			.then(data => {
				return data.map(equipe => {
					return new Saison(equipe);
				}) || [];
			});
	}

	/**
	 * Ajouter une equipe
	 * @param {Equipe} equipe
	 */

	ajouterEquipe(equipe) {
		return this.http.fetch('ligue/equipe', {
      method: 'post',
      body: json(equipe)
    });
	}

	/**
	 * Retirer une equipe
	 * @param {Equipe} equipe
	 */

 	retirerEquipe(equipe) {
    return this.http.fetch('ligue/equipe', {
      method: 'delete',
      body: json(equipe)
    });
  }

	/**
	 * Ajouter une saison
	 * @param {saison} saison 
	 */

	ajouterSaison(saison) {
    return this.http.fetch('ligue/saison', {
      method: 'post',
      body: json(saison)
    });
  }

	/**
	 * Retirer une saison
	 * @param {Saison} saison 
	 */
	
	retirerSaison(saison) {
    return this.http.fetch('ligue/saison', {
      method: 'delete',
      body: json(saison)
    });
  }

	/**
	 * Retourner tous les gestionnaires d'une ligue
	 * @param {string} idligue 
	 */

  getGestionnaires(idligue) {
    return this.http
			.fetch(`ligue/gestionnaires?idligue=${idligue}`)
			.then(response => response.json())
			.then(data => {
				return data.map(gestionnaire => {
					return new Gestionnaire(gestionnaire);
				}) || [];
			});
  }
	
	/**
	 * Retourner tous les arbitres d'une ligue
	 * @param {string} idligue 
	 */

  getArbitres(idligue) {
    return this.http
			.fetch(`ligue/arbitres?idligue=${idligue}`)
			.then(response => response.json())
			.then(data => {
				return data.map(arbitre => {
					return new Arbitre(arbitre);
				}) || [];
    });
  }

}
