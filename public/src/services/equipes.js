import {HttpClient} from 'aurelia-fetch-client';

import {Equipe} from '../models/equipe';
import {Usager} from '../models/usager';

export class ServiceEquipes {
  constructor() {
    this.http = new HttpClient().configure(config => {
      config.withBaseUrl('http://localhost:3000/');
    });
  }

  get(query, sort) {
    return this.http.fetch(`equipes?query=${query}&sort=${sort}`).then(response => response.json()).then(data => {
      return data.map(equipe => {
        return new Equipe(equipe);
      }) || [];
    });
  }

	getEquipe(idequipe) {
		return this.http.fetch(`equipe?idequipe=${idequipe}`).then(response => response.json()).then(data => {
      return new Equipe(data[0]);
    });
	}

	getJoueurs(idequipe) {
		return this.http.fetch(`equipe/joueurs?idequipe=${idequipe}`).then(response => response.json()).then(data => {
      return data.map(usager => {
        return new Usager(usager);
      }) || [];
    });
	}

	deleteJoueur(idusager) {
		return this.http.fetch('equipe/joueur', {
      method: 'delete',
      body: json(idusager)
    });
	}

}
