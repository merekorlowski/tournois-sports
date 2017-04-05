import {inject} from 'aurelia-framework';

import {ServiceEquipes} from '../../services/equipes';

@inject(ServiceEquipes)
export class EquipeView {
	constructor(serviceEquipes) {
		this.serviceEquipes = serviceEquipes;
	}

	activate(params, navigation) {
		this.getEquipe(params.id);
	}

	detached() {
		// Remove listener to disable scroll
		window.removeEventListener('scroll', this.scrollTo);
	}

	getEquipe(idequipe) {
		this.serviceEquipes.getEquipe(idequipe).then(equipe => {
			this.equipe = equipe;
			this.title = equipe.nom;
			this.serviceEquipes.getGerant(idequipe).then(gerant => {
				this.gerant = gerant;
			});
			this.serviceEquipes.getJoueurs(idequipe).then(joueurs => {
				this.joueurs = joueurs;
			});
		}); 
	}

	afficherAjout() {
		this.ajoutAffiche = true;
		// add listener to disable scroll
		window.addEventListener('scroll', this.scrollTo);
		this.serviceEquipes.getUsagersLibres(this.equipe.idligue).then(usagersLibres => {
			this.usagersLibres = usagersLibres;
		});
	}

	cancelerAjout() {
		this.ajoutAffiche = false;
		this.nouveauJoueur = this.usagersLibres[0];
		// add listener to disable scroll
		window.removeEventListener('scroll', this.scrollTo);
	}

	ajouter() {
    this.serviceEquipes.post(this.nouveauJoueur.idusager, this.equipe.idequipe).then(() => {
      this.ajoutAffiche = false;
      this.joueurs.push(this.nouveauJoueur);
			// add listener to disable scroll
		  window.removeEventListener('scroll', this.scrollTo);
    });
  }

	retirerJoueur(index, idusager) {
		this.serviceEquipes.deleteJoueur(idusager).then(equipe => {
			this.joueurs.splice(index, 1);
		}); 
	}

	scrollTo() {
		window.scrollTo( 0, 0 );
	}

}
