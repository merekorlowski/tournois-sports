import {HttpClient, json} from 'aurelia-fetch-client';

import {Tournoi} from '../models/tournoi';
import {Commanditaire} from '../models/commanditaire';
import {Saison} from '../models/saison';
import {Match} from '../models/match';
import {Equipe} from '../models/equipe';

export class ServiceTournois {
  constructor() {
    this.http = new HttpClient().configure(config => {
      config.withBaseUrl('http://localhost:3000/');
    });
  }

  get(query, sort, idsport) {
    return this.http.fetch(`tournois?query=${query}&sort=${sort}&idsport=${idsport}`).then(response => response.json()).then(data => {
      return data.map(tournoi => {
        return new Tournoi(tournoi);
      }) || [];
    });
  }

  getTournoi(idtournoi) {
    return this.http.fetch(`tournoi?idtournoi=${idtournoi}`).then(response => response.json()).then(data => {
      console.log(JSON.stringify(data[0]));
      return new Tournoi(data[0]);
    });
  }

  getCommanditaires(idtournoi) {
    return this.http.fetch(`tournoi/commanditaires?idtournoi=${idtournoi}`).then(response => response.json()).then(data => {
      return data.map(commanditaire => {
        return new Commanditaire(commanditaire);
      }) || [];
    });
  }

  getMatchs(idtournoi) {
    return this.http.fetch(`tournoi/matchs?idtournoi=${idtournoi}`).then(response => response.json()).then(data => {
      return data.map(match => {
        return new Match(match);
      }) || [];
    });
  }

  getContribution(idtournoi, idcommanditaire) {
    return this.http.fetch(`tournoi/commanditairetournoi?idtournoi=${idtournoi}&idcommanditaire=${idcommanditaire}`).then(response => response.json()).then(data => {
      return data[0].contribution;
    });
  }

  getFondsAccumules(idtournoi) {
    return this.http.fetch(`tournoi/fondsaccumules?idtournoi=${idtournoi}`).then(response => response.json()).then(data => {
      return data[0].sum;
    });
  }

	ajouterMatch(match) {
    return this.http.fetch('tournoi/match', {
      method: 'post',
      body: json(match)
    });
  }

  retirerMatch(match) {
    return this.http.fetch('tournoi/match', {
      method: 'delete',
      body: json(match)
    });
  }

	ajouterCommanditaire(commanditaire) {
		return this.http.fetch('tournoi/commanditaire', {
      method: 'post',
      body: json(commanditaire)
    });
	}

	modifierCommanditaire(commanditaire) {
		return this.http.fetch('tournoi/commanditaire', {
      method: 'put',
      body: json(commanditaire)
    });
	}
  
  retirerCommanditaire(commanditaire) {
    return this.http.fetch('tournoi/commanditaire', {
      method: 'delete',
      body: json(commanditaire)
    });
  }

  getEquipes(idmatch) {
    return this.http.fetch(`match/equipes?idmatch=${idmatch}`).then(response => response.json()).then(data => {
      return data.map(equipe => {
        return new Equipe(equipe);
      }) || [];
    });
  }

	getEquipesTournoi(idtournoi) {
		return this.http.fetch(`tournoi/equipes?idtournoi=${idtournoi}`).then(response => response.json()).then(data => {
      return data.map(equipe => {
        return new Equipe(equipe);
      }) || [];
    });
	}

  getPoints(idmatch, idligue, nom) {
    return this.http.fetch(`match/equipe/points?idmatch=${idmatch}&idligue=${idligue}&nom=${nom}`).then(response => response.json()).then(data => {
      return data[0].ptsmarques;
    });
  }

	ajouter(tournoi) {
		return this.http.fetch('tournoi', {
      method: 'post',
      body: json(tournoi)
    });
	}

	retirer(tournoi) {
		return this.http.fetch('tournoi', {
      method: 'delete',
      body: json(tournoi)
    });
	}

	modifier(tournoi) {
		return this.http.fetch('tournoi', {
      method: 'put',
      body: json(tournoi)
    });
	}

}
