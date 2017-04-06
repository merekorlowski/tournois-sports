import {inject} from 'aurelia-framework';

import {ServiceTournois} from '../../services/tournois';
import {ServiceMatchs} from '../../services/matchs';

@inject(ServiceTournois)
export class TournoiView {
  constructor(serviceTournois) {
    this.serviceTournois = serviceTournois;
  }

  activate(params, navigation) {
    this.title = `Tournoi ${params.id}`;
    this.getTournoi(params.id);
  }

  getTournoi(idtournoi) {
    this.serviceTournois.getTournoi(idtournoi).then(tournoi => {
      this.tournoi = tournoi;
			this.serviceTournois.getMatchs(idtournoi).then(matchs => {
				this.matchs = matchs;
				for (let match of this.matchs) {
					this.serviceTournois.getEquipes(match.idmatch).then(equipes => {
						match.equipes = equipes;
						for (let equipe of match.equipes) {
							this.serviceTournois.getPoints(match.idmatch, equipe.idligue, equipe.nom).then(ptsmarques => {
								equipe.ptsmarques = ptsmarques;
							});
						}
					});
				}
			});
			this.serviceTournois.getCommanditaires(idtournoi).then(commanditaires => {
				this.commanditaires = commanditaires;
				for (let commanditaire of this.commanditaires) {
					this.serviceTournois.getContribution(idtournoi, commanditaire.idcommanditaire).then(contribution => {
						commanditaire.contribution = contribution;
					});
				}
			});
			this.serviceTournois.getFondsAccumules(idtournoi).then(fondsaccumules => {
				tournoi.fondsaccumules = fondsaccumules;
			});
    });
	}

	retirerMatch(index, idmatch) {
		this.serviceTournois.deleteMatch(idmatch).then(() => {
			this.matchs.splice(index, 1);
		});
	}

	retirerCommanditaire(index, idcommanditaire) {
		this.serviceTournois.deleteCommanditaire(idcommanditaire).then(() => {
			this.commanditaires.splice(index, 1);
		});
	}

	afficherModificationTournoi() {
		this.modificationTournoiAffiche = true;
		// add listener to disable scroll
		window.addEventListener('scroll', this.scrollTo);
	}

	cancelerModificationTournoi() {
		this.modificationTournoiAffiche = false;
		// add listener to disable scroll
		window.removeEventListener('scroll', this.scrollTo);
	}

	modifierTournoi() {
		this.serviceTournois.put(this.tournoi).then(() => {
			this.modificationTournoiAffiche = false;
			// add listener to disable scroll
			window.removeEventListener('scroll', this.scrollTo);
		});
	}

}
