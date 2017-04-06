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

	getEquipe(equipe) {
		return this.http.fetch(`equipe?idligue=${equipe.idligue}&nom=${equipe.nom}`).then(response => response.json()).then(data => {
      return new Equipe(data[0]);
    });
	}

	getGerant(equipe) {
		return this.http.fetch(`equipe/gerant?idligue=${equipe.idligue}&nom=${equipe.nom}`).then(response => response.json()).then(data => {
      return new Usager(data[0]);
    });
	}

	getJoueurs(equipe) {
		return this.http.fetch(`equipe/joueurs?idligue=${equipe.idligue}&nom=${equipe.nom}`).then(response => response.json()).then(data => {
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

	ajouter(idusager, equipe) {
		return this.http.fetch('equipe/joueur', {
      method: 'post',
      body: json({
				idusager: idusager,
				equipe: equipe
			})
    });
	}
	
	modifier(equipe) {
		return this.http.fetch('equipe', {
      method: 'put',
      body: json(equipe)
    });
	}

	retirer(equipe) {
		return this.http.fetch('equipe', {
      method: 'post',
      body: json(equipe)
    });
	}

	retirerJoueur(idusager) {
		return this.http.fetch('equipe/joueur', {
      method: 'delete',
      body: json(idusager)
    });
	}

}
