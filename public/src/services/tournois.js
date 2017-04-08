import {HttpClient, json} from 'aurelia-fetch-client';

import {Tournoi} from '../models/tournoi';
import {Commanditaire} from '../models/commanditaire';
import {Match} from '../models/match';
import {Equipe} from '../models/equipe';

export class ServiceTournois {
  constructor() {
    this.http = new HttpClient().configure(config => {
      config.withBaseUrl('http://localhost:3000/');
    });
  }

	/**
	 * Retourner tous les tournois d'un sport
	 * @param {string} query 
	 * @param {string} sort 
	 * @param {string} idsport 
	 */

  get(query, sort, idsport) {
    return this.http
			.fetch(`tournois?query=${query}&sort=${sort}&idsport=${idsport}`)
			.then(response => response.json())
			.then(data => {
				return data.map(tournoi => {
					return new Tournoi(tournoi);
				}) || [];
			});
  }

	/**
	 * Retourner un tournoi
	 * @param {string} idtournoi 
	 */

  getTournoi(idtournoi) {
    return this.http
			.fetch(`tournoi?idtournoi=${idtournoi}`)
			.then(response => response.json())
			.then(data => {
				console.log(JSON.stringify(data[0]));
				return new Tournoi(data[0]);
			});
  }

	/**
	 * Ajouter un tournoi
	 * @param {Tournoi} tournoi 
	 */

	ajouter(tournoi) {
		return this.http.fetch('tournoi', {
      method: 'post',
      body: json(tournoi)
    });
	}

	/**
	 * Retirer un tournoi
	 * @param {Tournoi} tournoi 
	 */

	retirer(tournoi) {
		return this.http.fetch('tournoi', {
      method: 'delete',
      body: json(tournoi)
    });
	}

	/**
	 * Modifier un tournoi
	 * @param {string} tournoi 
	 */

	modifier(tournoi) {
		return this.http.fetch('tournoi', {
      method: 'put',
      body: json(tournoi)
    });
	}

	/**
	 * Retourner tous les commanditaires d'un tournoi
	 * @param {string} idtournoi 
	 */

  getCommanditaires(idtournoi) {
    return this.http
			.fetch(`tournoi/commanditaires?idtournoi=${idtournoi}`)
			.then(response => response.json())
			.then(data => {
				return data.map(commanditaire => {
					return new Commanditaire(commanditaire);
				}) || [];
    });
  }

	/**
	 * Retourner tous les matchs d'un tournoi
	 * @param {string} idtournoi 
	 */

  getMatchs(idtournoi) {
    return this.http
			.fetch(`tournoi/matchs?idtournoi=${idtournoi}`)
			.then(response => response.json())
			.then(data => {
				return data.map(match => {
					return new Match(match);
				}) || [];
			});
  }

	/**
	 * Retourner la contribution d'un commanditaire pour un tournoi
	 * @param {string} idtournoi 
	 * @param {string} idcommanditaire 
	 */

  getContribution(idtournoi, idcommanditaire) {
    return this.http
			.fetch(`tournoi/commanditairetournoi?idtournoi=${idtournoi}&idcommanditaire=${idcommanditaire}`)
			.then(response => response.json())
			.then(data => {
				return data[0].contribution;
			});
  }

	/**
	 * Retourner les fonds accumulés d'un tournoi
	 * @param {string} idtournoi 
	 */

  getFondsAccumules(idtournoi) {
    return this.http
			.fetch(`tournoi/fondsaccumules?idtournoi=${idtournoi}`)
			.then(response => response.json())
			.then(data => {
				return data[0].fondsaccumules;
			});
  }

	/**
	 * Ajouter un match à un tournoi
	 * @param {Match} match 
	 */

	ajouterMatch(match) {
    return this.http.fetch('tournoi/match', {
      method: 'post',
      body: json(match)
    });
  }

	/**
	 * Retirer un match d'un tournoi
	 * @param {Match} match 
	 */

  retirerMatch(match) {
    return this.http.fetch('tournoi/match', {
      method: 'delete',
      body: json(match)
    });
  }

	/**
	 * Ajouter un commanditaire à un tournoi
	 * @param {Commanditaire} commanditaire 
	 */

	ajouterCommanditaire(commanditaire) {
		return this.http.fetch('tournoi/commanditaire', {
      method: 'post',
      body: json(commanditaire)
    });
	}

	/**
	 * Modifier un commanditaire d'un tournoi
	 * @param {Commanditaire} commanditaire 
	 */

	modifierCommanditaire(commanditaire) {
		return this.http.fetch('tournoi/commanditaire', {
      method: 'put',
      body: json(commanditaire)
    });
	}

	/**
	 * Retirer un commanditaire d'un tournoi
	 * @param {Commanditaire} commanditaire 
	 */
  
  retirerCommanditaire(commanditaire) {
    return this.http.fetch('tournoi/commanditaire', {
      method: 'delete',
      body: json(commanditaire)
    });
  }

	/**
	 * Retourner tous les equipes d'un tournoi
	 * @param {string} idtournoi 
	 */

	getEquipesTournoi(idtournoi) {
		return this.http
			.fetch(`tournoi/equipes?idtournoi=${idtournoi}`)
			.then(response => response.json())
			.then(data => {
				return data.map(equipe => {
					return new Equipe(equipe);
				}) || [];
			});
	}

}
