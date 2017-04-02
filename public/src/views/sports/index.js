
export class Sports {
  configureRouter(config, router) {
    this.router = router;
    config.title = 'Tournois de sports';
    config.map([
      { route: '', moduleId: 'views/liste-sports/index', nav: true },
      { route: 'ligues/:id', name: 'ligues', moduleId: 'views/ligues/index', title: 'Ligues' },
      { route: 'tournois/:id', name: 'tournois', moduleId: 'views/tournois/index', title: 'Tournois' },
			{ route: 'ligue/:id', name: 'ligue', moduleId: 'views/ligue/index', title: 'Ligue' },
      { route: 'tournoi/:id', name: 'tournoi', moduleId: 'views/tournoi/index', title: 'Tournoi' }
    ]);
  }
}
