import {HttpClient, json} from 'aurelia-fetch-client';

import {Employe} from '../models/employe';
import {Equipe} from '../models/equipe';
import {Tournoi} from '../models/tournoi';
import {Match} from '../models/match';
import {Usager} from '../models/usager';

export class ServiceRequetes {
  constructor() {
    this.http = new HttpClient().configure(config => {
      config.withBaseUrl('http://localhost:3000/');
    });
  }

	/**
	 * Retourner les résultats d'une requête
	 * @param {number} numero 
	 */

  executer(numero) {
		if (numero < 10) {
			return this.http
				.fetch(`requete?numero=${numero}`)
				.then(response => response.json())
				.then(data => {
					return data.map(element => {
						return element[`requete_${numero}`];
					}) || [];
				});
		} else {
			if (numero === 10) {
				return this.http
					.fetch('requete', {
						method: 'post',
						body: json({numero: numero})
					}).then(response => response.json()).then(data => {
						return [data.message];
					});
			} else if (numero === 11) {
				return this.http
					.fetch('requete', {
						method: 'delete',
						body: json({numero: numero})
					}).then(response => response.json()).then(data => {
						return [data.message];
					});
			} else {
				return this.http
					.fetch('requete', {
						method: 'put',
						body: json({numero: numero})
					}).then(response => response.json()).then(data => {
						return [data.message];
					});
			}
		}
	}

}
