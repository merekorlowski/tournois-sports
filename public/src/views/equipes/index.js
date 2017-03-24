import {Equipe} from '../../models/equipe';

export class Equipes {
  activate(params, navigation) {
    this.equipes = this.getEquipes();
  }

  getEquipes() {
    return [
      new Equipe('E1', 'Equipe 1', 6, 12, false, 'U1', 'L1'),
      new Equipe('E2', 'Equipe 2', 6, 10, false, 'U2', 'L2'),
      new Equipe('E3', 'Equipe 3', 1, 1, false, 'U3', 'L1'),
      new Equipe('E4', 'Equipe 4', 10, 15, false, 'U4', 'L2')
    ];
  }

}
