import {inject} from 'aurelia-framework';

import {ServiceSaisons} from '../../services/saisons';
import {ServiceMatchs} from '../../services/matchs';

@inject(ServiceSaisons, ServiceMatchs)
export class SaisonView {
	constructor(serviceSaisons, serviceMatchs) {
		this.serviceSaisons = serviceSaisons;
		this.serviceMatchs = serviceMatchs;
	}

	activate(params, navigation) {
		this.getSaison(params.id);
	}

	getSaison(idsaison) {
		this.serviceSaisons.getSaison(idsaison).then(saison => {
			this.saison = saison;
			this.title = saison.idsaison;
			this.serviceSaisons.getMatchs(idsaison).then(matchs => {
				this.matchs = matchs;
				for (let match of this.matchs) {
					this.serviceMatchs.getEquipes(match.idmatch).then(equipes => {
						match.equipes = equipes;
						for (let equipe of match.equipes) {
							this.serviceMatchs.getPoints(match.idmatch, equipe.idequipe).then(points => {
								equipe.points = points;
							});
						}
					});
				}
			});
		}); 
	}

	retirerMatch(index, idmatch) {
		this.serviceSaisons.deleteMatch(idmatch).then(() => {
			this.matchs.splice(index, 1);
		}); 
	}

}
