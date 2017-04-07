import {inject} from 'aurelia-framework';

import {ServiceSaisons} from '../../services/saisons';
import {ServiceMatchs} from '../../services/matchs';
import {ServiceLigues} from '../../services/ligues';
import {Match} from '../../models/match';
import {Equipe} from '../../models/equipe';

@inject(ServiceSaisons, ServiceMatchs, ServiceLigues)
export class SaisonView {
	constructor(serviceSaisons, serviceMatchs, serviceLigues) {
		this.serviceSaisons = serviceSaisons;
		this.serviceMatchs = serviceMatchs;
		this.serviceLigues = serviceLigues;
	}

	activate(params, navigation) {
		this.getSaison(params.id);
		this.nouveauMatch = new Match();
		this.nouveauMatch.idsaison = params.id;
	}

	detached() {
		// Remove listener to disable scroll
		window.removeEventListener('scroll', this.scrollTo);
	}

	getSaison(idsaison) {
		this.serviceSaisons.getSaison(idsaison).then(saison => {
			console.log(JSON.stringify(saison));
			this.saison = saison;
			this.title = `Saison ${saison.idsaison}`;
			this.getEquipes(saison.idligue);
			this.serviceSaisons.getMatchs(idsaison).then(matchs => {
				this.matchs = matchs;
				for (let match of this.matchs) {
					match.idsaison = idsaison;
					this.serviceMatchs.getEquipes(match.idmatch).then(equipes => {
						match.equipes = equipes;
						for (let equipe of match.equipes) {
							this.serviceMatchs.getPoints(match, equipe).then(points => {
								equipe.ptsmarques = points;
							});
						}
					});
				}
			});
		}); 
	}

	getEquipes(idligue) {
		this.serviceLigues.getEquipes(idligue).then(equipes => {
			this.equipes = equipes;
			this.equipeA = this.equipes[0];
			this.equipeB = this.equipes[1];
		});
	}

	retirerMatch(index, match) {
		this.serviceSaisons.retirerMatch(match).then(() => {
			this.matchs.splice(index, 1);
		}); 
	}

	/**
	 * Ajouter un match
	 */

	afficherAjoutMatch() {
		this.ajoutMatchAffiche = true;
		this.optionsAffiche = false;
		// add listener to disable scroll
		window.addEventListener('scroll', this.scrollTo);
	}

	cancelerAjoutMatch() {
		this.ajoutMatchAffiche = false;
		// add listener to disable scroll
		window.removeEventListener('scroll', this.scrollTo);
	}

	ajouterMatch() {
		this.serviceSaisons.ajouterMatch(this.nouveauMatch, this.equipeA, this.equipeB).then(() => {
			this.matchs.push(this.nouveauMatch);
			this.ajoutMatchAffiche = false;
			// add listener to disable scroll
			window.removeEventListener('scroll', this.scrollTo);
		});
	}

	/**
	 * Modifier le saison
	 */

	afficherModificationSaison() {
		this.modificationSaisonAffiche = true;
		this.optionsAffiche = false;
		// add listener to disable scroll
		window.addEventListener('scroll', this.scrollTo);
	}

	cancelerModificationSaison() {
		this.modificationSaisonAffiche = false;
		// add listener to disable scroll
		window.removeEventListener('scroll', this.scrollTo);
	}

	modifierSaison() {
		this.serviceSaisons.modifierSaison(this.saison).then(() => {
			this.modificationSaisonAffiche = false;
			// add listener to disable scroll
			window.removeEventListener('scroll', this.scrollTo);
		});
	}

	/**
	 * Modifier un match
	 */

	afficherModificationMatch(match) {
		this.matchAModifier = match;
		this.modificationMatchAffiche = true;
		// add listener to disable scroll
		window.addEventListener('scroll', this.scrollTo);
	}

	cancelerModificationMatch() {
		this.modificationMatchAffiche = false;
		// add listener to disable scroll
		window.removeEventListener('scroll', this.scrollTo);
	}

	modifierMatch() {
		this.serviceMatchs.modifierMatch(this.matchAModifier).then(() => {
			this.modificationMatchAffiche = false;
			// add listener to disable scroll
			window.removeEventListener('scroll', this.scrollTo);
		});
	}

	scrollTo() {
		window.scrollTo( 0, 0 );
	}

}
