import {inject} from 'aurelia-framework';

import {ServiceRequetes} from '../../services/requetes';

@inject(ServiceRequetes)
export class Requetes {
	constructor(serviceRequetes) {
		this.serviceRequetes = serviceRequetes;
	}

	activate(params, navigation) {
		this.requeteExecute = -1;
		this.requetes = [
			`1. Quelles sont les équipes qui comportent plus de 17 joueurs, toutes ligues confondues?
			Lister les équipes en ordre alphabétique selon le nom de l’équipe.`,
			`2. Combien de joueurs ont le nom de famille « Smith »?`,
			`3. Quels tournois sont commandités par « Ballons Inc. »? Lister les IDTournoi en ordre
			croissant.`,
			`4. Combien de matchs sont supervisés par un arbitre dont le prénom commence par la lettre
			«A»?`,
			`5. Quels sont les joueurs inscrits à l’équipe «Lions» de la ligue L007? Lister les joueurs en
			ordre alphabétique selon leur nom de famille.`,
			`6. Quels sont les joueurs participant au tournoi T110? Lister les joueurs en ordre alphabétique
			selon leur nom de famille.`,
			`7. Combien de matchs, toutes ligues confondues, ont eu lieu le 14 mars 2016 mais pas au
			complexe sportif Sportmax?`,
			`8. Combien de joueurs sont inscrits à la fois à une équipe dans une ligue de basketball et une
			équipe dans une ligue de soccer?`,
			`9. À quelle date est-ce que le gestionnaire de l’équipe «Titans» de la ligue L040 a effectué le
			paiement pour la saison débutant le 12 janvier 2016?`,
			`10. Inscrire le joueur «John Smith» à l’équipe «Lions» de la ligue L007.`,
			`11. Supprimer l’usager «Émilie Jones» de l’organisation.`,
			`12. Modifier le nom de l’équipe «Fonceurs» de la ligue L022.`
		];		
	}

	executer(numero) {
		this.serviceRequetes.executer(numero).then(resultats => {
			this.requeteExecute = numero;
			this.resultats = resultats;
		});
	}

}
