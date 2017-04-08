import {inject} from 'aurelia-framework';

import {ServiceEquipes} from '../../services/equipes';

@inject(ServiceEquipes)
export class EquipeView {
	constructor(serviceEquipes) {
		this.serviceEquipes = serviceEquipes;
	}

	activate(params, navigation) {
		this.getEquipe({
			idligue: params.id,
			nom: params.nom
		});
		this.query = '';
		this.sort = 'ASC';
	}

	detached() {
		// Remove listener to disable scroll
		window.removeEventListener('scroll', this.scrollTo);
	}

	/**
	 * Get les données
	 */

	getEquipe(equipe) {
		this.serviceEquipes.getEquipe(equipe).then(equipe => {
			this.equipe = equipe;
			this.equipe.nomOriginal = equipe.nom;
			this.getGerant();
			this.getJoueurs();
		}); 
	}

	getGerant() {
		this.serviceEquipes.getGerant(this.equipe).then(gerant => {
			this.gerant = gerant;
		});
	}

	getJoueurs() {
		this.serviceEquipes.getJoueurs(this.equipe, this.query, this.sort).then(joueurs => {
			this.joueurs = joueurs;
		});
	}

	getUsagersLibres() {
		this.serviceEquipes.getUsagersLibres(this.equipe.idligue).then(usagersLibres => {
			this.usagersLibres = usagersLibres;
		});
	}

	/**
	 * Retirer un joueur
	 */

	retirerJoueur(index, idusager) {
		this.serviceEquipes.retirerJoueur(idusager).then(equipe => {
			this.joueurs.splice(index, 1);
		}); 
	}

	/**
	 * Ajouter un équipe
	 */

	afficherAjout() {
		this.ajoutAffiche = true;
		this.optionsAffiche = false;
		// add listener to disable scroll
		window.addEventListener('scroll', this.scrollTo);
		this.getUsagersLibres();
	}

	cancelerAjout() {
		this.ajoutAffiche = false;
		this.nouveauJoueur = this.usagersLibres[0];
		// add listener to disable scroll
		window.removeEventListener('scroll', this.scrollTo);
	}

	ajouter() {
    this.serviceEquipes.ajouter(this.nouveauJoueur.idusager, this.equipe).then(() => {
      this.ajoutAffiche = false;
      this.joueurs.push(this.nouveauJoueur);
			// add listener to disable scroll
		  window.removeEventListener('scroll', this.scrollTo);
    });
  }

	/**
	 * Modifier un equipe
	 */

	afficherModification() {
    this.modificationAffiche = true;
		this.optionsAffiche = false;
		// add listener to disable scroll
		window.addEventListener('scroll', this.scrollTo);
  }

	cancelerModification() {
		this.modificationAffiche = false;
		// add listener to disable scroll
		window.removeEventListener('scroll', this.scrollTo);
	}

	sauvegarder() {
    this.serviceEquipes.sauvegarder(this.equipe).then(() => {
      this.modificationAffiche = false;
			
			// add listener to disable scroll
			window.removeEventListener('scroll', this.scrollTo);
    });
  }

	scrollTo() {
		window.scrollTo( 0, 0 );
	}

}
