export class Tournoi {
  constructor(tournoi) {
    if (tournoi) {
      Object.assign(this, tournoi);
    } else {
      this.IDTournoi = ''; 
      this.oeuvreCharite = ''; 
      this.fondsAccumules = 0; 
      this.dateDebut = '';
      this.dateFin = '';
      this.IDSport = '';
    }
  }

  getSport() {
    
  }

  getMatchs() {

  }

  getCommanditaires() {

  }

  getEquipes() {
    
  }

}
