export class Usager {
  constructor(usager) {
    if (usager) {
      Object.assign(this, usager);
    } else {
      this.idusager = '';
      this.nom = '';
      this.prenom = '';
      this.courriel = '';
      this.numtel = '';
    }
  }
}
