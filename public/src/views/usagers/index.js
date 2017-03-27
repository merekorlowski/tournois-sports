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
    this.sort = 1;
    this.getUsagers();
  }

  getUsagers() {
    this.serviceUsagers.get(this.query, this.sort).then(usagers => {
      this.usagers = usagers;
      console.log(usagers);
    });
  }

}
