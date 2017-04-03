export class Ligue {
  constructor(ligue) {
    if (ligue) {
      Object.assign(this, ligue);
    } else {
      this.idligue = '';
      this.niveaudifficulte = '';
    }
  }
}
