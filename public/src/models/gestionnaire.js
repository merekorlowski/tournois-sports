import {Employe} from './employe';

export class Gestionnaire extends Employe {
  constructor(gestionnaire) {
    if (!gestionnaire) {
      super('', '', '', '');
      this.numTel = '';
      this.courriel = '';
    } else {
      Object.assign(this, gestionnaire);
    }
  }
}
