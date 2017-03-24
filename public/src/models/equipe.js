import {Usager} from './usager';

export class Equipe {
  constructor(IDEquipe, nom, nbrMinJoueurs, nbrMaxJoueurs, statutDeForfait, IDUsager, IDLeague) {
    this.IDEquipe = IDEquipe;
    this.nom = nom;
    this.nbrMaxJoueurs = nbrMaxJoueurs;
    this.nbrMinJoueurs = nbrMinJoueurs;
    this.statutDeForfait = statutDeForfait;
    this.IDUsager = IDUsager;
    this.IDLeague = IDLeague;
  }

  get joueurs() {
    return [
      new Usager('U1', 'Merek', 'Orlowski', 'merekorlowski@gmail.com', '705-471-8331'),
      new Usager('U1', 'Merek', 'Orlowski', '', '705-471-8331'),
      new Usager('U1', 'Merek', 'Orlowski', 'merekorlowski@gmail.com', '705-471-8331'),
      new Usager('U1', 'Merek', 'Orlowski', 'merekorlowski@gmail.com', '')
    ]
  }

}
