
export class Employe {
  constructor(employe) {
    if (employe) {
      Object.assign(this, employe);
    } else {
      this.IDEmploye = '';
      this.prenom = '';
      this.nom = '';
      this.role = '';
    }
  }
}
