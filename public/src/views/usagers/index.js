import {inject} from 'aurelia-framework';
import {Usager} from '../../models/usager';
import {ServiceUsagers} from '../../services/usagers';

@inject(ServiceUsagers)
export class Usagers {
  constructor(serviceUsagers) {
    this.serviceUsagers = serviceUsagers;
  }

  activate(params, navigation) {
    this.query = 'Merek';
    this.usagers = this.getUsagers();
  }

  getUsagers() {
    this.serviceUsagers.get(this.query);
  }

}
