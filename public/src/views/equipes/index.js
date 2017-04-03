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
    this.sort = 1;
    this.nouveauEquipe = new Equipe();
    this.equipeAModifier = new Equipe();
    this.afficherModification = false;
    this.getEquipes();
  }

  getEquipes() {
    this.serviceEquipes.get(this.query, this.sort).then(equipes => {
      this.equipes = equipes;
    });  
  }

   retirer(index, equipe) {
    this..delete(equipe).then(() => {
      this.equipes.splice(index, 1);
    });
  }

  inscrire() {
    this.serviceEquipes.post(this.nouveauEquipe).then(equipe => {
      this.afficherInscription = false;
      this.equipe.push(this.nouveauEquipe);
    });
  }

  modifier(equipe) {
    this.afficherModification = true;
    this.equipeAModifier = equipe;
    window.onwheel = preventDefault;  
    document.onkeydown  = preventDefaultForScrollKeys;
  }

  sauvegarder() {
    this.serviceEquipes.put(this.equipeAModifier).then(equipe => {
      this.afficherModification = false;
    });
  }

}
