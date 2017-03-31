import {HttpClient} from 'aurelia-fetch-client';

import {Ligue} from '../models/ligue';
import {Gestionnaire} from '../models/gestionnaire';
import {Arbitre} from '../models/arbitre';

export class ServiceLigues {
  constructor() {
    this.http = new HttpClient().configure(config => {
      config.withBaseUrl('http://localhost:3000/ligues/');
    });
  }

  get(idsport) {
    return this.http.fetch(`?idsport=${idsport}`).then(response => response.json()).then(data => {
      return data.map(ligue => {
        return new Ligue(ligue);
      }) || [];
    });
  }

  getGestionnaires(idligue) {
    return this.http.fetch(`gestionnaires?idligue=${idligue}`).then(response => response.json()).then(data => {
      return data.map(gestionnaire => {
        return new Gestionnaire(gestionnaire);
      }) || [];
    });
  }

  getArbitres(idligue) {
    return this.http.fetch(`arbitres?idligue=${idligue}`).then(response => response.json()).then(data => {
      return data.map(arbitre => {
        return new Arbitre(arbitre);
      }) || [];
    });
  }

}
