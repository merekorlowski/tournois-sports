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
    this.getLigue(params.id);
  }

	detached() {
		// Remove listener to disable scroll
		window.removeEventListener('scroll', this.scrollTo);
	}

  getLigue(idligue) {
    this.serviceLigues.getLigue(idligue).then(ligue => {
      this.ligue = ligue;
			this.getSaisons(idligue);
			this.getEquipes(idligue);
    });
	}

	getSaisons(idligue) {
		this.serviceLigues.getSaisons(idligue).then(saisons => {
			this.saisons = saisons;
		});
	}

	getEquipes(idligue) {
		this.serviceLigues.getEquipes(idligue).then(equipes => {
			this.equipes = equipes;
		});
	}

	retirerSaison(index, idsaison) {
		this.serviceLigues.retirerSaison(idsaison).then(() => {
			this.saisons.splice(index, 1);
		});
  }

	retirerEquipe(index, equipe) {
		this.serviceLigues.retirerEquipe(equipe).then(() => {
			this.equipes.splice(index, 1);
		});
  }

	/**
	 * Ajouter un équipe
	 */

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

		// add listener to disable scroll
		window.removeEventListener('scroll', this.scrollTo);
	}

  ajouterEquipe() {
    this.serviceLigues.ajouterEquipe(this.nouveauEquipe).then(equipe => {
      this.ajoutEquipeAffiche = false;
      this.equipes.push(this.nouveauEquipe);
			this.nouveauEquipe = new Equipe();
			this.nouveauEquipe.idligue = this.ligue.idligue;
			
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
