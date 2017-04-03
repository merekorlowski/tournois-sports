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
    this.sort = 1;
		this.nouveauSport = new Sport();
		this.afficherInscription = false;
    this.getSports();
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

	ajouter() {
    this.serviceSports.post(this.nouveauSport).then(sport => {
      this.afficherInscription = false;
      this.sports.push(this.nouveauSport);
    });
  }

}
