
export class App {
  configureRouter(config, router) {
    this.router = router;
    config.title = 'Tournois de sports';
    config.map([
      { route: ['', 'accueil'], name: 'accueil', moduleId: 'views/accueil/index', nav: true, title: 'ACCUEIL' },
      { route: 'sports', name: 'sports', moduleId: 'views/sports/index', nav: true, title: 'SPORTS' },
      { route: 'equipes', name: 'equipes', moduleId: 'views/equipes/index', nav: true, title: 'ÉQUIPES' },
      { route: 'usagers', name: 'usagers', moduleId: 'views/usagers/index', nav: true, title: 'USAGERS' },
      { route: 'employes', name: 'employes', moduleId: 'views/employes/index', nav: true, title: 'EMPLOYÉS' },
			{ route: 'requetes', name: 'requetes', moduleId: 'views/requetes/index', nav: true, title: 'REQUÊTES' },
      { route: 'equipe/:id', name: 'equipe', moduleId: 'views/equipe/index', title: 'ÉQUIPE' },
			{ route: 'saison/:id', name: 'saison', moduleId: 'views/saison/index', title: 'SAISON' }
    ]);
  }
}
