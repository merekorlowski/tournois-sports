import {HttpClient, json} from 'aurelia-fetch-client';

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

	getGerant(idequipe) {
		return this.http.fetch(`equipe/gerant?idequipe=${idequipe}`).then(response => response.json()).then(data => {
      return new Usager(data[0]);
    });
	}

	getJoueurs(idequipe) {
		return this.http.fetch(`equipe/joueurs?idequipe=${idequipe}`).then(response => response.json()).then(data => {
      return data.map(usager => {
        return new Usager(usager);
      }) || [];
    });
	}

	getUsagersLibres(idligue) {
		return this.http.fetch(`equipe/usagers-libres?idligue=${idligue}`).then(response => response.json()).then(data => {
      return data.map(usager => {
        return new Usager(usager);
      }) || [];
    });
	}

	post(idusager, idequipe) {
		return this.http.fetch('equipe/joueur', {
      method: 'post',
      body: json({
				idusager: idusager,
				idequipe: idequipe
			})
    });
	}

	put(equipe) {
		return this.http.fetch('equipe', {
      method: 'put',
      body: json(equipe)
    });
	}

	delete(equipe) {
		return this.http.fetch('equipe', {
      method: 'post',
      body: json(equipe)
    });
	}

	deleteJoueur(idusager) {
		return this.http.fetch('equipe/joueur', {
      method: 'delete',
      body: json(idusager)
    });
	}

}
