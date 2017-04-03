import {inject} from 'aurelia-framework';

import {ServiceLigues} from '../../services/ligues';

@inject(ServiceLigues)
export class LigueView {
  constructor(serviceLigues) {
    this.serviceLigues = serviceLigues;
  }

  activate(params, navigation) {
    this.title = `Ligue ${params.id}`;
    this.getLigue(params.id);
  }

  getLigue(idligue) {
    this.serviceLigues.getLigue(idligue).then(ligue => {
      this.ligue = ligue;
			this.serviceLigues.getSaisons(idligue).then(saisons => {
				this.saisons = saisons;
			});
			this.serviceLigues.getEquipes(idligue).then(equipes => {
				this.equipes = equipes;
			});
    });
	}

	retirerSaison(index, idsaison) {
		this.serviceLigues.deleteSaison(idsaison).then(() => {
			this.saisons.splice(index, 1);
		});
  }

	retirerEquipe(index, idequipe) {
		this.serviceLigues.deleteEquipe(idequipe).then(() => {
			this.equipes.splice(index, 1);
		});
  }

}
