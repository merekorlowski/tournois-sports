import {inject} from 'aurelia-framework';

import {Ligue} from '../../models/ligue';
import {ServiceLigues} from '../../services/ligues';

@inject(ServiceLigues)
export class Ligues {
  constructor(serviceLigues) {
    this.serviceLigues = serviceLigues;
  }

  activate(params, navigation) {
    this.query = '';
    this.sort = 'ASC';
    this.title = `Ligues de ${params.id}`;
		this.ajoutAffiche = false;
		this.idsport = params.id;
    this.getLigues(params.id);
  }

	detached() {
		// Remove listener to disable scroll
		window.removeEventListener('scroll', this.scrollTo);
	}

  getLigues() {
    this.serviceLigues.get(this.query, this.sort, this.idsport).then(ligues => {
      this.ligues = ligues;
    });
  }

	afficherAjout() {
		this.nouveauLigue = new Ligue();
		this.nouveauLigue.niveaudifficulte = 'C';
		this.nouveauLigue.idsport = this.idsport; 
		this.ajoutAffiche = true;
		// add listener to disable scroll
		window.addEventListener('scroll', this.scrollTo);
	}

	cancelerAjout() {
		this.ajoutAffiche = false;
		// add listener to disable scroll
		window.removeEventListener('scroll', this.scrollTo);
	}

	ajouter() {
    this.serviceLigues.ajouter(this.nouveauLigue).then(() => {
      this.ajoutAffiche = false;
      this.ligues.push(this.nouveauLigue);
    });
  }

  retirer(index, ligue) {
    this.serviceLigues.retirer(ligue).then(() => {
      this.ligues.splice(index, 1);
    });
  }

	scrollTo() {
		window.scrollTo( 0, 0 );
	}

}
