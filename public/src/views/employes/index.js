import {inject} from 'aurelia-framework';

import {Employe} from '../../models/employe';
import {ServiceEmployes} from '../../services/employes';

@inject(ServiceEmployes)
export class Employes {
  constructor(serviceEmployes) {
    this.serviceEmployes = serviceEmployes;
  }

  activate(params, navigation) {
    this.query = '';
    this.sort = 'ASC';
		this.nouveauEmploye = new Employe();
		this.employeAModifier = new Employe();
    this.getEmployes();
  }

	detached() {
		// Remove listener to disable scroll
		window.removeEventListener('scroll', this.scrollTo);
	}

  getEmployes() {
    this.serviceEmployes.get(this.query, this.sort).then(employes => {
      this.employes = employes;
    });  
  }

	retirer(index, idemploye) {
    this.serviceEmployes.retirer(idemploye).then(() => {
      this.employes.splice(index, 1);
    });
  }

	/**
	 * Ajouter un employé
	 */

	afficherAjout() {
		this.ajoutAffiche = true;
		// add listener to disable scroll
		window.addEventListener('scroll', this.scrollTo);
	}

	cancelerAjout() {
		this.ajoutAffiche = false;
		this.nouveauEmploye = new Employe();
		// add listener to disable scroll
		window.removeEventListener('scroll', this.scrollTo);
	}

  ajouter() {
    this.serviceEmployes.ajouter(this.nouveauEmploye).then(employe => {
      this.ajoutAffiche = false;
      this.employes.push(this.nouveauEmploye);
			// Remove listener to disable scroll
			window.removeEventListener('scroll', this.scrollTo);
    });
  }

	/**
	 * Modifier un employé
	 */

	afficherModification(employe) {
		this.modificationAffiche = true;
		this.employeAModifier = employe;
		// add listener to disable scroll
		window.addEventListener('scroll', this.scrollTo);
	}

	cancelerModification() {
		this.modificationAffiche = false;
		// add listener to disable scroll
		window.removeEventListener('scroll', this.scrollTo);
	}

	modifier() {
		this.serviceEmployes.modifier(this.employeAModifier).then(() => {
			this.modificationAffiche = false;
		});
	}

	scrollTo() {
		window.scrollTo( 0, 0 );
	}

}
