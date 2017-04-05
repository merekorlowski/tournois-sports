import {inject} from 'aurelia-framework';

import {ServiceLigues} from '../../services/ligues';
import {ServiceUsagers} from '../../services/usagers';
import {Equipe} from '../../models/equipe';

@inject(ServiceLigues, ServiceUsagers)
export class LigueView {
  constructor(serviceLigues, serviceUsagers) {
    this.serviceLigues = serviceLigues;
		this.serviceUsagers = serviceUsagers;
  }

  activate(params, navigation) {
    this.title = `Ligue ${params.id}`;
		this.nouveauEquipe = new Equipe();
		this.nouveauEquipe.idligue = params.id;
		this.nouveauEquipe.statutdeforfait = false;
    this.getLigue(params.id);
  }

	detached() {
		// Remove listener to disable scroll
		window.removeEventListener('scroll', this.scrollTo);
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

	afficherAjoutEquipe() {
		this.ajoutEquipeAffiche = true;
		// add listener to disable scroll
		window.addEventListener('scroll', this.scrollTo);
		this.serviceUsagers.getGerantsLibres().then(gerants => {
			this.gerants = gerants;
		});
	}

	cancelerAjoutEquipe() {
		this.ajoutEquipeAffiche = false;
		this.nouveauEquipe = new Equipe();
		this.nouveauEquipe.idligue = this.ligue.idligue;
		this.nouveauEquipe.statutdeforfait = false;

		// add listener to disable scroll
		window.removeEventListener('scroll', this.scrollTo);
	}

  ajouterEquipe() {
    this.serviceLigues.postEquipe(this.nouveauEquipe).then(equipe => {
      this.ajoutEquipeAffiche = false;
      this.equipes.push(this.nouveauEquipe);
			this.nouveauEquipe = new Equipe();
			this.nouveauEquipe.idligue = this.ligue.idligue;
			this.nouveauEquipe.statutdeforfait = false;
			
			// Remove listener to disable scroll
			window.removeEventListener('scroll', () => {
				window.scrollTo( 0, 0 );
			});
    });
  }

	scrollTo() {
		window.scrollTo( 0, 0 );
	}

}
