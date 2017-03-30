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
    this.nouveauUsager = new Usager();
    this.usagerAModifier = new Usager();
    this.afficherModification = false;
    this.getUsagers();
  }

  getUsagers() {
    this.serviceUsagers.get(this.query, this.sort).then(usagers => {
      this.usagers = usagers;
    });
  }

  retirer(index, usager) {
    this.serviceUsagers.delete(usager).then(() => {
      this.usagers.splice(index, 1);
    });
  }

  inscrire() {
    this.serviceUsagers.post(this.nouveauUsager).then(usager => {
      this.afficherInscription = false;
      this.usagers.push(this.nouveauUsager);
    });
  }

  modifier(usager) {
    this.afficherModification = true;
    this.usagerAModifier = usager;
    window.onwheel = preventDefault;  
    document.onkeydown  = preventDefaultForScrollKeys;
  }

  sauvegarder() {
    this.serviceUsagers.put(this.usagerAModifier).then(usager => {
      this.afficherModification = false;
    });
  }

}
