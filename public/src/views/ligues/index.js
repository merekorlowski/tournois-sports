import {inject} from 'aurelia-framework';

import {Ligue} from '../../models/ligue';
import {ServiceLigues} from '../../services/ligues';

@inject(ServiceLigues)
export class Ligues {
  constructor(serviceLigues) {
    this.serviceLigues = serviceLigues;
  }

  activate(params, navigation) {
    this.query = '';
    this.sort = 1;
    this.title = `Ligues de ${params.id}`;
    this.getLigues(params.id);
  }

  getLigues(sport) {
    this.serviceLigues.get(this.query, this.sort, sport).then(ligues => {
      this.ligues = ligues;
    });
  }

  retirer(index, ligue) {
    this.serviceLigues.delete(ligue).then(() => {
      this.ligues.splice(index, 1);
    });
  }

}
