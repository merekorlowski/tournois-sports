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
		this.nouveauUsager.estGerant = false;
    this.usagerAModifier = new Usager();
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
    this.serviceUsagers.retirer(usager).then(() => {
      this.usagers.splice(index, 1);
    });
  }

	/**
	 * Ajouter un usager
	 */

	afficherAjout() {
		this.ajoutAffiche = true;
		// add listener to disable scroll
		window.addEventListener('scroll', this.scrollTo);
	}

	cancelerAjout() {
		this.ajoutAffiche = false;
		this.nouveauUsager = new Usager();
		this.nouveauUsager.estGerant = false;
		// add listener to disable scroll
		window.removeEventListener('scroll', this.scrollTo);
	}

	ajouter() {
    this.serviceUsagers.ajouter(this.nouveauUsager).then(usager => {
      this.ajoutAffiche = false;
      this.usagers.push(this.nouveauUsager);
			
			// Remove listener to disable scroll
			window.removeEventListener('scroll', this.scrollTo);
    });
  }

	/**
	 * Modifier un usager
	 */

	afficherModification(usager) {
    this.modificationAffiche = true;
    this.usagerAModifier = usager;
		// add listener to disable scroll
		window.addEventListener('scroll', this.scrollTo);
  }

	cancelerModification() {
		this.modificationAffiche = false;
		// add listener to disable scroll
		window.removeEventListener('scroll', this.scrollTo);
	}

  modifier() {
    this.serviceUsagers.modifier(this.usagerAModifier).then(usager => {
      this.modificationAffiche = false;
			// add listener to disable scroll
			window.removeEventListener('scroll', this.scrollTo);
    });
  }

	scrollTo() {
		window.scrollTo( 0, 0 );
	}


}
