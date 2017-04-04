import {inject} from 'aurelia-framework';

import {Usager} from '../../models/usager';
import {ServiceUsagers} from '../../services/usagers';

@inject(ServiceUsagers)
export class Usagers {
  constructor(serviceUsagers) {
    this.serviceUsagers = serviceUsagers;
  }

  activate(params, navigation) {
    this.query = '';
    this.sort = 'ASC';
    this.nouveauUsager = new Usager();
    this.usagerAModifier = new Usager();
    this.afficherModification = false;
    this.getUsagers();
  }

	detached() {
		// Remove listener to disable scroll
		window.removeEventListener('scroll', this.scrollTo);
	}

  getUsagers() {
    this.serviceUsagers.get(this.query, this.sort).then(usagers => {
      this.usagers = usagers;
    });
  }

  retirer(index, usager) {
    this.serviceUsagers.delete(usager).then(() => {
      this.usagers.splice(index, 1);
    });
  }

	afficherInscription() {
		this.inscriptionAffiche = true;
		// add listener to disable scroll
		window.addEventListener('scroll', this.scrollTo);
	}

	cancelerInscription() {
		this.inscriptionAffiche = false;
		this.nouveauUsager = new Usager();
		// add listener to disable scroll
		window.removeEventListener('scroll', this.scrollTo);
	}

  inscrire() {
    this.serviceUsagers.post(this.nouveauUsager).then(usager => {
      this.inscriptionAffiche = false;
      this.usagers.push(this.nouveauUsager);
			
			// Remove listener to disable scroll
			window.removeEventListener('scroll', this.scrollTo);
    });
  }

  modifier(usager) {
    this.afficherModification = true;
    this.usagerAModifier = usager;
  }

  sauvegarder() {
    this.serviceUsagers.put(this.usagerAModifier).then(usager => {
      this.afficherModification = false;
    });
  }

	scrollTo() {
		window.scrollTo( 0, 0 );
	}


}
