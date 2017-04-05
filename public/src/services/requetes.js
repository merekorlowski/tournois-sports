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

  execute(numero) {
		if (numero < 10) {
			return this.http.fetch(`requete?numero=${numero}`).then(response => response.json()).then(data => {
				return data.map(element => {
					if (numero === 1) {
						return new Equipe(element);
					} else if (numero === 2 || numero === 4 || numero === 7 || numero === 8 || numero === 9) {
						return element;
					} else if(numero === 3) {
						return new Tournoi(element);
					} else if (numero === 5 || numero === 6) {
						return new Usager(element);
					}
				}) || [];
			});
		} else {
			if (numero === 10) {
				return this.http.fetch('requete', {
					method: 'post',
					body: json({numero: numero})
				});
			} else if (numero === 11) {
				return this.http.fetch('requete', {
					method: 'delete',
					body: json({numero: numero})
				});
			} else {
				return this.http.fetch('requete', {
					method: 'put',
					body: json({numero: numero})
				});
			}
		}
	}

}
