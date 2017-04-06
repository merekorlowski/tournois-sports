define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);
    }

    App.prototype.configureRouter = function configureRouter(config, router) {
      this.router = router;
      config.title = 'Tournois de sports';
      config.map([{ route: ['', 'accueil'], name: 'accueil', moduleId: 'views/accueil/index', nav: true, title: 'ACCUEIL' }, { route: 'sports', name: 'sports', moduleId: 'views/sports/index', nav: true, title: 'SPORTS' }, { route: 'equipes', name: 'equipes', moduleId: 'views/equipes/index', nav: true, title: 'ÉQUIPES' }, { route: 'usagers', name: 'usagers', moduleId: 'views/usagers/index', nav: true, title: 'USAGERS' }, { route: 'employes', name: 'employes', moduleId: 'views/employes/index', nav: true, title: 'EMPLOYÉS' }, { route: 'requetes', name: 'requetes', moduleId: 'views/requetes/index', nav: true, title: 'REQUÊTES' }, { route: 'equipe/:id/:id2', name: 'equipe', moduleId: 'views/equipe/index', title: 'ÉQUIPE' }, { route: 'saison/:id', name: 'saison', moduleId: 'views/saison/index', title: 'SAISON' }]);
    };

    return App;
  }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('models/arbitre',['exports', './employe'], function (exports, _employe) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Arbitre = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var Arbitre = exports.Arbitre = function (_Employe) {
    _inherits(Arbitre, _Employe);

    function Arbitre(arbitre) {
      _classCallCheck(this, Arbitre);

      if (!arbitre) {
        var _this = _possibleConstructorReturn(this, _Employe.call(this, '', '', '', ''));

        _this.nbrAnnees = 0;
        _this.sports = [];
      } else {
        Object.assign(_this, arbitre);
      }
      return _possibleConstructorReturn(_this);
    }

    return Arbitre;
  }(_employe.Employe);
});
define('models/commanditaire',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Commanditaire = exports.Commanditaire = function () {
    function Commanditaire(commanditaire) {
      _classCallCheck(this, Commanditaire);

      Object.assign(this, commanditaire);
      this.contributions = [];
    }

    Commanditaire.prototype.getContributions = function getContributions() {};

    return Commanditaire;
  }();
});
define('models/employe',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Employe = exports.Employe = function Employe(employe) {
    _classCallCheck(this, Employe);

    if (employe) {
      Object.assign(this, employe);
    } else {
      this.IDEmploye = '';
      this.prenom = '';
      this.nom = '';
      this.role = '';
    }
  };
});
define('models/equipe',['exports', './usager'], function (exports, _usager) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Equipe = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Equipe = exports.Equipe = function () {
    function Equipe(equipe) {
      _classCallCheck(this, Equipe);

      Object.assign(this, equipe);
      this.joueurs = [];
    }

    Equipe.prototype.getLigue = function getLigue() {};

    Equipe.prototype.getJoueurs = function getJoueurs() {};

    return Equipe;
  }();
});
define('models/gerant',[], function () {
  "use strict";
});
define('models/gestionnaire',['exports', './employe'], function (exports, _employe) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Gestionnaire = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var Gestionnaire = exports.Gestionnaire = function (_Employe) {
    _inherits(Gestionnaire, _Employe);

    function Gestionnaire(gestionnaire) {
      _classCallCheck(this, Gestionnaire);

      if (!gestionnaire) {
        var _this = _possibleConstructorReturn(this, _Employe.call(this, '', '', '', ''));

        _this.numTel = '';
        _this.courriel = '';
      } else {
        Object.assign(_this, gestionnaire);
      }
      return _possibleConstructorReturn(_this);
    }

    return Gestionnaire;
  }(_employe.Employe);
});
define('models/ligue',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Ligue = exports.Ligue = function Ligue(ligue) {
    _classCallCheck(this, Ligue);

    if (ligue) {
      Object.assign(this, ligue);
    } else {
      this.idligue = '';
      this.idsport = '';
      this.niveaudifficulte = '';
    }
  };
});
define('models/match',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Match = exports.Match = function Match(match) {
    _classCallCheck(this, Match);

    Object.assign(this, match);
  };
});
define('models/paiement',[], function () {
  "use strict";
});
define('models/saison',["exports"], function (exports) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var Saison = exports.Saison = function Saison(saison) {
		_classCallCheck(this, Saison);

		if (saison) {
			Object.assign(this, saison);
		}
	};
});
define('models/sport',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Sport = exports.Sport = function Sport(sport) {
    _classCallCheck(this, Sport);

    if (sport) {
      Object.assign(this, sport);
    } else {
      this.idsport = '';
      this.nom = '';
      this.description = '';
      this.nbrminjoueurs = 0;
      this.nbrmaxjoueurs = 0;
    }
  };
});
define('models/tournoi',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Tournoi = exports.Tournoi = function () {
    function Tournoi(tournoi) {
      _classCallCheck(this, Tournoi);

      if (tournoi) {
        Object.assign(this, tournoi);
      } else {
        this.IDTournoi = '';
        this.oeuvreCharite = '';
        this.fondsAccumules = 0;
        this.dateDebut = '';
        this.dateFin = '';
        this.IDSport = '';
      }
    }

    Tournoi.prototype.getSport = function getSport() {};

    Tournoi.prototype.getMatchs = function getMatchs() {};

    Tournoi.prototype.getCommanditaires = function getCommanditaires() {};

    Tournoi.prototype.getEquipes = function getEquipes() {};

    return Tournoi;
  }();
});
define('models/usager',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Usager = exports.Usager = function () {
    function Usager(usager) {
      _classCallCheck(this, Usager);

      if (usager) {
        Object.assign(this, usager);
        this.sports = [];
        this.equipes = [];
        this.afficherProfile = false;
      } else {
        this.idusager = '';
        this.nom = '';
        this.prenom = '';
        this.courriel = '';
        this.numtel = '';
      }
    }

    Usager.prototype.getSports = function getSports() {};

    Usager.prototype.getEquipes = function getEquipes() {};

    return Usager;
  }();
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('services/employes',['exports', 'aurelia-fetch-client', '../models/employe'], function (exports, _aureliaFetchClient, _employe) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ServiceEmployes = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ServiceEmployes = exports.ServiceEmployes = function () {
    function ServiceEmployes() {
      _classCallCheck(this, ServiceEmployes);

      this.http = new _aureliaFetchClient.HttpClient().configure(function (config) {
        config.withBaseUrl('http://localhost:3000/');
      });
    }

    ServiceEmployes.prototype.get = function get(query, sort) {
      return this.http.fetch('employes?query=' + query + '&sort=' + sort).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data.map(function (employe) {
          return new _employe.Employe(employe);
        }) || [];
      });
    };

    ServiceEmployes.prototype.delete = function _delete(idemploye) {
      return this.http.fetch('employe', {
        method: 'delete',
        body: (0, _aureliaFetchClient.json)(idemploye)
      });
    };

    ServiceEmployes.prototype.post = function post(employe) {
      return this.http.fetch('employe', {
        method: 'post',
        body: (0, _aureliaFetchClient.json)(employe)
      });
    };

    ServiceEmployes.prototype.put = function put(employe) {
      return this.http.fetch('employe', {
        method: 'put',
        body: (0, _aureliaFetchClient.json)(employe)
      });
    };

    return ServiceEmployes;
  }();
});
define('services/equipes',['exports', 'aurelia-fetch-client', '../models/equipe', '../models/usager'], function (exports, _aureliaFetchClient, _equipe, _usager) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ServiceEquipes = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ServiceEquipes = exports.ServiceEquipes = function () {
    function ServiceEquipes() {
      _classCallCheck(this, ServiceEquipes);

      this.http = new _aureliaFetchClient.HttpClient().configure(function (config) {
        config.withBaseUrl('http://localhost:3000/');
      });
    }

    ServiceEquipes.prototype.get = function get(query, sort) {
      return this.http.fetch('equipes?query=' + query + '&sort=' + sort).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data.map(function (equipe) {
          return new _equipe.Equipe(equipe);
        }) || [];
      });
    };

    ServiceEquipes.prototype.getEquipe = function getEquipe(equipe) {
      return this.http.fetch('equipe?idligue=' + equipe.idligue + '&nom=' + equipe.nom).then(function (response) {
        return response.json();
      }).then(function (data) {
        return new _equipe.Equipe(data[0]);
      });
    };

    ServiceEquipes.prototype.getGerant = function getGerant(equipe) {
      return this.http.fetch('equipe/gerant?idligue=' + equipe.idligue + '&nom=' + equipe.nom).then(function (response) {
        return response.json();
      }).then(function (data) {
        return new _usager.Usager(data[0]);
      });
    };

    ServiceEquipes.prototype.getJoueurs = function getJoueurs(equipe) {
      return this.http.fetch('equipe/joueurs?idligue=' + equipe.idligue + '&nom=' + equipe.nom).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data.map(function (usager) {
          return new _usager.Usager(usager);
        }) || [];
      });
    };

    ServiceEquipes.prototype.getUsagersLibres = function getUsagersLibres(idligue) {
      return this.http.fetch('equipe/usagers-libres?idligue=' + idligue).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data.map(function (usager) {
          return new _usager.Usager(usager);
        }) || [];
      });
    };

    ServiceEquipes.prototype.post = function post(idusager, equipe) {
      return this.http.fetch('equipe/joueur', {
        method: 'post',
        body: (0, _aureliaFetchClient.json)({
          idusager: idusager,
          equipe: equipe
        })
      });
    };

    ServiceEquipes.prototype.put = function put(equipe) {
      return this.http.fetch('equipe', {
        method: 'put',
        body: (0, _aureliaFetchClient.json)(equipe)
      });
    };

    ServiceEquipes.prototype.delete = function _delete(equipe) {
      return this.http.fetch('equipe', {
        method: 'post',
        body: (0, _aureliaFetchClient.json)(equipe)
      });
    };

    ServiceEquipes.prototype.deleteJoueur = function deleteJoueur(idusager) {
      return this.http.fetch('equipe/joueur', {
        method: 'delete',
        body: (0, _aureliaFetchClient.json)(idusager)
      });
    };

    return ServiceEquipes;
  }();
});
define('services/ligues',['exports', 'aurelia-fetch-client', '../models/ligue', '../models/gestionnaire', '../models/arbitre', '../models/equipe', '../models/saison'], function (exports, _aureliaFetchClient, _ligue, _gestionnaire, _arbitre, _equipe, _saison) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ServiceLigues = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ServiceLigues = exports.ServiceLigues = function () {
    function ServiceLigues() {
      _classCallCheck(this, ServiceLigues);

      this.http = new _aureliaFetchClient.HttpClient().configure(function (config) {
        config.withBaseUrl('http://localhost:3000/');
      });
    }

    ServiceLigues.prototype.get = function get(query, sort, idsport) {
      return this.http.fetch('ligues?query=' + query + '&sort=' + sort + '&idsport=' + idsport).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data.map(function (ligue) {
          return new _ligue.Ligue(ligue);
        }) || [];
      });
    };

    ServiceLigues.prototype.post = function post(ligue) {
      return this.http.fetch('ligue', {
        method: 'post',
        body: (0, _aureliaFetchClient.json)(ligue)
      });
    };

    ServiceLigues.prototype.getLigue = function getLigue(idligue) {
      return this.http.fetch('ligue?idligue=' + idligue).then(function (response) {
        return response.json();
      }).then(function (data) {
        return new _ligue.Ligue(data[0]);
      });
    };

    ServiceLigues.prototype.delete = function _delete(ligue) {
      return this.http.fetch('ligue', {
        method: 'delete',
        body: (0, _aureliaFetchClient.json)(ligue)
      });
    };

    ServiceLigues.prototype.getEquipes = function getEquipes(idligue) {
      return this.http.fetch('ligue/equipes?idligue=' + idligue).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data.map(function (equipe) {
          return new _equipe.Equipe(equipe);
        }) || [];
      });
    };

    ServiceLigues.prototype.getSaisons = function getSaisons(idligue) {
      return this.http.fetch('ligue/saisons?idligue=' + idligue).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data.map(function (equipe) {
          return new _saison.Saison(equipe);
        }) || [];
      });
    };

    ServiceLigues.prototype.deleteEquipe = function deleteEquipe(equipe) {
      return this.http.fetch('ligue/equipe', {
        method: 'delete',
        body: (0, _aureliaFetchClient.json)(equipe)
      });
    };

    ServiceLigues.prototype.postEquipe = function postEquipe(equipe) {
      return this.http.fetch('ligue/equipe', {
        method: 'post',
        body: (0, _aureliaFetchClient.json)(equipe)
      });
    };

    ServiceLigues.prototype.deleteSaison = function deleteSaison(idsaison) {
      return this.http.fetch('ligue/saison', {
        method: 'delete',
        body: (0, _aureliaFetchClient.json)(idsaison)
      });
    };

    ServiceLigues.prototype.getGestionnaires = function getGestionnaires(idligue) {
      return this.http.fetch('ligue/gestionnaires?idligue=' + idligue).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data.map(function (gestionnaire) {
          return new _gestionnaire.Gestionnaire(gestionnaire);
        }) || [];
      });
    };

    ServiceLigues.prototype.getArbitres = function getArbitres(idligue) {
      return this.http.fetch('ligue/arbitres?idligue=' + idligue).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data.map(function (arbitre) {
          return new _arbitre.Arbitre(arbitre);
        }) || [];
      });
    };

    return ServiceLigues;
  }();
});
define('services/matchs',['exports', 'aurelia-fetch-client', '../models/match', '../models/equipe'], function (exports, _aureliaFetchClient, _match, _equipe) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ServiceMatchs = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ServiceMatchs = exports.ServiceMatchs = function () {
    function ServiceMatchs() {
      _classCallCheck(this, ServiceMatchs);

      this.http = new _aureliaFetchClient.HttpClient().configure(function (config) {
        config.withBaseUrl('http://localhost:3000/');
      });
    }

    ServiceMatchs.prototype.getEquipes = function getEquipes(idmatch) {
      return this.http.fetch('match/equipes?idmatch=' + idmatch).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data.map(function (equipe) {
          return new _equipe.Equipe(equipe);
        }) || [];
      });
    };

    ServiceMatchs.prototype.deleteMatch = function deleteMatch(match) {
      return this.http.fetch('match', {
        method: 'delete',
        body: (0, _aureliaFetchClient.json)(match)
      });
    };

    ServiceMatchs.prototype.getPoints = function getPoints(match, equipe) {
      return this.http.fetch('match/equipe/points?idmatch=' + match.idmatch + '&idligue=' + equipe.idligue + '&nom=' + equipe.nom).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data[0].ptsmarques;
      });
    };

    return ServiceMatchs;
  }();
});
define('services/requetes',['exports', 'aurelia-fetch-client', '../models/employe', '../models/equipe', '../models/tournoi', '../models/match', '../models/usager'], function (exports, _aureliaFetchClient, _employe, _equipe, _tournoi, _match, _usager) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.ServiceRequetes = undefined;

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var ServiceRequetes = exports.ServiceRequetes = function () {
		function ServiceRequetes() {
			_classCallCheck(this, ServiceRequetes);

			this.http = new _aureliaFetchClient.HttpClient().configure(function (config) {
				config.withBaseUrl('http://localhost:3000/');
			});
		}

		ServiceRequetes.prototype.execute = function execute(numero) {
			if (numero < 10) {
				return this.http.fetch('requete?numero=' + numero).then(function (response) {
					return response.json();
				}).then(function (data) {
					return data.map(function (element) {
						if (numero === 1) {
							return new _equipe.Equipe(element);
						} else if (numero === 2 || numero === 4 || numero === 7 || numero === 8 || numero === 9) {
							return element;
						} else if (numero === 3) {
							return new _tournoi.Tournoi(element);
						} else if (numero === 5 || numero === 6) {
							return new _usager.Usager(element);
						}
					}) || [];
				});
			} else {
				if (numero === 10) {
					return this.http.fetch('requete', {
						method: 'post',
						body: (0, _aureliaFetchClient.json)({ numero: numero })
					});
				} else if (numero === 11) {
					return this.http.fetch('requete', {
						method: 'delete',
						body: (0, _aureliaFetchClient.json)({ numero: numero })
					});
				} else {
					return this.http.fetch('requete', {
						method: 'put',
						body: (0, _aureliaFetchClient.json)({ numero: numero })
					});
				}
			}
		};

		return ServiceRequetes;
	}();
});
define('services/saisons',['exports', 'aurelia-fetch-client', '../models/saison', '../models/match'], function (exports, _aureliaFetchClient, _saison, _match) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ServiceSaisons = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ServiceSaisons = exports.ServiceSaisons = function () {
    function ServiceSaisons() {
      _classCallCheck(this, ServiceSaisons);

      this.http = new _aureliaFetchClient.HttpClient().configure(function (config) {
        config.withBaseUrl('http://localhost:3000/');
      });
    }

    ServiceSaisons.prototype.get = function get(idligue) {
      return this.http.fetch('saisons?idligue=' + idligue).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data.map(function (saison) {
          return new _saison.Saison(saison);
        }) || [];
      });
    };

    ServiceSaisons.prototype.delete = function _delete(saison) {
      return this.http.fetch('saison', {
        method: 'delete',
        body: (0, _aureliaFetchClient.json)(saison)
      });
    };

    ServiceSaisons.prototype.post = function post(saison) {
      return this.http.fetch('saison', {
        method: 'post',
        body: (0, _aureliaFetchClient.json)(saison)
      });
    };

    ServiceSaisons.prototype.put = function put(saison) {
      return this.http.fetch('saison', {
        method: 'put',
        body: (0, _aureliaFetchClient.json)(saison)
      });
    };

    ServiceSaisons.prototype.getSaison = function getSaison(idsaison) {
      return this.http.fetch('saison?idsaison=' + idsaison).then(function (response) {
        return response.json();
      }).then(function (data) {
        return new _saison.Saison(data[0]);
      });
    };

    ServiceSaisons.prototype.getMatchs = function getMatchs(idsaison) {
      return this.http.fetch('saison/matchs?idsaison=' + idsaison).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data.map(function (match) {
          return new _match.Match(match);
        }) || [];
      });
    };

    ServiceSaisons.prototype.postMatch = function postMatch(match, equipeA, equipeB) {
      return this.http.fetch('saison/match', {
        method: 'post',
        body: (0, _aureliaFetchClient.json)({
          match: match,
          equipeA: equipeA,
          equipeB: equipeB
        })
      });
    };

    ServiceSaisons.prototype.deleteMatch = function deleteMatch(match) {
      return this.http.fetch('saison/match', {
        method: 'delete',
        body: (0, _aureliaFetchClient.json)(match)
      });
    };

    return ServiceSaisons;
  }();
});
define('services/sports',['exports', 'aurelia-fetch-client', '../models/sport', '../models/ligue', '../models/tournoi'], function (exports, _aureliaFetchClient, _sport, _ligue, _tournoi) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ServiceSports = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ServiceSports = exports.ServiceSports = function () {
    function ServiceSports() {
      _classCallCheck(this, ServiceSports);

      this.http = new _aureliaFetchClient.HttpClient().configure(function (config) {
        config.withBaseUrl('http://localhost:3000/');
      });
    }

    ServiceSports.prototype.get = function get(query, sort) {
      return this.http.fetch('sports?query=' + query + '&sort=' + sort).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data.map(function (sport) {
          return new _sport.Sport(sport);
        }) || [];
      });
    };

    ServiceSports.prototype.post = function post(sport) {
      return this.http.fetch('sport', {
        method: 'post',
        body: (0, _aureliaFetchClient.json)(sport)
      });
    };

    ServiceSports.prototype.put = function put(sport) {
      return this.http.fetch('sport', {
        method: 'put',
        body: (0, _aureliaFetchClient.json)(sport)
      });
    };

    ServiceSports.prototype.deleteSport = function deleteSport(sport) {
      return this.http.fetch('sport', {
        method: 'delete',
        body: (0, _aureliaFetchClient.json)(sport)
      });
    };

    return ServiceSports;
  }();
});
define('services/tournois',['exports', 'aurelia-fetch-client', '../models/tournoi', '../models/commanditaire', '../models/saison', '../models/match', '../models/equipe'], function (exports, _aureliaFetchClient, _tournoi, _commanditaire, _saison, _match, _equipe) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ServiceTournois = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ServiceTournois = exports.ServiceTournois = function () {
    function ServiceTournois() {
      _classCallCheck(this, ServiceTournois);

      this.http = new _aureliaFetchClient.HttpClient().configure(function (config) {
        config.withBaseUrl('http://localhost:3000/');
      });
    }

    ServiceTournois.prototype.get = function get(query, sort, idsport) {
      return this.http.fetch('tournois?query=' + query + '&sort=' + sort + '&idsport=' + idsport).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data.map(function (tournoi) {
          return new _tournoi.Tournoi(tournoi);
        }) || [];
      });
    };

    ServiceTournois.prototype.getTournoi = function getTournoi(idtournoi) {
      return this.http.fetch('tournoi?idtournoi=' + idtournoi).then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log(JSON.stringify(data[0]));
        return new _tournoi.Tournoi(data[0]);
      });
    };

    ServiceTournois.prototype.getCommanditaires = function getCommanditaires(idtournoi) {
      return this.http.fetch('tournoi/commanditaires?idtournoi=' + idtournoi).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data.map(function (commanditaire) {
          return new _commanditaire.Commanditaire(commanditaire);
        }) || [];
      });
    };

    ServiceTournois.prototype.getMatchs = function getMatchs(idtournoi) {
      return this.http.fetch('tournoi/matchs?idtournoi=' + idtournoi).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data.map(function (match) {
          return new _match.Match(match);
        }) || [];
      });
    };

    ServiceTournois.prototype.getContribution = function getContribution(idtournoi, idcommanditaire) {
      return this.http.fetch('tournoi/commanditairetournoi?idtournoi=' + idtournoi + '&idcommanditaire=' + idcommanditaire).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data[0].contribution;
      });
    };

    ServiceTournois.prototype.deleteMatch = function deleteMatch(idmatch) {
      return this.http.fetch('tournoi/match', {
        method: 'delete',
        body: (0, _aureliaFetchClient.json)(idmatch)
      });
    };

    ServiceTournois.prototype.deleteCommanditaire = function deleteCommanditaire(idcommanditaire) {
      return this.http.fetch('tournoi/commanditaire', {
        method: 'delete',
        body: (0, _aureliaFetchClient.json)(idcommanditaire)
      });
    };

    ServiceTournois.prototype.getEquipes = function getEquipes(idmatch) {
      return this.http.fetch('match/equipes?idmatch=' + idmatch).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data.map(function (equipe) {
          return new _equipe.Equipe(equipe);
        }) || [];
      });
    };

    ServiceTournois.prototype.getPoints = function getPoints(idmatch, idligue, nom) {
      return this.http.fetch('match/equipe/points?idmatch=' + idmatch + '&idligue=' + idligue + '&nom=' + nom).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data[0].ptsmarques;
      });
    };

    ServiceTournois.prototype.post = function post(tournoi) {
      return this.http.fetch('tournoi', {
        method: 'post',
        body: (0, _aureliaFetchClient.json)(tournoi)
      });
    };

    ServiceTournois.prototype.delete = function _delete(tournoi) {
      return this.http.fetch('tournoi', {
        method: 'delete',
        body: (0, _aureliaFetchClient.json)(tournoi)
      });
    };

    ServiceTournois.prototype.put = function put(tournoi) {
      return this.http.fetch('tournoi', {
        method: 'put',
        body: (0, _aureliaFetchClient.json)(tournoi)
      });
    };

    return ServiceTournois;
  }();
});
define('services/usagers',['exports', 'aurelia-fetch-client', '../models/usager'], function (exports, _aureliaFetchClient, _usager) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ServiceUsagers = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ServiceUsagers = exports.ServiceUsagers = function () {
    function ServiceUsagers() {
      _classCallCheck(this, ServiceUsagers);

      this.http = new _aureliaFetchClient.HttpClient().configure(function (config) {
        config.withBaseUrl('http://localhost:3000/');
      });
    }

    ServiceUsagers.prototype.get = function get(query, sort) {
      return this.http.fetch('usagers?query=' + query + '&sort=' + sort).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data.map(function (usager) {
          return new _usager.Usager(usager);
        }) || [];
      });
    };

    ServiceUsagers.prototype.getGerantsLibres = function getGerantsLibres() {
      return this.http.fetch('usagers/gerants').then(function (response) {
        return response.json();
      }).then(function (data) {
        return data.map(function (gerant) {
          return new _usager.Usager(gerant);
        }) || [];
      });
    };

    ServiceUsagers.prototype.delete = function _delete(usager) {
      return this.http.fetch('usager', {
        method: 'delete',
        body: (0, _aureliaFetchClient.json)(usager)
      });
    };

    ServiceUsagers.prototype.post = function post(usager) {
      return this.http.fetch('usager', {
        method: 'post',
        body: (0, _aureliaFetchClient.json)(usager)
      });
    };

    ServiceUsagers.prototype.put = function put(usager) {
      return this.http.fetch('usager', {
        method: 'put',
        body: (0, _aureliaFetchClient.json)(usager)
      });
    };

    return ServiceUsagers;
  }();
});
define('resources/value-converters/filter',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var FilterValueConverter = exports.FilterValueConverter = function () {
    function FilterValueConverter() {
      _classCallCheck(this, FilterValueConverter);
    }

    FilterValueConverter.prototype.toView = function toView(array, filter) {
      return array.filter(function (item) {
        for (var attribute in item) {
          if (item[attribute].toLowerCase().includes(filter.toLowerCase())) {
            return true;
          }
        }
      });
    };

    return FilterValueConverter;
  }();
});
define('views/accueil/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Accueil = exports.Accueil = function () {
    function Accueil() {
      _classCallCheck(this, Accueil);
    }

    Accueil.prototype.activate = function activate(params, navigation) {
      this.title = navigation.title;
    };

    return Accueil;
  }();
});
define('views/employes/index',['exports', 'aurelia-framework', '../../models/employe', '../../services/employes'], function (exports, _aureliaFramework, _employe, _employes) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Employes = undefined;

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _dec, _class;

	var Employes = exports.Employes = (_dec = (0, _aureliaFramework.inject)(_employes.ServiceEmployes), _dec(_class = function () {
		function Employes(serviceEmployes) {
			_classCallCheck(this, Employes);

			this.serviceEmployes = serviceEmployes;
		}

		Employes.prototype.activate = function activate(params, navigation) {
			this.query = '';
			this.sort = 'ASC';
			this.nouveauEmploye = new _employe.Employe();
			this.employeAModifier = new _employe.Employe();
			this.getEmployes();
		};

		Employes.prototype.detached = function detached() {
			window.removeEventListener('scroll', this.scrollTo);
		};

		Employes.prototype.getEmployes = function getEmployes() {
			var _this = this;

			this.serviceEmployes.get(this.query, this.sort).then(function (employes) {
				_this.employes = employes;
			});
		};

		Employes.prototype.retirer = function retirer(index, idemploye) {
			var _this2 = this;

			this.serviceEmployes.delete(idemploye).then(function () {
				_this2.employes.splice(index, 1);
			});
		};

		Employes.prototype.afficherAjout = function afficherAjout() {
			this.ajoutAffiche = true;

			window.addEventListener('scroll', this.scrollTo);
		};

		Employes.prototype.cancelerAjout = function cancelerAjout() {
			this.ajoutAffiche = false;
			this.nouveauEmploye = new _employe.Employe();

			window.removeEventListener('scroll', this.scrollTo);
		};

		Employes.prototype.ajouter = function ajouter() {
			var _this3 = this;

			this.serviceEmployes.post(this.nouveauEmploye).then(function (employe) {
				_this3.ajoutAffiche = false;
				_this3.employes.push(_this3.nouveauEmploye);

				window.removeEventListener('scroll', function () {
					window.scrollTo(0, 0);
				});
			});
		};

		Employes.prototype.afficherModification = function afficherModification(employe) {
			this.modificationAffiche = true;
			this.employeAModifier = employe;

			window.addEventListener('scroll', this.scrollTo);
		};

		Employes.prototype.cancelerModification = function cancelerModification() {
			this.modificationAffiche = false;
			this.employeAModifier = new _employe.Employe();

			window.removeEventListener('scroll', this.scrollTo);
		};

		Employes.prototype.modifier = function modifier() {
			var _this4 = this;

			this.serviceEmployes.put(this.employeAModifier).then(function () {
				_this4.modificationAffiche = false;
			});
		};

		Employes.prototype.scrollTo = function scrollTo() {
			window.scrollTo(0, 0);
		};

		return Employes;
	}()) || _class);
});
define('views/equipe/index',['exports', 'aurelia-framework', '../../services/equipes'], function (exports, _aureliaFramework, _equipes) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.EquipeView = undefined;

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _dec, _class;

	var EquipeView = exports.EquipeView = (_dec = (0, _aureliaFramework.inject)(_equipes.ServiceEquipes), _dec(_class = function () {
		function EquipeView(serviceEquipes) {
			_classCallCheck(this, EquipeView);

			this.serviceEquipes = serviceEquipes;
		}

		EquipeView.prototype.activate = function activate(params, navigation) {
			this.getEquipe({
				idligue: params.id,
				nom: params.id2
			});
		};

		EquipeView.prototype.detached = function detached() {
			window.removeEventListener('scroll', this.scrollTo);
		};

		EquipeView.prototype.getEquipe = function getEquipe(equipe) {
			var _this = this;

			this.serviceEquipes.getEquipe(equipe).then(function (equipe) {
				_this.equipe = equipe;
				_this.equipe.nomOriginal = equipe.nom;
				_this.serviceEquipes.getGerant(equipe).then(function (gerant) {
					_this.gerant = gerant;
				});
				_this.serviceEquipes.getJoueurs(equipe).then(function (joueurs) {
					_this.joueurs = joueurs;
				});
			});
		};

		EquipeView.prototype.afficherAjout = function afficherAjout() {
			var _this2 = this;

			this.ajoutAffiche = true;

			window.addEventListener('scroll', this.scrollTo);
			this.serviceEquipes.getUsagersLibres(this.equipe.idligue).then(function (usagersLibres) {
				_this2.usagersLibres = usagersLibres;
			});
		};

		EquipeView.prototype.cancelerAjout = function cancelerAjout() {
			this.ajoutAffiche = false;
			this.nouveauJoueur = this.usagersLibres[0];

			window.removeEventListener('scroll', this.scrollTo);
		};

		EquipeView.prototype.ajouter = function ajouter() {
			var _this3 = this;

			this.serviceEquipes.post(this.nouveauJoueur.idusager, this.equipe).then(function () {
				_this3.ajoutAffiche = false;
				_this3.joueurs.push(_this3.nouveauJoueur);

				window.removeEventListener('scroll', _this3.scrollTo);
			});
		};

		EquipeView.prototype.cancelerModification = function cancelerModification() {
			this.modificationAffiche = false;

			window.removeEventListener('scroll', this.scrollTo);
		};

		EquipeView.prototype.afficherModification = function afficherModification() {
			this.modificationAffiche = true;

			window.addEventListener('scroll', this.scrollTo);
		};

		EquipeView.prototype.retirerJoueur = function retirerJoueur(index, idusager) {
			var _this4 = this;

			this.serviceEquipes.deleteJoueur(idusager).then(function (equipe) {
				_this4.joueurs.splice(index, 1);
			});
		};

		EquipeView.prototype.sauvegarder = function sauvegarder() {
			var _this5 = this;

			this.serviceEquipes.put(this.equipe).then(function () {
				_this5.modificationAffiche = false;

				window.removeEventListener('scroll', _this5.scrollTo);
			});
		};

		EquipeView.prototype.scrollTo = function scrollTo() {
			window.scrollTo(0, 0);
		};

		return EquipeView;
	}()) || _class);
});
define('views/equipes/index',['exports', 'aurelia-framework', '../../models/equipe', '../../services/equipes'], function (exports, _aureliaFramework, _equipe, _equipes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Equipes = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Equipes = exports.Equipes = (_dec = (0, _aureliaFramework.inject)(_equipes.ServiceEquipes), _dec(_class = function () {
    function Equipes(serviceEquipes) {
      _classCallCheck(this, Equipes);

      this.serviceEquipes = serviceEquipes;
    }

    Equipes.prototype.activate = function activate(params, navigation) {
      this.query = '';
      this.sort = 'ASC';
      this.getEquipes();
    };

    Equipes.prototype.getEquipes = function getEquipes() {
      var _this = this;

      this.serviceEquipes.get(this.query, this.sort).then(function (equipes) {
        _this.equipes = equipes;
      });
    };

    Equipes.prototype.retirerEquipe = function retirerEquipe(index, equipe) {
      var _this2 = this;

      this.serviceEquipes.delete(equipe).then(function () {
        _this2.equipes.splice(index, 1);
      });
    };

    return Equipes;
  }()) || _class);
});
define('views/ligue/index',['exports', 'aurelia-framework', '../../services/ligues', '../../services/usagers', '../../models/equipe'], function (exports, _aureliaFramework, _ligues, _usagers, _equipe) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.LigueView = undefined;

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _dec, _class;

	var LigueView = exports.LigueView = (_dec = (0, _aureliaFramework.inject)(_ligues.ServiceLigues, _usagers.ServiceUsagers), _dec(_class = function () {
		function LigueView(serviceLigues, serviceUsagers) {
			_classCallCheck(this, LigueView);

			this.serviceLigues = serviceLigues;
			this.serviceUsagers = serviceUsagers;
		}

		LigueView.prototype.activate = function activate(params, navigation) {
			this.title = 'Ligue ' + params.id;
			this.nouveauEquipe = new _equipe.Equipe();
			this.nouveauEquipe.idligue = params.id;
			this.getLigue(params.id);
		};

		LigueView.prototype.detached = function detached() {
			window.removeEventListener('scroll', this.scrollTo);
		};

		LigueView.prototype.getLigue = function getLigue(idligue) {
			var _this = this;

			this.serviceLigues.getLigue(idligue).then(function (ligue) {
				_this.ligue = ligue;
				_this.serviceLigues.getSaisons(idligue).then(function (saisons) {
					_this.saisons = saisons;
				});
				_this.serviceLigues.getEquipes(idligue).then(function (equipes) {
					_this.equipes = equipes;
				});
			});
		};

		LigueView.prototype.retirerSaison = function retirerSaison(index, idsaison) {
			var _this2 = this;

			this.serviceLigues.deleteSaison(idsaison).then(function () {
				_this2.saisons.splice(index, 1);
			});
		};

		LigueView.prototype.retirerEquipe = function retirerEquipe(index, equipe) {
			var _this3 = this;

			this.serviceLigues.deleteEquipe(equipe).then(function () {
				_this3.equipes.splice(index, 1);
			});
		};

		LigueView.prototype.afficherAjoutEquipe = function afficherAjoutEquipe() {
			var _this4 = this;

			this.ajoutEquipeAffiche = true;

			window.addEventListener('scroll', this.scrollTo);
			this.serviceUsagers.getGerantsLibres().then(function (gerants) {
				_this4.gerants = gerants;
			});
		};

		LigueView.prototype.cancelerAjoutEquipe = function cancelerAjoutEquipe() {
			this.ajoutEquipeAffiche = false;
			this.nouveauEquipe = new _equipe.Equipe();
			this.nouveauEquipe.idligue = this.ligue.idligue;

			window.removeEventListener('scroll', this.scrollTo);
		};

		LigueView.prototype.ajouterEquipe = function ajouterEquipe() {
			var _this5 = this;

			this.serviceLigues.postEquipe(this.nouveauEquipe).then(function (equipe) {
				_this5.ajoutEquipeAffiche = false;
				_this5.equipes.push(_this5.nouveauEquipe);
				_this5.nouveauEquipe = new _equipe.Equipe();
				_this5.nouveauEquipe.idligue = _this5.ligue.idligue;

				window.removeEventListener('scroll', function () {
					window.scrollTo(0, 0);
				});
			});
		};

		LigueView.prototype.scrollTo = function scrollTo() {
			window.scrollTo(0, 0);
		};

		return LigueView;
	}()) || _class);
});
define('views/ligues/index',['exports', 'aurelia-framework', '../../models/ligue', '../../services/ligues'], function (exports, _aureliaFramework, _ligue, _ligues) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Ligues = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Ligues = exports.Ligues = (_dec = (0, _aureliaFramework.inject)(_ligues.ServiceLigues), _dec(_class = function () {
    function Ligues(serviceLigues) {
      _classCallCheck(this, Ligues);

      this.serviceLigues = serviceLigues;
    }

    Ligues.prototype.activate = function activate(params, navigation) {
      this.query = '';
      this.sort = 'ASC';
      this.title = 'Ligues de ' + params.id;
      this.ajoutAffiche = false;
      this.nouveauLigue = new _ligue.Ligue();
      this.nouveauLigue.idsport = params.id;
      this.idsport = params.id;
      this.getLigues(params.id);
    };

    Ligues.prototype.detached = function detached() {
      window.removeEventListener('scroll', this.scrollTo);
    };

    Ligues.prototype.getLigues = function getLigues() {
      var _this = this;

      this.serviceLigues.get(this.query, this.sort, this.idsport).then(function (ligues) {
        _this.ligues = ligues;
      });
    };

    Ligues.prototype.afficherAjout = function afficherAjout() {
      this.ajoutAffiche = true;

      window.addEventListener('scroll', this.scrollTo);
    };

    Ligues.prototype.cancelerAjout = function cancelerAjout() {
      this.ajoutAffiche = false;
      this.nouveauLigue = new _ligue.Ligue();

      window.removeEventListener('scroll', this.scrollTo);
    };

    Ligues.prototype.ajouter = function ajouter() {
      var _this2 = this;

      this.serviceLigues.post(this.nouveauLigue).then(function () {
        _this2.ajoutAffiche = false;
        _this2.ligues.push(_this2.nouveauLigue);
      });
    };

    Ligues.prototype.retirer = function retirer(index, ligue) {
      var _this3 = this;

      this.serviceLigues.delete(ligue).then(function () {
        _this3.ligues.splice(index, 1);
      });
    };

    Ligues.prototype.scrollTo = function scrollTo() {
      window.scrollTo(0, 0);
    };

    return Ligues;
  }()) || _class);
});
define('views/liste-sports/index',['exports', 'aurelia-framework', '../../models/sport', '../../services/sports'], function (exports, _aureliaFramework, _sport, _sports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.ListeSports = undefined;

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _dec, _class;

	var ListeSports = exports.ListeSports = (_dec = (0, _aureliaFramework.inject)(_sports.ServiceSports), _dec(_class = function () {
		function ListeSports(serviceSports) {
			_classCallCheck(this, ListeSports);

			this.serviceSports = serviceSports;
		}

		ListeSports.prototype.activate = function activate(params, navigation) {
			this.query = '';
			this.sort = 'ASC';
			this.nouveauSport = new _sport.Sport();
			this.ajoutAffiche = false;
			this.getSports();
		};

		ListeSports.prototype.detached = function detached() {
			window.removeEventListener('scroll', this.scrollTo);
		};

		ListeSports.prototype.getSports = function getSports() {
			var _this = this;

			this.serviceSports.get(this.query, this.sort).then(function (sports) {
				_this.sports = sports;
			});
		};

		ListeSports.prototype.retirerSport = function retirerSport(index, idsport) {
			var _this2 = this;

			this.serviceSports.deleteSport(idsport).then(function () {
				_this2.sports.splice(index, 1);
			});
		};

		ListeSports.prototype.afficherAjout = function afficherAjout() {
			this.ajoutAffiche = true;

			window.addEventListener('scroll', this.scrollTo);
		};

		ListeSports.prototype.cancelerAjout = function cancelerAjout() {
			this.ajoutAffiche = false;
			this.nouveauSport = new _sport.Sport();

			window.removeEventListener('scroll', this.scrollTo);
		};

		ListeSports.prototype.ajouter = function ajouter() {
			var _this3 = this;

			this.serviceSports.post(this.nouveauSport).then(function (sport) {
				_this3.ajoutAffiche = false;
				_this3.sports.push(_this3.nouveauSport);
			});
		};

		ListeSports.prototype.afficherModification = function afficherModification(sport) {
			this.modificationAffiche = true;
			this.sportAModifier = sport;
		};

		ListeSports.prototype.cancelerModification = function cancelerModification() {
			this.modificationAffiche = false;

			window.removeEventListener('scroll', this.scrollTo);
		};

		ListeSports.prototype.modifier = function modifier() {
			var _this4 = this;

			this.serviceSports.put(this.sportAModifier).then(function () {
				_this4.modificationAffiche = false;
			});
		};

		ListeSports.prototype.scrollTo = function scrollTo() {
			window.scrollTo(0, 0);
		};

		return ListeSports;
	}()) || _class);
});
define('views/requetes/index',['exports', 'aurelia-framework', '../../services/requetes'], function (exports, _aureliaFramework, _requetes) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Requetes = undefined;

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _dec, _class;

	var Requetes = exports.Requetes = (_dec = (0, _aureliaFramework.inject)(_requetes.ServiceRequetes), _dec(_class = function () {
		function Requetes(serviceRequetes) {
			_classCallCheck(this, Requetes);

			this.serviceRequetes = serviceRequetes;
		}

		Requetes.prototype.activate = function activate(params, navigation) {
			this.requeteExecute = -1;
			this.requetes = ['1. Quelles sont les \xE9quipes qui comportent plus de 17 joueurs, toutes ligues confondues?\n\t\t\tLister les \xE9quipes en ordre alphab\xE9tique selon le nom de l\u2019\xE9quipe.', '2. Combien de joueurs ont le nom de famille \xAB Smith \xBB?', '3. Quels tournois sont commandit\xE9s par \xAB Ballons Inc. \xBB? Lister les IDTournoi en ordre\n\t\t\tcroissant.', '4. Combien de matchs sont supervis\xE9s par un arbitre dont le pr\xE9nom commence par la lettre\n\t\t\t\xABA\xBB?', '5. Quels sont les joueurs inscrits \xE0 l\u2019\xE9quipe \xABLions\xBB de la ligue L007? Lister les joueurs en\n\t\t\tordre alphab\xE9tique selon leur nom de famille.', '6. Quels sont les joueurs participant au tournoi T110? Lister les joueurs en ordre alphab\xE9tique\n\t\t\tselon leur nom de famille.', '7. Combien de matchs, toutes ligues confondues, ont eu lieu le 14 mars 2016 mais pas au\n\t\t\tcomplexe sportif Sportmax?', '8. Combien de joueurs sont inscrits \xE0 la fois \xE0 une \xE9quipe dans une ligue de basketball et une\n\t\t\t\xE9quipe dans une ligue de soccer?', '9. \xC0 quelle date est-ce que le gestionnaire de l\u2019\xE9quipe \xABTitans\xBB de la ligue L040 a effectu\xE9 le\n\t\t\tpaiement pour la saison d\xE9butant le 12 janvier 2016?', '10. Inscrire le joueur \xABJohn Smith\xBB \xE0 l\u2019\xE9quipe \xABLions\xBB de la ligue L007.', '11. Supprimer l\u2019usager \xAB\xC9milie Jones\xBB de l\u2019organisation.', '12. Modifier le nom de l\u2019\xE9quipe \xABFonceurs\xBB de la ligue L022.'];
		};

		Requetes.prototype.executerRequete = function executerRequete(numero) {
			var _this = this;

			this.serviceRequetes.execute(numero).then(function (resultats) {
				_this.requeteExecute = numero;
				_this.resultats = resultats;
			});
		};

		return Requetes;
	}()) || _class);
});
define('views/saison/index',['exports', 'aurelia-framework', '../../services/saisons', '../../services/matchs', '../../services/ligues', '../../models/match', '../../models/equipe'], function (exports, _aureliaFramework, _saisons, _matchs, _ligues, _match, _equipe) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.SaisonView = undefined;

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _dec, _class;

	var SaisonView = exports.SaisonView = (_dec = (0, _aureliaFramework.inject)(_saisons.ServiceSaisons, _matchs.ServiceMatchs, _ligues.ServiceLigues), _dec(_class = function () {
		function SaisonView(serviceSaisons, serviceMatchs, serviceLigues) {
			_classCallCheck(this, SaisonView);

			this.serviceSaisons = serviceSaisons;
			this.serviceMatchs = serviceMatchs;
			this.serviceLigues = serviceLigues;
		}

		SaisonView.prototype.activate = function activate(params, navigation) {
			this.getSaison(params.id);
			this.nouveauMatch = new _match.Match();
			this.nouveauMatch.idsaison = params.id;
		};

		SaisonView.prototype.detached = function detached() {
			window.removeEventListener('scroll', this.scrollTo);
		};

		SaisonView.prototype.getSaison = function getSaison(idsaison) {
			var _this = this;

			this.serviceSaisons.getSaison(idsaison).then(function (saison) {
				console.log(JSON.stringify(saison));
				_this.saison = saison;
				_this.title = 'Saison ' + saison.idsaison;
				_this.getEquipes(saison.idligue);
				_this.serviceSaisons.getMatchs(idsaison).then(function (matchs) {
					_this.matchs = matchs;

					var _loop = function _loop() {
						if (_isArray) {
							if (_i >= _iterator.length) return 'break';
							_ref = _iterator[_i++];
						} else {
							_i = _iterator.next();
							if (_i.done) return 'break';
							_ref = _i.value;
						}

						var match = _ref;

						match.idsaison = idsaison;
						_this.serviceMatchs.getEquipes(match.idmatch).then(function (equipes) {
							match.equipes = equipes;

							var _loop2 = function _loop2() {
								if (_isArray2) {
									if (_i2 >= _iterator2.length) return 'break';
									_ref2 = _iterator2[_i2++];
								} else {
									_i2 = _iterator2.next();
									if (_i2.done) return 'break';
									_ref2 = _i2.value;
								}

								var equipe = _ref2;

								_this.serviceMatchs.getPoints(match, equipe).then(function (points) {
									equipe.ptsmarques = points;
								});
							};

							for (var _iterator2 = match.equipes, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
								var _ref2;

								var _ret2 = _loop2();

								if (_ret2 === 'break') break;
							}
						});
					};

					for (var _iterator = _this.matchs, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
						var _ref;

						var _ret = _loop();

						if (_ret === 'break') break;
					}
				});
			});
		};

		SaisonView.prototype.getEquipes = function getEquipes(idligue) {
			var _this2 = this;

			this.serviceLigues.getEquipes(idligue).then(function (equipes) {
				_this2.equipes = equipes;
				_this2.equipeA = _this2.equipes[0];
				_this2.equipeB = _this2.equipes[1];
			});
		};

		SaisonView.prototype.retirerMatch = function retirerMatch(index, match) {
			var _this3 = this;

			this.serviceSaisons.deleteMatch(match).then(function () {
				_this3.matchs.splice(index, 1);
			});
		};

		SaisonView.prototype.ajouter = function ajouter() {
			var _this4 = this;

			this.serviceSaisons.postMatch(this.nouveauMatch, this.equipeA, this.equipeB).then(function () {
				_this4.matchs.push(_this4.nouveauMatch);
				_this4.ajoutAffiche = false;
				_this4.nouveauMatch = new _match.Match();
				_this4.equipeA = _this4.equipes[0];
				_this4.equipeB = _this4.equipes[1];

				window.removeEventListener('scroll', _this4.scrollTo);
			});
		};

		SaisonView.prototype.afficherAjout = function afficherAjout() {
			this.ajoutAffiche = true;

			window.addEventListener('scroll', this.scrollTo);
		};

		SaisonView.prototype.cancelerAjout = function cancelerAjout() {
			this.ajoutAffiche = false;
			this.nouveauMatch = new _match.Match();
			this.equipeA = this.equipes[0];
			this.equipeB = this.equipes[1];
			this.ptsmarquesA = 0;
			this.ptsmarquesB = 0;

			window.removeEventListener('scroll', this.scrollTo);
		};

		SaisonView.prototype.afficherModificationSaison = function afficherModificationSaison() {
			this.modificationSaisonAffiche = true;

			window.addEventListener('scroll', this.scrollTo);
		};

		SaisonView.prototype.cancelerModificationSaison = function cancelerModificationSaison() {
			this.modificationSaisonAffiche = false;

			window.removeEventListener('scroll', this.scrollTo);
		};

		SaisonView.prototype.modifierSaison = function modifierSaison() {
			var _this5 = this;

			this.serviceSaisons.put(this.saison).then(function () {
				_this5.modificationSaisonAffiche = false;

				window.removeEventListener('scroll', _this5.scrollTo);
			});
		};

		SaisonView.prototype.scrollTo = function scrollTo() {
			window.scrollTo(0, 0);
		};

		return SaisonView;
	}()) || _class);
});
define('views/sports/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Sports = exports.Sports = function () {
    function Sports() {
      _classCallCheck(this, Sports);
    }

    Sports.prototype.configureRouter = function configureRouter(config, router) {
      this.router = router;
      config.title = 'Tournois de sports';
      config.map([{ route: '', moduleId: 'views/liste-sports/index', nav: true }, { route: 'ligues/:id', name: 'ligues', moduleId: 'views/ligues/index', title: 'Ligues' }, { route: 'tournois/:id', name: 'tournois', moduleId: 'views/tournois/index', title: 'Tournois' }, { route: 'ligue/:id', name: 'ligue', moduleId: 'views/ligue/index', title: 'Ligue' }, { route: 'tournoi/:id', name: 'tournoi', moduleId: 'views/tournoi/index', title: 'Tournoi' }]);
    };

    return Sports;
  }();
});
define('views/tournoi/index',['exports', 'aurelia-framework', '../../services/tournois', '../../services/matchs'], function (exports, _aureliaFramework, _tournois, _matchs) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.TournoiView = undefined;

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _dec, _class;

	var TournoiView = exports.TournoiView = (_dec = (0, _aureliaFramework.inject)(_tournois.ServiceTournois), _dec(_class = function () {
		function TournoiView(serviceTournois) {
			_classCallCheck(this, TournoiView);

			this.serviceTournois = serviceTournois;
		}

		TournoiView.prototype.activate = function activate(params, navigation) {
			this.title = 'Tournoi ' + params.id;
			this.getTournoi(params.id);
		};

		TournoiView.prototype.getTournoi = function getTournoi(idtournoi) {
			var _this = this;

			this.serviceTournois.getTournoi(idtournoi).then(function (tournoi) {
				_this.tournoi = tournoi;
				_this.serviceTournois.getMatchs(idtournoi).then(function (matchs) {
					_this.matchs = matchs;

					var _loop = function _loop() {
						if (_isArray) {
							if (_i >= _iterator.length) return 'break';
							_ref = _iterator[_i++];
						} else {
							_i = _iterator.next();
							if (_i.done) return 'break';
							_ref = _i.value;
						}

						var match = _ref;

						_this.serviceTournois.getEquipes(match.idmatch).then(function (equipes) {
							match.equipes = equipes;

							var _loop2 = function _loop2() {
								if (_isArray2) {
									if (_i2 >= _iterator2.length) return 'break';
									_ref2 = _iterator2[_i2++];
								} else {
									_i2 = _iterator2.next();
									if (_i2.done) return 'break';
									_ref2 = _i2.value;
								}

								var equipe = _ref2;

								_this.serviceTournois.getPoints(match.idmatch, equipe.idligue, equipe.nom).then(function (ptsmarques) {
									equipe.ptsmarques = ptsmarques;
								});
							};

							for (var _iterator2 = match.equipes, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
								var _ref2;

								var _ret2 = _loop2();

								if (_ret2 === 'break') break;
							}
						});
					};

					for (var _iterator = _this.matchs, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
						var _ref;

						var _ret = _loop();

						if (_ret === 'break') break;
					}
				});
				_this.serviceTournois.getCommanditaires(idtournoi).then(function (commanditaires) {
					_this.commanditaires = commanditaires;

					var _loop3 = function _loop3() {
						if (_isArray3) {
							if (_i3 >= _iterator3.length) return 'break';
							_ref3 = _iterator3[_i3++];
						} else {
							_i3 = _iterator3.next();
							if (_i3.done) return 'break';
							_ref3 = _i3.value;
						}

						var commanditaire = _ref3;

						_this.serviceTournois.getContribution(idtournoi, commanditaire.idcommanditaire).then(function (contribution) {
							commanditaire.contribution = contribution;
						});
					};

					for (var _iterator3 = _this.commanditaires, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
						var _ref3;

						var _ret3 = _loop3();

						if (_ret3 === 'break') break;
					}
				});
			});
		};

		TournoiView.prototype.retirerMatch = function retirerMatch(index, idmatch) {
			var _this2 = this;

			this.serviceTournois.deleteMatch(idmatch).then(function () {
				_this2.matchs.splice(index, 1);
			});
		};

		TournoiView.prototype.retirerCommanditaire = function retirerCommanditaire(index, idcommanditaire) {
			var _this3 = this;

			this.serviceTournois.deleteCommanditaire(idcommanditaire).then(function () {
				_this3.commanditaires.splice(index, 1);
			});
		};

		TournoiView.prototype.afficherModificationTournoi = function afficherModificationTournoi() {
			this.modificationTournoiAffiche = true;

			window.addEventListener('scroll', this.scrollTo);
		};

		TournoiView.prototype.cancelerModificationTournoi = function cancelerModificationTournoi() {
			this.modificationTournoiAffiche = false;

			window.removeEventListener('scroll', this.scrollTo);
		};

		TournoiView.prototype.modifierTournoi = function modifierTournoi() {
			var _this4 = this;

			this.serviceTournois.put(this.tournoi).then(function () {
				_this4.modificationTournoiAffiche = false;

				window.removeEventListener('scroll', _this4.scrollTo);
			});
		};

		return TournoiView;
	}()) || _class);
});
define('views/tournois/index',['exports', 'aurelia-framework', '../../models/tournoi', '../../services/tournois'], function (exports, _aureliaFramework, _tournoi, _tournois) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Tournois = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Tournois = exports.Tournois = (_dec = (0, _aureliaFramework.inject)(_tournois.ServiceTournois), _dec(_class = function () {
    function Tournois(serviceTournois) {
      _classCallCheck(this, Tournois);

      this.serviceTournois = serviceTournois;
    }

    Tournois.prototype.activate = function activate(params, navigation) {
      this.query = '';
      this.sort = 'ASC';
      this.title = 'Tournois de ' + params.id;
      this.idsport = params.id;
      this.getTournois(params.id);
    };

    Tournois.prototype.getTournois = function getTournois() {
      var _this = this;

      this.serviceTournois.get(this.query, this.sort, this.idsport).then(function (tournois) {
        _this.tournois = tournois;
      });
    };

    Tournois.prototype.retirer = function retirer(index, tournoi) {
      var _this2 = this;

      this.serviceTournois.delete(tournoi).then(function () {
        _this2.tournois.splice(index, 1);
      });
    };

    return Tournois;
  }()) || _class);
});
define('views/usagers/index',['exports', 'aurelia-framework', '../../models/usager', '../../services/usagers'], function (exports, _aureliaFramework, _usager, _usagers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Usagers = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Usagers = exports.Usagers = (_dec = (0, _aureliaFramework.inject)(_usagers.ServiceUsagers), _dec(_class = function () {
    function Usagers(serviceUsagers) {
      _classCallCheck(this, Usagers);

      this.serviceUsagers = serviceUsagers;
    }

    Usagers.prototype.activate = function activate(params, navigation) {
      this.query = '';
      this.sort = 'ASC';
      this.nouveauUsager = new _usager.Usager();
      this.nouveauUsager.estGerant = false;
      this.usagerAModifier = new _usager.Usager();
      this.afficherModification = false;
      this.getUsagers();
    };

    Usagers.prototype.detached = function detached() {
      window.removeEventListener('scroll', this.scrollTo);
    };

    Usagers.prototype.getUsagers = function getUsagers() {
      var _this = this;

      this.serviceUsagers.get(this.query, this.sort).then(function (usagers) {
        _this.usagers = usagers;
      });
    };

    Usagers.prototype.retirer = function retirer(index, usager) {
      var _this2 = this;

      this.serviceUsagers.delete(usager).then(function () {
        _this2.usagers.splice(index, 1);
      });
    };

    Usagers.prototype.afficherInscription = function afficherInscription() {
      this.inscriptionAffiche = true;

      window.addEventListener('scroll', this.scrollTo);
    };

    Usagers.prototype.cancelerInscription = function cancelerInscription() {
      this.inscriptionAffiche = false;
      this.nouveauUsager = new _usager.Usager();
      this.nouveauUsager.estGerant = false;

      window.removeEventListener('scroll', this.scrollTo);
    };

    Usagers.prototype.cancelerModification = function cancelerModification() {
      this.afficherModification = false;

      window.removeEventListener('scroll', this.scrollTo);
    };

    Usagers.prototype.inscrire = function inscrire() {
      var _this3 = this;

      this.serviceUsagers.post(this.nouveauUsager).then(function (usager) {
        _this3.inscriptionAffiche = false;
        _this3.usagers.push(_this3.nouveauUsager);

        window.removeEventListener('scroll', _this3.scrollTo);
      });
    };

    Usagers.prototype.modifier = function modifier(usager) {
      this.afficherModification = true;
      this.usagerAModifier = usager;

      window.addEventListener('scroll', this.scrollTo);
    };

    Usagers.prototype.sauvegarder = function sauvegarder() {
      var _this4 = this;

      this.serviceUsagers.put(this.usagerAModifier).then(function (usager) {
        _this4.afficherModification = false;

        window.removeEventListener('scroll', _this4.scrollTo);
      });
    };

    Usagers.prototype.scrollTo = function scrollTo() {
      window.scrollTo(0, 0);
    };

    return Usagers;
  }()) || _class);
});
define('resources/value-converters/date',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var DateValueConverter = exports.DateValueConverter = function () {
    function DateValueConverter() {
      _classCallCheck(this, DateValueConverter);
    }

    DateValueConverter.prototype.toView = function toView(date) {
      if (date) {
        return date.split('T')[0];
      }
    };

    return DateValueConverter;
  }();
});
define('text!styles.css', ['module'], function(module) { module.exports = "html, body {\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  color: #444;\n  font-size: 16px;\n\tfont-family: 'Arial';\n  background-color: #fff;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.title {\n\tmargin-bottom: 10px;\n}\n\n.container {\n  position: relative;\n  width: 100%;\n}\n\n.height-hundred {\n\theight: 100px;\n}\n\nbutton {\n  margin: 0;\n}\n\n#mainTitle {\n  float: left;\n}\n\ninput {\n  padding: 5px;\n  border: 1px solid #aaa;\n  border-radius: 5px;\n  font-size: 14px;\n  width: 300px;\n}\n\nheader, footer {\n  margin: 0 auto;\n  width: 100%;\n}\n\n.nav-bar, section {\n  margin: 0 auto;\n  width: 1000px;\n}\n\nheader {\n  margin: 0;\n  padding: 0;\n  background-color: #008080;\n  box-shadow: 1px 1px 5px #222;\n  height: 50px;\n}\n\nnav {\n  margin: 0 auto;\n  padding: 0;\n  width: 1000px;\n}\n\nul, li {\n  padding: 0;\n  margin: 0;\n}\n\n.nav-bar {\n  list-style-type: none;\n  height: 50px;\n  float: right;\n  width: 800px;\n}\n\n.nav-bar li {\n  display: inline-block;\n  height: 50px;\n}\n\n.nav-bar li:hover a {\n  background-color: #006666;\n}\n\n.nav-bar li a {\n\tfont-size: 14px;\n  display: block;\n  height: 50px;\n\tline-height: 50px;\n\tpadding: 0 30px;\n  margin: 0;\n  text-decoration: none;\n  color: #fff;\n  text-shadow: 1px 1px 5px #222;\n  transition: background-color 0.2s;\n}\n\n.active, .nav-bar li.active:hover {\n  background-color: #004d4d;\n}\n\n#main {\n  padding: 0;\n  margin: 0 auto;\n  min-height: 800px;\n  padding-bottom: 200px;\n  margin-bottom: -100px;\n  margin-top: 50px;\n}\n\nfooter {\n  background-color: #004d4d;\n  height: 100px;\n}\n\n.icon-btn {\n  background-color: transparent;\n  border: none;\n}\n\n.left-section {\n  width: 700px;\n  height: 100%;\n  display: inline-block;\n}\n\n.right-section {\n  width: 300px;\n  padding: 15px;\n  display: inline-block;\n  background-color: #333;\n  height: 100%;\n  color: #fff;\n}\n\n.btn {\n  padding: 15px;\n  border-radius: 5px;\n  background-color: #008080;\n  color: #fff;\n  text-shadow: 1px 1px 5px #222;\n  box-shadow: 1px 1px 5px #222;\n  text-align: center;\n  font-size: 14px;\n  border: none;\n}\n\n#logo {\n  margin: 0;\n  float: left;\n  color: #fff;\n  line-height: 50px;\n  text-shadow: 1px 1px 5px #222;\n}\n\n#logo span {\n  font-size: 15px;\n}\n\nh1 { font-size: 2em; }\nh2 { font-size: 1.5em; }\nh3 { font-size: 1.3em; }\nh4 { font-size: 1em; }\nh5 { font-size: 0.8em; }\nh6 { font-size: 0.7em; }\n\n.search-bar {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 40px;\n  width: 500px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.search-bar input {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; \n  width: 400px;\n  margin: 0;\n  padding: 5px 15px;\n  height: 100%;\n}\n\n.search-bar button {\n  padding: 5px;\n  margin: 0;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px; \n  height: 100%;\n  width: 100px;\n  border: 1px solid #aaa;\n  background-color: #008080;\n  border-left: none;\n}\n\n.search-bar button .material-icons {\n  color: #fff;\n}\n\n.search-bar-container {\n  height: 75px;\n}\n\n.sort-list {\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 40px;\n  width: 300px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.sort-list label {\n  display: inline-block;\n  width: 50px;\n  height: 40px;\n  line-height: 40px;\n  font-weight: bold;\n}\n\nselect {\n  border: 1px solid #aaa;\n  border-radius: 5px;\n  width: 250px;\n  height: 40px;\n  padding: 5px 15px;\n  background-color: #fff;\n}\n\n.delete-btn {\n  background: none;\n  border: none;\n  height: 20px;\n}\n\n.top-right, .bottom-right, .top-left, .bottom-left {\n  position: absolute;\n}\n\n.top-right {\n  right: 10px;\n  top: 10px;\n}\n\n.bottom-right {\n  right: 10px;\n  bottom: 10px;\n}\n\n.top-left {\n  left: 10px;\n  top: 10px;\n}\n\n.bottom-left {\n  left: 10px;\n  bottom: 10px;\n}\n\n.space-evenly {\n  display: inline-flex;\n  justify-content: space-between;\n}\n\n.btn-inscription {\n  float: right;\n}\n\n.popup-background {\n  position: fixed;\n  background-color: rgba(0, 0, 0, .7);\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  bottom: 0;\n  z-index: 1;\n  overflow: hidden;\n}\n\n.popup-background .popup {\n  position: fixed;\n  top: 100px;\n  left: 50%;\n  margin-left: -300px;\n  width: 600px;\n  box-shadow: 1px 1px 10px #222;\n  border-radius: 5px;\n  z-index: 2;\n  padding: 20px;\n  background-color: #fff;\n  opacity: 1;\n\toverflow: hidden;\n}\n\n.popup input, .popup select {\n  margin-bottom: 5px;\n\tdisplay: block;\n\twidth: 400px;\n\theight: 40px;\n  padding: 5px 15px;\n}\n\n.popup .icon-btn {\n  float: right;\n}\n\n.icon-btn {\n  background: none;\n  border: none;\n}\n\n.btn-inscription-container {\n  height: 75px;\n}\n\n.btn-flotante {\n  background-color: #008080;\n  padding: 15px;\n  border-radius: 100%;\n  border: none;\n  box-shadow: 1px 1px 5px #222; \n\tmargin-top: 110px;\n\tmargin-right: 40px;\n\tmargin-bottom: 50px;\n  position: fixed;\n}\n\n.btn-flotante i.material-icons {\n  color: #fff;\n  font-size: 28px;\n}\n\n.list {\n  list-style-type: none;\n}\n\n.list li {\n  position: relative;\n  display: block;\n  padding: 20px;\n  margin-bottom: 10px;\n  background-color: #fff;\n  border-radius: 3px;\n  box-shadow: 1px 1px 5px #222;\n}\n\n.list li ul li {\n\tpadding: 10px;\n\tmargin-bottom: 20px;\n}\n\n.list strong {\n\tmargin-right: 5px;\n}\n\nli span {\n\tmargin-bottom: 10px;\n  margin-right: 30px;\n  display: inline-flex;\n  vertical-align: middle;\n}\n\nli span i {\n  margin-right: 10px;\n}\n\n.icon-text {\n  display: inline-flex;\n  vertical-align: middle;\n\tmargin-right: 10px;\n\tmargin-bottom: 10px;\n}\n\n.icon-text i {\n\tmargin-right: 10px;\n}\n\n.list h3 {\n\tmargin-top: 0;\n}\n\n.half-width {\n\tposition: relative;\n\twidth: 500px;\n\theight: 100%;\n\tdisplay: table-cell;\n\tpadding-right: 15px;\n}\n\n.equipes-match {\n\theight: 50px;\n\tdisplay: inline-flex;\n\tjustify-content: space-between;\n\twidth: 100%;\n\tpadding: 30px;\n}\n\ninput[type=checkbox] {\n\tpadding: 0;\n\tmargin-left: 5px;\n\twidth: auto;\n\tvertical-align: middle;\n}\n\nlabel {\n\tdisplay: inline-flex;\n\tjustify-content: space-between;\n\theight: 50px;\n\tline-height: 50px;\n}\n"; });
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./styles.css\"></require>\n  <header>\n    <nav>\n      <h1 id=\"logo\">T<span>ournois</span>S<span>ports</span></h1>\n      <ul class=\"nav-bar\">\n        <li repeat.for=\"route of router.navigation\" class=\"${route.isActive ? 'active' : ''}\">\n          <a href.bind=\"route.href\">${route.title}</a>\n        </li>\n      </ul>\n    </nav>\n  </header>\n  <section id=\"main\">\n    <router-view></router-view>\n  </section>\n  <footer></footer>\n</template>\n"; });
define('text!views/accueil/styles.css', ['module'], function(module) { module.exports = "#sectionAccueil {\n\twidth: 100%;\n}\n\n#sectionAccueil h1 {\n\tmargin: 0 auto;\n\twidth: 1000px;\n\ttext-align: center;\n\tmargin-top: 150px;\n\tfont-size: 50px;\n}\n\n#sectionAccueil p {\n\ttext-align: center;\n\tmargin: 0 auto;\n\twidth: 100%;\n\tmargin-top: 15px;\n}\n\n#sectionAccueil a {\n\ttext-decoration: none;\n\tdisplay: block;\n\ttext-align: center;\n\tpadding: 15px;\n\tcolor: #fff;\n\ttext-shadow: 1px 1px 5px #222;\n\tbackground-color: #008080;\n\twidth: 250px;\n\tmargin: 75px auto;\n\tborder-radius: 3px;\n\tbox-shadow: 1px 1px 5px #222;\n}\n"; });
define('text!views/accueil/index.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./styles.css\"></require>\n  <section id=\"sectionAccueil\">\n\t\t<h1>Bienvenue à Tournois Sports!</h1>\n\t\t<p>Tournois sports, l'application qui éveille le directeur sportif en vous.</p>\n\t\t<a href=\"/#/usagers\">INSCRIVEZ-VOUS</a>\n  </section>\n</template>\n"; });
define('text!views/employes/index.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./styles.css\"></require>\n  <section>\n    <h1>Employés</h1>\n    <div class=\"container search-bar-container\">\n      <form class=\"search-bar\">\n        <input type=\"text\" placeholder=\"Mots clés\" value.bind=\"query\" />\n        <button type=\"submit\" click.trigger=\"getEmployes()\"><i class=\"material-icons\">search</i></button>\n      </form>\n      <div class=\"sort-list\">\n        <label>Trier:</label>\n        <select value.bind=\"sort\" change.trigger=\"getEmployes()\">\n          <option value=\"ASC\">Ascendante</option>\n          <option value=\"DESC\">Descendante</option>\n        </select>\n      </div>\n    </div>\n    <ul class=\"list\">\n      <li repeat.for=\"employe of employes\">\n        <h3>${employe.nom}, ${employe.prenom}</h3>\n        <p>${employe.role}</p>\n\t\t\t\t<span if.bind=\"employe.role==='Arbitre'\"><strong>Nombre d'années:</strong>${employe.nbrannees}</span>\n\t\t\t\t<span if.bind=\"employe.role==='Gestionnaire' && employe.numtel !== 'undefined'\"><i class=\"material-icons\">phone</i>${employe.numtel}</span>\n\t\t\t\t<span if.bind=\"employe.role==='Gestionnaire' && employe.courriel !== 'undefined'\"><i class=\"material-icons\">email</i>${employe.courriel}</span>\n\t\t\t\t<div class=\"top-right\">\n\t\t\t\t\t<button class=\"icon-btn\" click.trigger=\"afficherModification(employe)\"><i class=\"material-icons\">edit</i></button>\n          <button class=\"icon-btn\" click.trigger=\"retirer($index, employe)\"><i class=\"material-icons\">clear</i></button>\n        </div>\n      </li>\n    </ul>\n\n\t\t<button class=\"btn-flotante bottom-right\" click.trigger=\"afficherAjout()\">\n      <i class=\"material-icons\">add</i>\n    </button>\n   \n    <!-- Ajouter un employe -->\n    <div class=\"popup-background\" if.bind=\"ajoutAffiche\">\n      <div class=\"popup\">\n        <button class=\"icon-btn\" click.trigger=\"cancelerAjout()\"><i class=\"material-icons\">clear</i></button>\n        <h3>Ajouter un employé</h3>\n\t\t\t\t<input value.bind=\"nouveauEmploye.idemploye\" placeholder=\"IDEmploye\" required/>\n        <input value.bind=\"nouveauEmploye.nom\" placeholder=\"Nom\" required/>\n        <input value.bind=\"nouveauEmploye.prenom\" placeholder=\"Prénom\" required/>\n        <input value.bind=\"nouveauEmploye.role\" placeholder=\"Role\" required/>\n\t\t\t\t<input if.bind=\"nouveauEmploye.role==='Arbitre'\" type=\"number\" value.bind=\"nouveauEmploye.nbrannees\" placeholder=\"Nombre d'années\" required/>\n\t\t\t\t<input if.bind=\"nouveauEmploye.role==='Gestionnaire' && employe.numtel !== 'undefined'\" value.bind=\"nouveauEmploye.numtel\" placeholder=\"(XXX) XXX-XXXX\"/>\n\t\t\t\t<input if.bind=\"nouveauEmploye.role==='Gestionnaire' && employe.courriel !== 'undefined'\" value.bind=\"nouveauEmploye.courriel\" placeholder=\"example@gmail.com\"/>\n        <button class=\"btn btn-inscription\" click.trigger=\"ajouter()\">AJOUTER</button>\n      </div>\n    </div>\n\n\t\t<!-- Modifier un employe -->\n    <div class=\"popup-background\" if.bind=\"modificationAffiche\">\n      <div class=\"popup\">\n        <button class=\"icon-btn\" click.trigger=\"cancelerModification()\"><i class=\"material-icons\">clear</i></button>\n        <h3>Modifier l'employé ${employeAModifier.idemploye}</h3>\n        <input value.bind=\"employeAModifier.nom\" placeholder=\"Nom\" required/>\n        <input value.bind=\"employeAModifier.prenom\" placeholder=\"Prénom\" required/>\n        <input value.bind=\"employeAModifier.role\" placeholder=\"Role\" required/>\n\t\t\t\t<input if.bind=\"employeAModifier.role==='Arbitre'\" type=\"number\" value.bind=\"employeAModifier.nbrannees\" placeholder=\"Nombre d'années\" required/>\n\t\t\t\t<input if.bind=\"employeAModifier.role==='Gestionnaire'\" value.bind=\"employeAModifier.numtel\" placeholder=\"(XXX) XXX-XXXX\"/>\n\t\t\t\t<input if.bind=\"employeAModifier.role==='Gestionnaire'\" value.bind=\"employeAModifier.courriel\" placeholder=\"example@gmail.com\"/>\n        <button type=\"submit\" class=\"btn btn-inscription\" click.trigger=\"modifier()\">SAUVEGARDER</button>\n      </div>\n    </div>\n\n  </section>\n</template>\n"; });
define('text!views/employes/styles.css', ['module'], function(module) { module.exports = ".employes {\n  list-style-type: none;\n}\n\n.employes li {\n  display: block;\n  border-bottom: 1px solid #333;\n  padding: 20px;\n  margin-bottom: 10px;\n  background-color: #fff;\n  border-radius: 5px;\n  box-shadow: 1px 1px 5px #222;\n}\n\n.employes li span {\n  margin-right: 30px;\n  display: inline-flex;\n  vertical-align: middle;\n}\n\n.employes li span i {\n  margin-right: 10px;\n}\n\n.employes a {\n  float: right;\n  text-decoration: none;\n  color: #333;\n  display: inline-flex;\n  vertical-align: middle;\n}\n"; });
define('text!views/equipe/index.html', ['module'], function(module) { module.exports = "<template>\n\t<section>\n\t\t<div>\n\t\t<h1>${equipe.nom}</h1>\n\t\t<h2>Joueurs</h2>\n\t\t<button class=\"btn-flotante top-right\" click.trigger=\"afficherModification()\">\n      <i class=\"material-icons\">edit</i>\n    </button>\n\t\t<ul class=\"list\">\n\t\t\t<li>\n\t\t\t\t<h3>${gerant.nom}, ${gerant.prenom}</h3>\n\t\t\t\t<p>Gérant</p>\n\t\t\t\t<span><i class=\"material-icons\">school</i>${gerant.diplomesportif}</span>\n\t\t\t\t<span if.bind=\"gerant.courriel\"><i class=\"material-icons\">email</i>${gerant.courriel}</span>\n        <span if.bind=\"gerant.numtel\"><i class=\"material-icons\">phone</i>${gerant.numtel}</span>\n\t\t\t</li>\n\t\t\t<li repeat.for=\"joueur of joueurs\">\n\t\t\t\t<h3>${joueur.nom}, ${joueur.prenom}</h3>\n\t\t\t\t<span if.bind=\"joueur.courriel\"><i class=\"material-icons\">email</i>${joueur.courriel}</span>\n        <span if.bind=\"joueur.numtel\"><i class=\"material-icons\">phone</i>${joueur.numtel}</span>\n\t\t\t\t<button class=\"icon-btn top-right\" click.trigger=\"retirerJoueur($index, joueur.idusager)\"><i class=\"material-icons\">clear</i></button>\n\t\t\t</li>\n\t\t</ul>\n\n\t\t<button class=\"btn-flotante bottom-right\" click.trigger=\"afficherAjout()\">\n      <i class=\"material-icons\">add</i>\n    </button>\n   \n    <!-- Ajouter un joueur -->\n    <div class=\"popup-background\" if.bind=\"ajoutAffiche\">\n      <div class=\"popup\">\n        <button class=\"icon-btn\" click.trigger=\"cancelerAjout()\"><i class=\"material-icons\">clear</i></button>\n        <h3>Ajouter un joueur</h3>\n        <select value.bind=\"nouveauJoueur\">\n\t\t\t\t\t<option repeat.for=\"usager of usagersLibres\" model.bind=\"usager\">${usager.idusager}</option>\n        </select>\n        <button class=\"btn btn-inscription\" click.trigger=\"ajouter()\">AJOUTER</button>\n      </div>\n    </div>\n\n\t\t <!-- Modifier un equipe -->\n    <div class=\"popup-background\" if.bind=\"modificationAffiche\">\n      <div class=\"popup\">\n        <button class=\"icon-btn\" click.trigger=\"cancelerModification()\"><i class=\"material-icons\">clear</i></button>\n        <h3>Modification de l'équipe ${equipe.nom} du ligue ${equipe.idlige}</h3>\n        <input value.bind=\"equipe.nom\" placeholder=\"Nom\"/>\n        <button class=\"btn btn-inscription\" click.trigger=\"sauvegarder()\">SAUVERGARDER</button>\n      </div>\n    </div>\n\n\t</section>\n</template>\n"; });
define('text!views/equipes/styles.css', ['module'], function(module) { module.exports = ""; });
define('text!views/equipes/index.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./styles.css\"></require>\n  <section>\n    <h1>Équipes</h1>\n    <div class=\"container search-bar-container\">\n      <form class=\"search-bar\">\n        <input type=\"text\" placeholder=\"Mots clés\" value.bind=\"query\" />\n        <button type=\"submit\" click.trigger=\"getEquipes()\"><i class=\"material-icons\">search</i></button>\n      </form>\n      <div class=\"sort-list\">\n        <label>Trier:</label>\n        <select value.bind=\"sort\" change.trigger=\"getEquipes()\">\n          <option value=\"ASC\">Ascendante</option>\n          <option value=\"DESC\">Descendante</option>\n        </select>\n      </div>\n    </div>\n    <ul class=\"list\">\n      <li repeat.for=\"equipe of equipes\">\n        <h3>${equipe.nom}</h3>\n\t\t\t\t<p><strong>Ligue</strong> <a href=\"/#/sports/ligue/${equipe.idligue}\">${equipe.idligue}</a></p>\n\t\t\t\t<button class=\"icon-btn top-right\" click.trigger=\"retirerEquipe($index, equipe)\"><i class=\"material-icons\">clear</i></button>\n\t\t\t\t<a class=\"bottom-right\" href=\"/#/equipe/${equipe.idligue}/${equipe.nom}\"><i class=\"material-icons\">keyboard_arrow_right</i></a>\n      </li>\n    </ul>\n  </section>\n</template>\n"; });
define('text!views/ligue/styles.css', ['module'], function(module) { module.exports = "#ligueTitle {\n\tmargin: 0;\n}\n\n#difficulteLigue {\n\tmargin: 10px 0;\n}\n"; });
define('text!views/ligue/index.html', ['module'], function(module) { module.exports = "<template>\n\t<require from=\"./styles.css\"></require>\n\t<section>\n\t\t<h1 id=\"ligueTitle\">${title}</h1>\n\t\t<h4 id=\"difficulteLigue\">${ligue.niveaudifficulte === 'C' ? 'Compétitive' : 'Récréative'}</h4>\n\t\t<div class=\"half-width\">\n\t\t\t<h3>Saisons</h3>\n\t\t\t<hr/>\n\t\t\t<ul class=\"list\">\n\t\t\t\t<li repeat.for=\"saison of saisons\">\n\t\t\t\t\t<h3>${saison.idsaison}</h3>\n\t\t\t\t\t<button class=\"icon-btn top-right\" click.trigger=\"retirerSaison($index, saison.idsaison)\"><i class=\"material-icons\">clear</i></button>\n\t\t\t\t\t<span><i class=\"material-icons\">today</i>Date limite de paiement: ${saison.datelimitepaiement.split('T')[0]}</span>\n\t\t\t\t\t<span><i class=\"material-icons\">date_range</i>Durée: ${saison.datecommencement.split('T')[0]} - ${saison.datefin.split('T')[0]}</span>\n\t\t\t\t\t<a class=\"bottom-right\" href=\"/#/saison/${saison.idsaison}\"><i class=\"material-icons\">keyboard_arrow_right</i></a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class=\"half-width\">\n\t\t\t<h3>Équipes</h3>\n\t\t\t<hr/>\n\t\t\t<ul class=\"list\">\n\t\t\t\t<li repeat.for=\"equipe of equipes\">\n\t\t\t\t\t<h3>${equipe.nom}</h3>\n\t\t\t\t\t<button class=\"icon-btn top-right\" click.trigger=\"retirerEquipe($index, equipe)\"><i class=\"material-icons\">clear</i></button>\n\t\t\t\t\t<a class=\"bottom-right\" href=\"/#/equipe/${equipe.idligue}/${equipe.nom}\"><i class=\"material-icons\">keyboard_arrow_right</i></a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<button class=\"btn-flotante bottom-right\" click.trigger=\"afficherAjoutEquipe()\">\n\t\t\t\t<i class=\"material-icons\">add</i>\n\t\t\t</button>\n\t\t</div>\n\n\t\t <!-- Ajouter un equipe -->\n    <div class=\"popup-background\" if.bind=\"ajoutEquipeAffiche\">\n      <div class=\"popup\">\n        <button class=\"icon-btn\" click.trigger=\"cancelerAjoutEquipe()\"><i class=\"material-icons\">clear</i></button>\n        <h3>Ajouter un équipe</h3>\n\t\t\t\t<input value.bind=\"nouveauEquipe.nom\" placeholder=\"Nom\"/>\n\t\t\t\t<select value.bind=\"nouveauEquipe.idusager\">\n\t\t\t\t\t<option value=\"\">Gerant</option>\n\t\t\t\t\t<option repeat.for=\"gerant of gerants\" model.bind=\"gerant.idusager\">${gerant.idusager}</option>\n\t\t\t\t</select>\n\t\t\t\t<input type=\"number\" value.bind=\"nouveauEquipe.nbrmaxjoueurs\" placeholder=\"Nombre maximums de joueurs\"/>\n\t\t\t\t<input type=\"number\" value.bind=\"nouveauEquipe.nbrminjoueurs\" placeholder=\"Nombre minimums de joueurs\"/>\n        <button class=\"btn btn-inscription\" click.trigger=\"ajouterEquipe()\">AJOUTER</button>\n      </div>\n    </div>\n\n\t</section>\n</template>\n"; });
define('text!views/ligues/styles.css', ['module'], function(module) { module.exports = ".ligues {\n  list-style-type: none;\n}\n\n.ligues li {\n  display: block;\n  border-bottom: 1px solid #333;\n  padding: 20px;\n  margin-bottom: 10px;\n  background-color: #fff;\n  border-radius: 5px;\n  box-shadow: 1px 1px 5px #222;\n}\n\n.ligues li span {\n  margin-right: 30px;\n  display: inline-flex;\n  vertical-align: middle;\n}\n\n.ligues li span i {\n  margin-right: 10px;\n}\n\n.ligues a {\n  float: right;\n  text-decoration: none;\n  color: #333;\n  display: inline-flex;\n  vertical-align: middle;\n}\n"; });
define('text!views/ligues/index.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./styles.css\"></require>\n  <section>\n    <h1>${title}</h1>\n    <div class=\"container search-bar-container\">\n      <form class=\"search-bar\">\n        <input type=\"text\" placeholder=\"Mots clés\" value.bind=\"query\" />\n        <button type=\"submit\" click.trigger=\"getLigues()\"><i class=\"material-icons\">search</i></button>\n      </form>\n      <div class=\"sort-list\">\n        <label>Trier:</label>\n        <select value.bind=\"sort\" change.trigger=\"getLigues()\">\n          <option value=\"ASC\">Ascendante</option>\n          <option value=\"DESC\">Descendante</option>\n        </select>\n      </div>\n    </div>\n    <ul class=\"list\">\n      <li repeat.for=\"ligue of ligues\">\n        <h3>${ligue.idligue}</h3>\n        <h4>${ligue.niveaudifficulte === 'C' ? 'Compétitive' : 'Récréative'}</h4>\n        <button class=\"icon-btn top-right\" click.trigger=\"retirer($index, ligue.idligue)\"><i class=\"material-icons\">clear</i></button>\n\t\t\t\t<a class=\"bottom-right\" href=\"/#/sports/ligue/${ligue.idligue}\"><i class=\"material-icons\">keyboard_arrow_right</i></a>\n      </li>\n    </ul>\n\t\t<button class=\"btn-flotante bottom-right\" click.trigger=\"afficherAjout()\">\n      <i class=\"material-icons\">add</i>\n    </button>\n\n\t\t <div class=\"popup-background\" if.bind=\"ajoutAffiche\">\n      <div class=\"popup\">\n        <button class=\"icon-btn\" click.trigger=\"cancelerAjout()\"><i class=\"material-icons\">clear</i></button>\n        <h3>Ajouter une ligue</h3>\n        <input value.bind=\"nouveauLigue.idligue\" placeholder=\"IDLigue\"/>\n\t\t\t\t<select value.bind=\"nouveauLigue.niveaudifficulte\">\t\t\n\t\t\t\t\t<option value=\"C\">Compétitive</option>\n\t\t\t\t\t<option value=\"R\">Récréative</option>\n\t\t\t\t</select>\t\n        <button class=\"btn btn-inscription\" click.trigger=\"ajouter()\">AJOUTER</button>\n      </div>\n    </div>\n\n  </section>\n</template>\n"; });
define('text!views/liste-sports/styles.css', ['module'], function(module) { module.exports = ""; });
define('text!views/liste-sports/index.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./styles.css\"></require>\n  <section>\n    <h1>Sports</h1>\n    <div class=\"container search-bar-container\">\n      <form class=\"search-bar\">\n        <input type=\"text\" placeholder=\"Mots clés\" value.bind=\"query\" />\n        <button type=\"submit\" click.trigger=\"getSports()\"><i class=\"material-icons\">search</i></button>\n      </form>\n      <div class=\"sort-list\">\n        <label>Trier:</label>\n        <select value.bind=\"sort\" change.trigger=\"getSports()\">\n          <option value=\"ASC\">Ascendante</option>\n          <option value=\"DESC\">Descendante</option>\n        </select>\n      </div>\n    </div>\n    <ul class=\"list\">\n      <li repeat.for=\"sport of sports\">\n        <h3>${sport.nom}</h3>\n\t\t\t\t<p>${sport.description}</p>\n\t\t\t\t<div class=\"top-right\">\n      \t\t<button class=\"icon-btn\" click.trigger=\"afficherModification(sport)\"><i class=\"material-icons\">edit</i></button>\n\t\t\t\t\t<button class=\"icon-btn\" click.trigger=\"retirerSport($index, sport)\"><i class=\"material-icons\">clear</i></button>\n\t\t\t\t</div>\n\t\t\t\t<span><a href=\"/#/sports/ligues/${sport.idsport}\">Ligues</a></span>\n        <span><a href=\"/#/sports/tournois/${sport.idsport}\">Tournois</a></span>\n      </li>\n    </ul>\n\n\t\t<button class=\"btn-flotante bottom-right\" click.trigger=\"afficherAjout()\">\n      <i class=\"material-icons\">add</i>\n    </button>\n\n\t\t<div class=\"popup-background\" if.bind=\"ajoutAffiche\">\n      <form class=\"popup\">\n        <button class=\"icon-btn\" click.trigger=\"cancelerAjout()\"><i class=\"material-icons\">clear</i></button>\n        <h3>Ajouter un sport</h3>\n        <input value.bind=\"nouveauSport.idsport\" placeholder=\"IDSport\" required/>\n        <input value.bind=\"nouveauSport.nom\" placeholder=\"Nom\" required/>\n        <input value.bind=\"nouveauSport.description\" placeholder=\"Description\" required/>\n        <button type=\"submit\" class=\"btn btn-inscription\" click.trigger=\"ajouter()\">AJOUTER</button>\n      </form>\n    </div>\n\n\t\t<div class=\"popup-background\" if.bind=\"modificationAffiche\">\n      <form class=\"popup\">\n        <button class=\"icon-btn\" click.trigger=\"cancelerModification()\"><i class=\"material-icons\">clear</i></button>\n        <h3>Modifier le sport ${sportAModifier.idsport}</h3>\n        <input value.bind=\"sportAModifier.idsport\" placeholder=\"IDSport\" required/>\n        <input value.bind=\"sportAModifier.nom\" placeholder=\"Nom\" required/>\n        <input value.bind=\"sportAModifier.description\" placeholder=\"Description\" required/>\n        <button type=\"submit\" class=\"btn btn-inscription\" click.trigger=\"modifier()\">SAUVEGARDER</button>\n      </form>\n    </div>\n\n  </section>\n</template>\n"; });
define('text!views/requetes/styles.css', ['module'], function(module) { module.exports = ""; });
define('text!views/requetes/index.html', ['module'], function(module) { module.exports = "<template>\n\t<section>\n\t\t<h1>Requêtes</h1>\n\t\t<ul class=\"list\">\n\t\t\t<li repeat.for=\"requete of requetes\">\n\t\t\t\t<p>${requete}</p>\n\t\t\t\t<button if.bind=\"($index + 1) !== requeteExecute\" class=\"icon-btn bottom-right\" click.trigger=\"executerRequete($index + 1)\">\n\t\t\t\t\t<i class=\"material-icons\">keyboard_arrow_down</i>\n\t\t\t\t</button>\n\t\t\t\t<button if.bind=\"($index + 1) === requeteExecute\" class=\"icon-btn bottom-right\" click.trigger=\"requeteExecute = -1\">\n\t\t\t\t\t<i class=\"material-icons\">keyboard_arrow_up</i>\n\t\t\t\t</button>\n\t\t\t\t<div if.bind=\"($index + 1) === requeteExecute\" class=\"resultats\">\n\t\t\t\t\t<h3>Résultats</h3>\n\t\t\t\t\t<ul if.bind=\"($index + 1) === 1\" class=\"list\">\n\t\t\t\t\t\t<li repeat.for=\"resultat of resultats\">\n\t\t\t\t\t\t\t<h4>${resultat.nom}</h4>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul if.bind=\"($index + 1) === 2 || ($index + 1) === 4 || ($index + 1) === 7 || ($index + 1) === 8 ||\n\t\t\t\t\t\t($index + 1) === 9 || ($index + 1) === 10 || ($index + 1) === 11 || ($index + 1) === 12\" \n\t\t\t\t\t\tclass=\"list\">\n\t\t\t\t\t\t<li repeat.for=\"resultat of resultats\">\n\t\t\t\t\t\t\t<h4>${resultat.requete_2}</h4>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul if.bind=\"($index + 1) === 3\" class=\"list\">\n\t\t\t\t\t\t<li repeat.for=\"resultat of resultats\">\n\t\t\t\t\t\t\t<h4>${resultat.idtournoi}</h4>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul if.bind=\"($index + 1) === 5 || ($index + 1) === 6\" class=\"list\">\n\t\t\t\t\t\t<li repeat.for=\"resultat of resultats\">\n\t\t\t\t\t\t\t<h4>${resultat.nom}, ${resultat.prenom}</h4>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\n\t</section>\n</template>\n\t\t\tif (numero === 10) {\n\t\t\t\treturn this.http.fetch('requete', {\n\t\t\t\t\tmethod: 'post',\n\t\t\t\t\tbody: json({numero: numero})\n\t\t\t\t});\n\t\t\t} else if (numero === 11) {\n\t\t\t\treturn this.http.fetch('requete', {\n\t\t\t\t\tmethod: 'delete',\n\t\t\t\t\tbody: json({numero: numero})\n\t\t\t\t});\n\t\t\t} else {\n\t\t\t\treturn this.http.fetch('requete', {\n\t\t\t\t\tmethod: 'put',\n\t\t\t\t\tbody: json({numero: numero})\n\t\t\t\t});\n\t\t\t}\n"; });
define('text!views/sports/styles.css', ['module'], function(module) { module.exports = ""; });
define('text!views/saison/index.html', ['module'], function(module) { module.exports = "<template>\n\t<require from=\"../../resources/value-converters/date\"></require>\n\t<section>\n\t\t<h1>${title}</h1>\n\t\t<div><i class=\"material-icons icon-text\">today</i>Date limite de paiement: ${saison.datelimitepaiement | date}</div>\n\t\t<div><i class=\"material-icons icon-text\">date_range</i>Durée: ${saison.datecommencement | date} - ${saison.datefin | date}</div>\n\t\t<button class=\"btn-flotante top-right\" click.trigger=\"afficherModificationSaison()\">\n      <i class=\"material-icons\">edit</i>\n    </button>\n\t\t<h2>Matchs</h2>\n\t\t<ul class=\"list\">\n\t\t\t<li repeat.for=\"match of matchs\">\n\t\t\t\t<span><i class=\"material-icons\">today</i>${match.date | date}</span>\n\t\t\t\t<span><i class=\"material-icons\">access_time</i>${match.heure}</span>\n\t\t\t\t<span><i class=\"material-icons\">location_on</i>${match.lieu}</span>\n\t\t\t\t<div class=\"equipes-match\">\n\t\t\t\t\t<span><h3>${match.equipes[0].nom}</h3></span>\n\t\t\t\t\t<span><h3>${match.equipes[0].ptsmarques} - ${match.equipes[1].ptsmarques}</h3></span>\n\t\t\t\t\t<span><h3>${match.equipes[1].nom}</h3></span>\n\t\t\t\t</div>\n\t\t\t\t<button class=\"icon-btn top-right\" click.trigger=\"retirerMatch($index, match)\"><i class=\"material-icons\">clear</i></button>\n\t\t\t</li>\n\t\t</ul>\n\t\t<button class=\"btn-flotante bottom-right\" click.trigger=\"afficherAjout()\">\n      <i class=\"material-icons\">add</i>\n    </button>\n\n\t\t<div class=\"popup-background\" if.bind=\"ajoutAffiche\">\n      <div class=\"popup\">\n        <button class=\"icon-btn\" click.trigger=\"cancelerAjout()\"><i class=\"material-icons\">clear</i></button>\n        <h3>Ajouter un match</h3>\n        <input value.bind=\"nouveauMatch.idmatch\" placeholder=\"IDMatch\"/>\n        <input type=\"date\" value.bind=\"nouveauMatch.date\" placeholder=\"Date\"/>\n        <input type=\"time\" value.bind=\"nouveauMatch.heure\" placeholder=\"Heure\"/>\n        <input value.bind=\"nouveauMatch.lieu\" placeholder=\"Lieu\"/>\n\t\t\t\t<select value.bind=\"equipeA\">\n\t\t\t\t\t<option repeat.for=\"equipe of equipes\" disabled.bind=\"equipe.nom===equipeB.nom && equipe.idligue===equipeB.idligue\" model.bind=\"equipe\">${equipe.nom}</option>\n\t\t\t\t</select>\n\t\t\t\t<input if.bind=\"equipeA.nom !== ''\" type=\"number\" value.bind=\"equipeA.ptsmarques\" placeholder=\"Nombre de points A\"/>\n\t\t\t\t<select value.bind=\"equipeB\">\n\t\t\t\t\t<option repeat.for=\"equipe of equipes\" disabled.bind=\"equipe.nom===equipeA.nom && equipe.idligue===equipeA.idligue\" model.bind=\"equipe\">${equipe.nom}</option>\n\t\t\t\t</select>\n        <input if.bind=\"equipeB.nom !== ''\" type=\"number\" value.bind=\"equipeB.ptsmarques\" placeholder=\"Nombre de points B\"/>\n        <button class=\"btn btn-inscription\" click.trigger=\"ajouter()\">AJOUTER</button>\n      </div>\n    </div>\n\n\t\t<div class=\"popup-background\" if.bind=\"modificationSaisonAffiche\">\n      <div class=\"popup\">\n        <button class=\"icon-btn\" click.trigger=\"cancelerModificationSaison()\"><i class=\"material-icons\">clear</i></button>\n        <h3>Modifier le saison ${saison.idsaison}</h3>\n        <input type=\"date\" value.bind=\"saison.datelimitepaiement | date\" placeholder=\"Date limite de paiement\"/>\n        <input type=\"date\" value.bind=\"saison.datecommencement | date\" placeholder=\"Date de commencement\"/>\n        <input type=\"date\" value.bind=\"saison.datefin | date\" placeholder=\"Date de fin\"/>\n        <button class=\"btn btn-inscription\" click.trigger=\"modifierSaison()\">SAUVEGARDER</button>\n      </div>\n    </div>\n\n\t</section>\n</template>\n"; });
define('text!views/tournoi/styles.css', ['module'], function(module) { module.exports = "#oeuvreCharite {\n\tmargin-top: 0;\n}\n"; });
define('text!views/sports/index.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./styles.css\"></require>\n  <section>\n    <router-view></router-view>\n  </section>\n</template>\n"; });
define('text!views/tournois/styles.css', ['module'], function(module) { module.exports = ""; });
define('text!views/tournoi/index.html', ['module'], function(module) { module.exports = "<template>\n\t<require from=\"../../resources/value-converters/date\"></require>\n\t<require from=\"./styles.css\"></require>\n\t<section>\n\t\t<h1 class=\"title\">${title}</h1>\n\t\t<h3 id=\"oeuvreCharite\">Oeuvre de charité: ${tournoi.oeuvrecharite}</h3>\n\t\t<div><i class=\"material-icons icon-text\">date_range</i>Durée: ${tournoi.datedebut | date} - ${tournoi.datefin | date}</div>\n\t\t<div><i class=\"material-icons icon-text\">attach_money</i>${tournoi.fondsaccumules}</div>\n\t\t<button class=\"btn-flotante top-right\" click.trigger=\"afficherModificationTournoi()\">\n      <i class=\"material-icons\">edit</i>\n    </button>\n\t\t<div class=\"half-width\">\n\t\t\t<h3>Matchs</h3>\n\t\t\t<hr/>\n\t\t\t<ul class=\"list\">\n\t\t\t\t<li repeat.for=\"match of matchs\">\n\t\t\t\t\t<span><i class=\"material-icons\">today</i>${match.date | date}</span>\n\t\t\t\t\t<span><i class=\"material-icons\">access_time</i>${match.heure}</span>\n\t\t\t\t\t<span><i class=\"material-icons\">location_on</i>${match.lieu}</span>\n\t\t\t\t\t<div class=\"equipes-match\">\n\t\t\t\t\t\t<span><h3>${match.equipes[0].nom}</h3></span>\n\t\t\t\t\t\t<span><h3>${match.equipes[0].ptsmarques} - ${match.equipes[1].ptsmarques}</h3></span>\n\t\t\t\t\t\t<span><h3>${match.equipes[1].nom}</h3></span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<button class=\"icon-btn top-right\" click.trigger=\"retirerMatch($index, match.idmatch)\"><i class=\"material-icons\">clear</i></button>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class=\"half-width\">\n\t\t\t<h3>Commanditaires</h3>\n\t\t\t<hr/>\n\t\t\t<ul class=\"list\">\n\t\t\t\t<li repeat.for=\"commanditaire of commanditaires\">\n\t\t\t\t\t<h3>${commanditaire.nom}</h3>\n\t\t\t\t\t<span>Contribution: $${commanditaire.contribution}</span>\n\t\t\t\t\t<span><i class=\"material-icons\">phone</i>${commanditaire.numtel}</span>\n\t\t\t\t\t<button class=\"icon-btn top-right\" click.trigger=\"retirerCommanditaire($index, commanditaire.idcommanditaire)\"><i class=\"material-icons\">clear</i></button>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\n\t\t<div class=\"popup-background\" if.bind=\"modificationTournoiAffiche\">\n      <div class=\"popup\">\n        <button class=\"icon-btn\" click.trigger=\"cancelerModificationTournoi()\"><i class=\"material-icons\">clear</i></button>\n        <h3>Modifier le tournoi ${tournoi.idtournoi}</h3>\n        <input value.bind=\"tournoi.oeuvrecharite\" placeholder=\"Oeuvre de charité\"/>\n        <input type=\"date\" value.bind=\"tournoi.datedebut | date\" placeholder=\"Date de début\"/>\n        <input type=\"date\" value.bind=\"tournoi.datefin | date\" placeholder=\"Date de fin\"/>\n        <button class=\"btn btn-inscription\" click.trigger=\"modifierTournoi()\">SAUVEGARDER</button>\n      </div>\n    </div>\n\n\t</section>\n</template>\n"; });
define('text!views/usagers/styles.css', ['module'], function(module) { module.exports = ""; });
define('text!views/tournois/index.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./styles.css\"></require>\n  <section>\n    <h1>${title}</h1>\n    <div class=\"container search-bar-container\">\n      <form class=\"search-bar\">\n        <input type=\"text\" placeholder=\"Mots clés\" value.bind=\"query\" />\n        <button type=\"submit\" click.trigger=\"getTournois()\"><i class=\"material-icons\">search</i></button>\n      </form>\n      <div class=\"sort-list\">\n        <label>Trier:</label>\n        <select value.bind=\"sort\" change.trigger=\"getTournois()\">\n          <option value=\"ASC\">Ascendante</option>\n          <option value=\"DESC\">Descendante</option>\n        </select>\n      </div>\n    </div>\n    <ul class=\"list\">\n      <li repeat.for=\"tournoi of tournois\">\n        <h3>${tournoi.oeuvrecharite}</h3>\n        <span><i class=\"material-icons\">date_range</i>${tournoi.datedebut.split('T')[0]} - ${tournoi.datefin.split('T')[0]}</span>\n        <span><i class=\"material-icons\">attach_money</i> ${tournoi.fondsaccumules}</span>\n        <div class=\"top-right\">\n          <button class=\"icon-btn\" click.trigger=\"retirer($index, tournoi)\"><i class=\"material-icons\">clear</i></button>\n        </div>\n        <a class=\"bottom-right\" href=\"/#/sports/tournoi/${tournoi.idtournoi}\"><i class=\"material-icons\">keyboard_arrow_right</i></a>\n      </li>\n    </ul>\n  </section>\n</template>\n"; });
define('text!views/usagers/index.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./styles.css\"></require>\n  <section>\n    <h1>Usagers</h1>\n    <div class=\"container search-bar-container\">\n      <form class=\"search-bar\">\n        <input type=\"text\" placeholder=\"Mots clés\" value.bind=\"query\" />\n        <button type=\"submit\" click.trigger=\"getUsagers()\"><i class=\"material-icons\">search</i></button>\n      </form>\n      <div class=\"sort-list\">\n        <label>Trier:</label>\n        <select value.bind=\"sort\" change.trigger=\"getUsagers()\">\n          <option value=\"ASC\">Ascendante</option>\n          <option value=\"DESC\">Descendante</option>\n        </select>\n      </div>\n    </div>\n    <ul class=\"list\">\n      <li repeat.for=\"usager of usagers\">\n        <h3>${usager.nom}, ${usager.prenom}</h3>\n        <span if.bind=\"usager.courriel\"><i class=\"material-icons\">email</i>${usager.courriel}</span>\n        <span if.bind=\"usager.numtel\"><i class=\"material-icons\">phone</i>${usager.numtel}</span>\n        <div class=\"top-right\">\n\t\t\t\t\t<button class=\"icon-btn\" click.trigger=\"modifier(usager)\"><i class=\"material-icons\">edit</i></button>\n          <button class=\"icon-btn\" click.trigger=\"retirer($index, usager)\"><i class=\"material-icons\">clear</i></button>\n        </div>\n      </li>\n    </ul>\n\n\t\t<button class=\"btn-flotante bottom-right\" click.trigger=\"afficherInscription()\">\n      <i class=\"material-icons\">add</i>\n    </button>\n   \n    <!-- Ajouter un usager -->\n    <div class=\"popup-background\" if.bind=\"inscriptionAffiche\">\n      <div class=\"popup\">\n        <button class=\"icon-btn\" click.trigger=\"cancelerInscription()\"><i class=\"material-icons\">clear</i></button>\n        <h3>Inscription</h3>\n        <input value.bind=\"nouveauUsager.idusager\" placeholder=\"IDUsager\"/>\n        <input value.bind=\"nouveauUsager.nom\" placeholder=\"Nom\"/>\n        <input value.bind=\"nouveauUsager.prenom\" placeholder=\"Prénom\"/>\n        <input value.bind=\"nouveauUsager.courriel\" placeholder=\"example@gmail.com\"/>\n        <input value.bind=\"nouveauUsager.numtel\" placeholder=\"(XXX) XXX-XXXX\"/>\n\t\t\t\t<label>Gérant <input type=\"checkbox\" checked.bind=\"nouveauUsager.estGerant\"/></label>\n        <input if.bind=\"nouveauUsager.estGerant\" value.bind=\"nouveauUsager.diplomesportif\" placeholder=\"Diplome sportif\"/>\n        <button class=\"btn btn-inscription\" click.trigger=\"inscrire()\">INSCRIRE</button>\n      </div>\n    </div>\n\n    <!-- Modifier un usager -->\n    <div class=\"popup-background\" if.bind=\"afficherModification\">\n      <div class=\"popup\">\n        <button class=\"icon-btn\" click.trigger=\"cancelerModification()\"><i class=\"material-icons\">clear</i></button>\n        <h3>Modification de l'usager ${usagerAModifier.idusager}</h3>\n        <input value.bind=\"usagerAModifier.nom\" placeholder=\"Nom\"/>\n        <input value.bind=\"usagerAModifier.prenom\" placeholder=\"Prénom\"/>\n        <input value.bind=\"usagerAModifier.courriel\" placeholder=\"example@gmail.com\"/>\n        <input value.bind=\"usagerAModifier.numtel\" placeholder=\"(XXX) XXX-XXXX\"/>\n        <button class=\"btn btn-inscription\" click.trigger=\"sauvegarder()\">SAUVERGARDER</button>\n      </div>\n    </div>\n  </section>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map