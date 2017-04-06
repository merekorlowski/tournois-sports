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
    this.sort = 'ASC';
    this.title = `Tournois de ${params.id}`;
		this.idsport = params.id;
    this.getTournois(params.id);
  }

  getTournois() {
    this.serviceTournois.get(this.query, this.sort, this.idsport).then(tournois => {
      this.tournois = tournois;
    });
  }

  retirer(index, tournoi) {
    this.serviceTournois.retirer(tournoi).then(() => {
      this.tournois.splice(index, 1);
    });
  }

}
