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
    this.getSports();
  }

  getSports() {
    this.serviceSports.get(this.query, this.sort).then(sports => {
      this.sports = sports;
    });
  }

}
