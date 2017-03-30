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
    this.getLigues();
  }

  getLigues() {
    this.serviceLigues.get(this.query, this.sort).then(ligues => {
      this.ligues = ligues;
    });
  }

}
