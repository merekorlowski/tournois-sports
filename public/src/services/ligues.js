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

  get(query, sort, idsport) {
    return this.http.fetch(`ligues?query=${query}&sort=${sort}&idsport=${idsport}`).then(response => response.json()).then(data => {
      return data.map(ligue => {
        return new Ligue(ligue);
      }) || [];
    });
  }

	getLigue(idligue) {
		return this.http.fetch(`ligue?idligue=${idligue}`).then(response => response.json()).then(data => {
      return new Ligue(data[0]);
    });
	}

	ajouter(ligue) {
		return this.http.fetch('ligue', {
      method: 'post',
      body: json(ligue)
    });
	}

  retirer(ligue) {
    return this.http.fetch('ligue', {
      method: 'delete',
      body: json(ligue)
    });
  }

	getEquipes(idligue) {
		return this.http.fetch(`ligue/equipes?idligue=${idligue}`).then(response => response.json()).then(data => {
      return data.map(equipe => {
        return new Equipe(equipe);
      }) || [];
    });
	}

	getSaisons(idligue) {
		return this.http.fetch(`ligue/saisons?idligue=${idligue}`).then(response => response.json()).then(data => {
      return data.map(equipe => {
        return new Saison(equipe);
      }) || [];
    });
	}

	modifierLigue(ligue) {
		return this.http.fetch('ligue', {
      method: 'put',
      body: json(ligue)
    });
	}

 	retirerEquipe(equipe) {
    return this.http.fetch('ligue/equipe', {
      method: 'delete',
      body: json(equipe)
    });
  }

	ajouterEquipe(equipe) {
		return this.http.fetch('ligue/equipe', {
      method: 'post',
      body: json(equipe)
    });
	}
	
	retirerSaison(saison) {
    return this.http.fetch('ligue/saison', {
      method: 'delete',
      body: json(saison)
    });
  }

	ajouterSaison(saison) {
    return this.http.fetch('ligue/saison', {
      method: 'post',
      body: json(saison)
    });
  }

  getGestionnaires(idligue) {
    return this.http.fetch(`ligue/gestionnaires?idligue=${idligue}`).then(response => response.json()).then(data => {
      return data.map(gestionnaire => {
        return new Gestionnaire(gestionnaire);
      }) || [];
    });
  }

  getArbitres(idligue) {
    return this.http.fetch(`ligue/arbitres?idligue=${idligue}`).then(response => response.json()).then(data => {
      return data.map(arbitre => {
        return new Arbitre(arbitre);
      }) || [];
    });
  }

}
