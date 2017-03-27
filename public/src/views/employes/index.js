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
    this.sort = 1;
    this.getEmployes();
  }

  getEmployes() {
    this.serviceEmployes.get(this.query, this.sort).then(employes => {
      this.employes = employes;
    });  
  }

}
