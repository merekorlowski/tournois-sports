import {inject} from 'aurelia-framework';

import {Equipe} from '../../models/equipe';
import {ServiceEquipes} from '../../services/equipes';

@inject(ServiceEquipes)
export class Equipes {
  constructor(serviceEquipes) {
    this.serviceEquipes = serviceEquipes;
  }

  activate(params, navigation) {
    this.query = '';
    this.sort = 'ASC';
    this.getEquipes();
  }

  getEquipes() {
    this.serviceEquipes.get(this.query, this.sort).then(equipes => {
      this.equipes = equipes;
    });  
  }

}
