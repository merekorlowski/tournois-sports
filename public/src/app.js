
export class App {
  configureRouter(config, router) {
    this.router = router;
    config.title = 'Tournois de sports';
    config.map([
      { route: ['', 'accueil'], name: 'accueil', moduleId: 'views/accueil/index', nav: true, title: 'ACCUEIL' },
      { route: 'sports', name: 'sports', moduleId: 'views/sports/index', nav: true, title: 'SPORTS' },
			{ route: 'sports/ligues/:id/:nom', name: 'ligues', moduleId: 'views/ligues/index', title: 'Ligues' },
      { route: 'sports/tournois/:id/:nom', name: 'tournois', moduleId: 'views/tournois/index', title: 'Tournois' },
			{ route: 'sports/ligue/:id', name: 'ligue', moduleId: 'views/ligue/index', title: 'Ligue' },
      { route: 'sports/tournoi/:id', name: 'tournoi', moduleId: 'views/tournoi/index', title: 'Tournoi' },
      { route: 'equipes', name: 'equipes', moduleId: 'views/equipes/index', nav: true, title: 'ÉQUIPES' },
      { route: 'usagers', name: 'usagers', moduleId: 'views/usagers/index', nav: true, title: 'USAGERS' },
      { route: 'employes', name: 'employes', moduleId: 'views/employes/index', nav: true, title: 'EMPLOYÉS' },
			{ route: 'requetes', name: 'requetes', moduleId: 'views/requetes/index', nav: true, title: 'REQUÊTES' },
      { route: 'equipe/:id/:nom', name: 'equipe', moduleId: 'views/equipe/index', title: 'ÉQUIPE' },
			{ route: 'saison/:id', name: 'saison', moduleId: 'views/saison/index', title: 'SAISON' }
    ]);
  }
}
