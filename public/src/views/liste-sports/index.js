import {inject} from 'aurelia-framework';

import {Sport} from '../../models/sport';
import {ServiceSports} from '../../services/sports';

@inject(ServiceSports)
export class ListeSports {
  constructor(serviceSports) {
    this.serviceSports = serviceSports;
  }

  activate(params, navigation) {
    this.query = '';
    this.sort = 'ASC';
		this.nouveauSport = new Sport();
		this.ajoutAffiche = false;
    this.getSports();
  }

	detached() {
		// Remove listener to disable scroll
		window.removeEventListener('scroll', this.scrollTo);
	}

  getSports() {
    this.serviceSports.get(this.query, this.sort).then(sports => {
      this.sports = sports;
    });
  }

	retirerSport(index, idsport) {
		this.serviceSports.retirerSport(idsport).then(() => {
      this.sports.splice(index, 1);
    });
	}

	/**
	 * Ajouter un sport
	 */

	afficherAjout() {
		this.ajoutAffiche = true;
		// add listener to disable scroll
		window.addEventListener('scroll', this.scrollTo);
	}

	cancelerAjout() {
		this.ajoutAffiche = false;
		this.nouveauSport = new Sport();
		// add listener to disable scroll
		window.removeEventListener('scroll', this.scrollTo);
	}

	ajouter() {
    this.serviceSports.ajouter(this.nouveauSport).then(sport => {
      this.ajoutAffiche = false;
      this.sports.push(this.nouveauSport);
    });
  }

	/**
	 * Modifier un sport
	 */

	afficherModification(sport) {
		this.modificationAffiche = true;
		this.sportAModifier = sport;
		// add listener to disable scroll
		window.addEventListener('scroll', this.scrollTo);
	}

	cancelerModification() {
		this.modificationAffiche = false;
		// add listener to disable scroll
		window.removeEventListener('scroll', this.scrollTo);
	}

	sauvegarder() {
		this.serviceSports.sauvegarder(this.sportAModifier).then(() => {
			this.modificationAffiche = false;
			// add listener to disable scroll
			window.removeEventListener('scroll', this.scrollTo);
		});
	}
	
	scrollTo() {
		window.scrollTo( 0, 0 );
	}

}
