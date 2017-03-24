
export class App {
  configureRouter(config, router) {
    this.router = router;
    config.title = 'Tournois de sports';
    config.map([
      { route: ['', 'accueil'], name: 'accueil', moduleId: 'views/accueil/index', nav: true, title: 'Accueil' },
      { route: 'tournois', name: 'tournois', moduleId: 'views/tournois/index', nav: true, title: 'Tournois' },
      { route: 'equipes', name: 'equipes', moduleId: 'views/equipes/index', nav: true, title: 'Équipes' },
      { route: 'usagers', name: 'usagers', moduleId: 'views/usagers/index', nav: true, title: 'Usagers' },
      { route: 'employes', name: 'employes', moduleId: 'views/employes/index', nav: true, title: 'Employés' }
    ]);
  }
}
