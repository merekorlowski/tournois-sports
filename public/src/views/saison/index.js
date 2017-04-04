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
		this.equipeA = new Equipe();
		this.equipeB = new Equipe();
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
							this.serviceMatchs.getPoints(match.idmatch, equipe.idequipe).then(points => {
								equipe.nbrpoints = points;
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
		});
	}

	retirerMatch(index, idmatch) {
		this.serviceSaisons.deleteMatch(idmatch).then(() => {
			this.matchs.splice(index, 1);
		}); 
	}

	ajouter() {
		console.log(JSON.stringify(this.equipeA));
		this.serviceSaisons.postMatch(this. nouveauMatch, this.equipeA, this.equipeB).then(() => {
			this.ajoutAffiche = false;
			this.nouveauMatch = new Match();
			this.equipeA = new Equipe();
			this.equipeB = new Equipe();
			// add listener to disable scroll
			window.removeEventListener('scroll', this.scrollTo);
		});
	}

	afficherAjout() {
		this.ajoutAffiche = true;
		// add listener to disable scroll
		window.addEventListener('scroll', this.scrollTo);
	}

	cancelerAjout() {
		this.ajoutAffiche = false;
		this.nouveauMatch = new Match();
		this.equipeA = new Equipe();
		this.equipeB = new Equipe();
		this.nbrpointsA = 0;
		this.nbrpointsB = 0;
		// add listener to disable scroll
		window.removeEventListener('scroll', this.scrollTo);
	}

	scrollTo() {
		window.scrollTo( 0, 0 );
	}

}
