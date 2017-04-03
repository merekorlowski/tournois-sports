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

	getEquipe(idequipe) {
		this.serviceEquipes.getEquipe(idequipe).then(equipe => {
			this.equipe = equipe;
			this.title = equipe.nom;
			this.serviceEquipes.getJoueurs(idequipe).then(joueurs => {
				this.joueurs = joueurs;
			});
		}); 
	}

	retirerJoueur(index, idusager) {
		this.serviceEquipes.deleteJoueur(idusager).then(equipe => {
			this.joueurs.splice(index, 1);
		}); 
	}

}
