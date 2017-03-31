
export class Sports {
  configureRouter(config, router) {
    this.router = router;
    config.title = 'Tournois de sports';
    config.map([
      { route: '', moduleId: 'views/liste-sports/index', nav: true },
      { route: 'ligues', name: 'ligues', moduleId: 'views/ligues/index', nav: true, title: 'Ligues' },
      { route: 'tournois', name: 'tournois', moduleId: 'views/tournois/index', nav: true, title: 'Tournois' }
    ]);
  }
}
