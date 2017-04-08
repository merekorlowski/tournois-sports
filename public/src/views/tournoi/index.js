import {inject} from 'aurelia-framework';

import {ServiceTournois} from '../../services/tournois';
import {ServiceMatchs} from '../../services/matchs';
import {Match} from '../../models/match';
import {Commanditaire} from '../../models/commanditaire';

@inject(ServiceTournois, ServiceMatchs)
export class TournoiView {
  constructor(serviceTournois, serviceMatchs) {
    this.serviceTournois = serviceTournois;
		this.serviceMatchs = serviceMatchs;
  }

  activate(params, navigation) {
    this.title = `Tournoi ${params.id}`;
    this.getTournoi(params.id);
  }
	
	detached() {
		// Remove listener to disable scroll
		window.removeEventListener('scroll', this.scrollTo);
	}

	/**
	 * Retourner les informations du tournoi
	 * @param {string} idtournoi 
	 */

  getTournoi(idtournoi) {
    this.serviceTournois.getTournoi(idtournoi).then(tournoi => {
      this.tournoi = tournoi;
			this.getMatchs();
			this.getCommanditaires();
			this.getFondsAccumules();
    });
	}

	getFondsAccumules() {
		this.serviceTournois.getFondsAccumules(this.tournoi.idtournoi).then(fondsaccumules => {
			this.tournoi.fondsaccumules = fondsaccumules;
		});
	}

	/**
	 * Retourner les informations des matchs
	 */

	getMatchs() {
		this.serviceTournois.getMatchs(this.tournoi.idtournoi).then(matchs => {
			this.matchs = matchs;
			for (let match of this.matchs) {
				this.getEquipesMatch(match);
			}
		});
	}

	getEquipesMatch(match) {
		this.serviceMatchs.getEquipes(match.idmatch).then(equipes => {
			match.equipes = equipes;
			for (let equipe of match.equipes) {
				this.getPoints(match, equipe);
			}
		});
	}

	getPoints(match, equipe) {
		this.serviceMatchs.getPoints(match, equipe).then(ptsmarques => {
			equipe.ptsmarques = ptsmarques;
		});
	}

	/**
	 * Retourner les informations des commanditaires
	 */

	getCommanditaires() {
		this.serviceTournois.getCommanditaires(this.tournoi.idtournoi).then(commanditaires => {
			this.commanditaires = commanditaires;
			for (let commanditaire of this.commanditaires) {
				this.getContribution(commanditaire);
			}
		});
	}

	getContribution(commanditaire) {
		this.serviceTournois.getContribution(this.tournoi.idtournoi, commanditaire.idcommanditaire).then(contribution => {
			commanditaire.contribution = contribution;
		});
	}

	retirerMatch(index, match) {
		this.serviceMatchs.retirerMatch(match).then(() => {
			this.matchs.splice(index, 1);
		});
	}

	retirerCommanditaire(index, commanditaire) {
		this.serviceTournois.retirerCommanditaire(commanditaire).then(() => {
			this.commanditaires.splice(index, 1);
			this.getFondsAccumules();
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
		this.serviceTournois.ajouterMatch(this.nouveauMatch).then(() => {
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
			this.getFondsAccumules();
			// add listener to disable scroll
			window.removeEventListener('scroll', this.scrollTo);
		});
	}

}
