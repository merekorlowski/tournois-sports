import {inject} from 'aurelia-framework';

import {ServiceTournois} from '../../services/tournois';
import {ServiceMatchs} from '../../services/matchs';
import {Match} from '../../models/match';
import {Commanditaire} from '../../models/commanditaire';

@inject(ServiceTournois)
export class TournoiView {
  constructor(serviceTournois) {
    this.serviceTournois = serviceTournois;
  }

  activate(params, navigation) {
    this.title = `Tournoi ${params.id}`;
    this.getTournoi(params.id);
  }
	
	detached() {
		// Remove listener to disable scroll
		window.removeEventListener('scroll', this.scrollTo);
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
		this.serviceTournois.retirerMatch(idmatch).then(() => {
			this.matchs.splice(index, 1);
		});
	}

	retirerCommanditaire(index, commanditaire) {
		this.serviceTournois.retirerCommanditaire(commanditaire).then(() => {
			this.commanditaires.splice(index, 1);
		});
	}

	/**
	 * Ajouter un match
	 */

	afficherAjoutMatch() {
		this.nouveauMatch = new Match();
		this.nouveauMatch.idtournoi = this.tournoi.idtournoi;
		this.optionsAffiche = false;
		this.ajoutMatchAffiche = true;
		this.serviceTournois.getEquipesTournoi(this.tournoi.idtournoi).then(equipes => {
			this.equipes = equipes;
			this.equipeA = equipes[0];
			this.equipeB = equipes[1];
		});
		// add listener to disable scroll
		window.addEventListener('scroll', this.scrollTo);
	}

	cancelerAjoutMatch() {
		this.ajoutMatchAffiche = false;
		// add listener to disable scroll
		window.removeEventListener('scroll', this.scrollTo);
	}

	ajouterMatch() {
		this.serviceTournois.ajouterMatch(this.nouveauMatch, this.equipeA, this.equipeB).then(() => {
			this.matchs.push(this.nouveauMatch);
			this.ajoutMatchAffiche = false;
			// add listener to disable scroll
			window.removeEventListener('scroll', this.scrollTo);
		});
	}

	/**
	 * Modifier le tournoi
	 */

	afficherModificationTournoi() {
		this.optionsAffiche = false;
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
		this.serviceTournois.modifier(this.tournoi).then(() => {
			this.modificationTournoiAffiche = false;
			// add listener to disable scroll
			window.removeEventListener('scroll', this.scrollTo);
		});
	}

	/**
	 * Modifier un match
	 */

	afficherModificationMatch(match) {
		this.optionsAffiche = false;
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

	/**
	 * Ajouter un commanditaire
	 */

	afficherAjoutCommanditaire() {
		this.optionsAffiche = false;
		this.ajoutCommanditaireAffiche = true;
		this.nouveauCommanditaire = new Commanditaire();
		// add listener to disable scroll
		window.addEventListener('scroll', this.scrollTo);
	}

	cancelerAjoutCommanditaire() {
		this.ajoutCommanditaireAffiche = false;
		// add listener to disable scroll
		window.removeEventListener('scroll', this.scrollTo);
	}

	ajouterCommanditaire() {
		this.nouveauCommanditaire.idtournoi = this.tournoi.idtournoi;
		this.serviceTournois.ajouterCommanditaire(this.nouveauCommanditaire).then(() => {
			this.commanditaires.push(this.nouveauCommanditaire);
			this.ajoutCommanditaireAffiche = false;
			// add listener to disable scroll
			window.removeEventListener('scroll', this.scrollTo);
		});
	}

}
