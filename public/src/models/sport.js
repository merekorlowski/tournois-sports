
export class Sport {
  constructor(sport) {
    if (sport) {
      Object.assign(this, sport);
    } else {
      this.idsport = '';
      this.nom = '';
      this.nbrMinJoueurs = 0;
      this.nbrMaxJoueurs = 0;
    }
  }
}
