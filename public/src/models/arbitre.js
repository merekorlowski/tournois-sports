import {Employe} from './employe';

export class Arbitre extends Employe {
  constructor(arbitre) {
    if (arbitre) {
      Object.assign(this, arbitre);
    } else {
      super('', '', '', '');
      this.nbrAnnees = 0;
      this.sports = [];
    }
  }
}
