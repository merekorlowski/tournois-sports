
export class Sport {
  constructor(sport) {
    if (sport) {
      Object.assign(this, sport);
    } else {
      this.idsport = '';
      this.nom = '';
			this.description = '';
      this.nbrminjoueurs = 0;
      this.nbrmaxjoueurs = 0;
    }
  }
}
