export class Usager {
  constructor(usager) {
    if (usager) {
      Object.assign(this, usager);
      this.sports = [];
      this.equipes = [];
      this.afficherProfile = false;
    } else {
      this.idusager = '';
      this.nom = '';
      this.prenom = '';
      this.courriel = '';
      this.numtel = '';
    }
  }

  getSports() {

  }

  getEquipes() {

  }

}
