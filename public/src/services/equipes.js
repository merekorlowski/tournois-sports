import {HttpClient, json} from 'aurelia-fetch-client';

import {Equipe} from '../models/equipe';
import {Usager} from '../models/usager';

export class ServiceEquipes {
  constructor() {
    this.http = new HttpClient().configure(config => {
      config.withBaseUrl('http://localhost:3000/');
    });
  }

	/**
	 * Retourner tous les équipes
	 * @param {string} query 
	 * @param {string} sort 
	 */

  get(query, sort) {
    return this.http
			.fetch(`equipes?query=${query}&sort=${sort}`)
			.then(response => response.json())
			.then(data => {
				return data.map(equipe => {
					return new Equipe(equipe);
				}) || [];
    	});
  }

	/**
	 * Retourner une équipe
	 * @param {Equipe} equipe 
	 */

	getEquipe(equipe) {
		return this.http
			.fetch(`equipe?idligue=${equipe.idligue}&nom=${equipe.nom}`)
			.then(response => response.json())
			.then(data => {
				return new Equipe(data[0]);
			});
	}

	/**
	 * Retourner le gérant d'une équipe
	 * @param {Equipe} equipe 
	 */

	getGerant(equipe) {
		return this.http
			.fetch(`equipe/gerant?idligue=${equipe.idligue}&nom=${equipe.nom}`)
			.then(response => response.json())
			.then(data => {
				return new Usager(data[0]);
			});
	}

	/**
	 * Retourner tous les équipes d'une ligue
	 * @param {Equipe} equipe 
	 * @param {string} query 
	 * @param {string} sort 
	 */

	getJoueurs(equipe, query, sort) {
		return this.http
			.fetch(`equipe/joueurs?idligue=${equipe.idligue}&nom=${equipe.nom}&query=${query}&sort=${sort}`)
			.then(response => response.json())
			.then(data => {
				return data.map(usager => {
					return new Usager(usager);
				}) || [];
			});
	}

	/**
	 * Retourer tous les usagers qui ne sont pas dans une équipe d'une ligue donnée
	 * @param {string} idligue 
	 */

	getUsagersLibres(idligue) {
		return this.http
			.fetch(`equipe/usagers-libres?idligue=${idligue}`)
			.then(response => response.json())
			.then(data => {
				return data.map(usager => {
					return new Usager(usager);
				}) || [];
			});
	}

	/**
	 * Modifier une équipe
	 * @param {Equipe} equipe 
	 */
	
	modifier(equipe) {
		return this.http.fetch('equipe', {
      method: 'put',
      body: json(equipe)
    });
	}

	/**
	 * Retirer une équipe
	 * @param {Equipe} equipe 
	 */

	retirer(equipe) {
		return this.http.fetch('equipe', {
      method: 'post',
      body: json(equipe)
    });
	}

	/**
	 * Ajouter un joueur à une équipe
	 * @param {string} idusager 
	 * @param {Equipe} equipe 
	 */

	ajouter(idusager, equipe) {
		return this.http.fetch('equipe/joueur', {
      method: 'post',
      body: json({
				idusager: idusager,
				equipe: equipe
			})
    });
	}

	/**
	 * Retirer un joueur d'une équipe
	 * @param {Usager} joueur 
	 */

	retirerJoueur(joueur) {
		return this.http.fetch('equipe/joueur', {
      method: 'delete',
      body: json(joueur)
    });
	}

}
