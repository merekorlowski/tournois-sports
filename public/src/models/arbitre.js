import {Employe} from './employe';

export class Arbitre extends Employe {
  constructor(arbitre) {
    if (!arbitre) {
      super('', '', '', '');
      this.nbrAnnees = 0;
      this.sports = [];
    } else {
      Object.assign(this, arbitre);
    }
  }
}
