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
		this.serviceSports.deleteSport(idsport).then(() => {
      this.sports.splice(index, 1);
    });
	}

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
    this.serviceSports.post(this.nouveauSport).then(sport => {
      this.ajoutAffiche = false;
      this.sports.push(this.nouveauSport);
    });
  }

	afficherModification(sport) {
		this.modificationAffiche = true;
		this.sportAModifier = sport;
	}

	cancelerModification() {
		this.modificationAffiche = false;
		// add listener to disable scroll
		window.removeEventListener('scroll', this.scrollTo);
	}

	modifier() {
		this.serviceSports.put(this.sportAModifier).then(() => {
			this.modificationAffiche = false;
		});
	}
	
	scrollTo() {
		window.scrollTo( 0, 0 );
	}

}
