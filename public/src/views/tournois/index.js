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
    this.getTournois();
  }

  getTournois() {
    this.serviceTournois.get(this.query, this.sort).then(tournois => {
      this.tournois = tournois;
    });
  }

}
