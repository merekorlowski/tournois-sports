import {inject} from 'aurelia-framework';

import {Tournoi} from '../../models/tournoi';
import {ServiceTournois} from '../../services/tournois';

@inject(ServiceTournois)
export class Tournois {
  constructor(serviceTournois) {
    this.serviceTournois = serviceTournois;
  }

  activate(params, navigation) {
    this.query = '';
    this.sort = 1;
    this.title = `Tournois de ${params.id}`;
    this.getTournois(params.id);
  }

  getTournois(idsport) {
    this.serviceTournois.get(this.query, this.sort, idsport).then(tournois => {
      this.tournois = tournois;
    });
  }

}
