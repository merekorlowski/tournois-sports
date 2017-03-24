import {Employe} from '../../models/employe';

export class Employes {
  activate(params, navigation) {
    this.title = navigation.title;
    this.filtrer = '';
    this.montrerAjouterEmploye = false;
    this.nouveauEmploye = new Employe();
    this.employes = this.getEmployes();
  }

  getEmployes() {
    return [
      new Employe({
        IDEmploye: 'E1',
        prenom: 'Merek',
        nom: 'Orlowski',
        role: 'Gestionnaire'
      }),
      new Employe({
        IDEmploye: 'E2',
        prenom: 'Karim',
        nom: 'Ben Hassine',
        role: 'Arbitre'
      }),
      new Employe({
        IDEmploye: 'E1',
        prenom: 'Merek',
        nom: 'Orlowski',
        role: 'Gestionnaire'
      }),
      new Employe({
        IDEmploye: 'E1',
        prenom: 'Merek',
        nom: 'Orlowski',
        role: 'Gestionnaire'
      }),
      new Employe({
        IDEmploye: 'E1',
        prenom: 'Merek',
        nom: 'Orlowski',
        role: 'Gestionnaire'
      }),
      new Employe({
        IDEmploye: 'E1',
        prenom: 'Merek',
        nom: 'Orlowski',
        role: 'Gestionnaire'
      }),
      new Employe({
        IDEmploye: 'E1',
        prenom: 'Merek',
        nom: 'Orlowski',
        role: 'Gestionnaire'
      }),
      new Employe({
        IDEmploye: 'E1',
        prenom: 'Merek',
        nom: 'Orlowski',
        role: 'Gestionnaire'
      })
    ];
  }

  

  ajouterEmploye() {
    if (this.montrerAjouterEmploye) {
      this.montrerAjouterEmploye = false;
      this.employes.push(this.nouveauEmploye);
    } else {
      this.montrerAjouterEmploye = true;
    }
  }

  retirerEmploye(index) {
    this.employes.splice(index, 1);
  }

}
