export class Ligue {
  constructor(Ligue) {
    if (ligue) {
      Object.assign(this, ligue);
    } else {
      this.IDLeague = '';
      this.niveauDifficulte = '';
    }
  }
}
