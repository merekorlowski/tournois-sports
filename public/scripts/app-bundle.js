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
      config.map([{ route: ['', 'accueil'], name: 'accueil', moduleId: 'views/accueil/index', nav: true, title: 'Accueil' }, { route: 'sports', name: 'sports', moduleId: 'views/sports/index', nav: true, title: 'Sports' }, { route: 'equipes', name: 'equipes', moduleId: 'views/equipes/index', nav: true, title: 'Équipes' }, { route: 'usagers', name: 'usagers', moduleId: 'views/usagers/index', nav: true, title: 'Usagers' }, { route: 'employes', name: 'employes', moduleId: 'views/employes/index', nav: true, title: 'Employés' }]);
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

  var Match = exports.Match = function () {
    function Match(match) {
      _classCallCheck(this, Match);

      Object.assign(this, match);
      this.equipes = [];
    }

    Match.prototype.getEquipes = function getEquipes() {};

    Match.prototype.getTournoi = function getTournoi() {};

    Match.prototype.getArbitres = function getArbitres() {};

    return Match;
  }();
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
      this.nbrMinJoueurs = 0;
      this.nbrMaxJoueurs = 0;
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
        config.withBaseUrl('http://localhost:3000/employes/');
      });
    }

    ServiceEmployes.prototype.get = function get(query, sort) {
      return this.http.fetch('?query=' + query + '&sort=' + sort).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data.map(function (employe) {
          return new _employe.Employe(employe);
        }) || [];
      });
    };

    return ServiceEmployes;
  }();
});
define('services/equipes',['exports', 'aurelia-fetch-client', '../models/equipe'], function (exports, _aureliaFetchClient, _equipe) {
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
        config.withBaseUrl('http://localhost:3000/equipes/');
      });
    }

    ServiceEquipes.prototype.get = function get(query, sort) {
      return this.http.fetch('?query=' + query + '&sort=' + sort).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data.map(function (equipe) {
          return new _equipe.Equipe(equipe);
        }) || [];
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
        body: json(ligue)
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

    ServiceLigues.prototype.deleteEquipe = function deleteEquipe(idequipe) {
      return this.http.fetch('ligue/equipe', {
        method: 'delete',
        body: json(idequipe)
      });
    };

    ServiceLigues.prototype.deleteSaison = function deleteSaison(idsaison) {
      return this.http.fetch('ligue/saison', {
        method: 'delete',
        body: json(idsaison)
      });
    };

    ServiceLigues.prototype.getGestionnaires = function getGestionnaires(idligue) {
      return this.http.fetch('ligues/gestionnaires?idligue=' + idligue).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data.map(function (gestionnaire) {
          return new _gestionnaire.Gestionnaire(gestionnaire);
        }) || [];
      });
    };

    ServiceLigues.prototype.getArbitres = function getArbitres(idligue) {
      return this.http.fetch('ligues/arbitres?idligue=' + idligue).then(function (response) {
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
        config.withBaseUrl('http://localhost:3000/sports/');
      });
    }

    ServiceSports.prototype.get = function get(query, sort) {
      return this.http.fetch('?query=' + query + '&sort=' + sort).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data.map(function (sport) {
          return new _sport.Sport(sport);
        }) || [];
      });
    };

    ServiceSports.prototype.delete = function _delete(sport) {
      return this.http.fetch('', {
        method: 'delete',
        body: (0, _aureliaFetchClient.json)(sport)
      });
    };

    ServiceSports.prototype.post = function post(sport) {
      return this.http.fetch('', {
        method: 'post',
        body: (0, _aureliaFetchClient.json)(sport)
      });
    };

    ServiceSports.prototype.put = function put(sport) {
      return this.http.fetch('', {
        method: 'put',
        body: (0, _aureliaFetchClient.json)(sport)
      });
    };

    return ServiceSports;
  }();
});
define('services/tournois',['exports', 'aurelia-fetch-client', '../models/tournoi'], function (exports, _aureliaFetchClient, _tournoi) {
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
        config.withBaseUrl('http://localhost:3000/tournois/');
      });
    }

    ServiceTournois.prototype.get = function get(query, sort, idsport) {
      return this.http.fetch('?query=' + query + '&sort=' + sort + '&idsport=' + idsport).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data.map(function (tournoi) {
          return new _tournoi.Tournoi(tournoi);
        }) || [];
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
        config.withBaseUrl('http://localhost:3000/usagers/');
      });
    }

    ServiceUsagers.prototype.get = function get(query, sort) {
      return this.http.fetch('?query=' + query + '&sort=' + sort).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data.map(function (usager) {
          return new _usager.Usager(usager);
        }) || [];
      });
    };

    ServiceUsagers.prototype.delete = function _delete(usager) {
      return this.http.fetch('', {
        method: 'delete',
        body: (0, _aureliaFetchClient.json)(usager)
      });
    };

    ServiceUsagers.prototype.post = function post(usager) {
      return this.http.fetch('', {
        method: 'post',
        body: (0, _aureliaFetchClient.json)(usager)
      });
    };

    ServiceUsagers.prototype.put = function put(usager) {
      return this.http.fetch('', {
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
      this.sort = 1;
      this.getEmployes();
    };

    Employes.prototype.getEmployes = function getEmployes() {
      var _this = this;

      this.serviceEmployes.get(this.query, this.sort).then(function (employes) {
        _this.employes = employes;
      });
    };

    return Employes;
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
      this.sort = 1;
      this.getEquipes();
    };

    Equipes.prototype.getEquipes = function getEquipes() {
      var _this = this;

      this.serviceEquipes.get(this.query, this.sort).then(function (equipes) {
        _this.equipes = equipes;
      });
    };

    return Equipes;
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
      this.sort = 1;
      this.title = 'Ligues de ' + params.id;
      this.getLigues(params.id);
    };

    Ligues.prototype.getLigues = function getLigues(sport) {
      var _this = this;

      this.serviceLigues.get(this.query, this.sort, sport).then(function (ligues) {
        _this.ligues = ligues;
      });
    };

    Ligues.prototype.retirer = function retirer(index, ligue) {
      var _this2 = this;

      this.serviceLigues.delete(ligue).then(function () {
        _this2.ligues.splice(index, 1);
      });
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
      this.sort = 1;
      this.getSports();
    };

    ListeSports.prototype.getSports = function getSports() {
      var _this = this;

      this.serviceSports.get(this.query, this.sort).then(function (sports) {
        _this.sports = sports;
      });
    };

    return ListeSports;
  }()) || _class);
});
define('views/requetes/index',[], function () {
  "use strict";
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
      this.sort = 1;
      this.title = 'Tournois de ' + params.id;
      this.getTournois(params.id);
    };

    Tournois.prototype.getTournois = function getTournois(idsport) {
      var _this = this;

      this.serviceTournois.get(this.query, this.sort, idsport).then(function (tournois) {
        _this.tournois = tournois;
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
      this.sort = 1;
      this.nouveauUsager = new _usager.Usager();
      this.usagerAModifier = new _usager.Usager();
      this.afficherModification = false;
      this.getUsagers();
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

    Usagers.prototype.inscrire = function inscrire() {
      var _this3 = this;

      this.serviceUsagers.post(this.nouveauUsager).then(function (usager) {
        _this3.afficherInscription = false;
        _this3.usagers.push(_this3.nouveauUsager);
      });
    };

    Usagers.prototype.modifier = function modifier(usager) {
      this.afficherModification = true;
      this.usagerAModifier = usager;
      window.onwheel = preventDefault;
      document.onkeydown = preventDefaultForScrollKeys;
    };

    Usagers.prototype.sauvegarder = function sauvegarder() {
      var _this4 = this;

      this.serviceUsagers.put(this.usagerAModifier).then(function (usager) {
        _this4.afficherModification = false;
      });
    };

    return Usagers;
  }()) || _class);
});
define('views/tournoi/index',[], function () {
  "use strict";
});
define('views/ligue/index',['exports', 'aurelia-framework', '../../services/ligues'], function (exports, _aureliaFramework, _ligues) {
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

	var LigueView = exports.LigueView = (_dec = (0, _aureliaFramework.inject)(_ligues.ServiceLigues), _dec(_class = function () {
		function LigueView(serviceLigues) {
			_classCallCheck(this, LigueView);

			this.serviceLigues = serviceLigues;
		}

		LigueView.prototype.activate = function activate(params, navigation) {
			this.title = 'Ligue ' + params.id;
			this.getLigue(params.id);
		};

		LigueView.prototype.getLigue = function getLigue(idligue) {
			var _this = this;

			this.serviceLigues.getLigue(idligue).then(function (ligue) {
				_this.ligue = ligue;
				console.log(JSON.stringify(_this.ligue));
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

		LigueView.prototype.retirerEquipe = function retirerEquipe(index, idequipe) {
			var _this3 = this;

			this.serviceLigues.deleteEquipe(idequipe).then(function () {
				_this3.equipes.splice(index, 1);
			});
		};

		return LigueView;
	}()) || _class);
});
define('services/saisons',['exports', 'aurelia-fetch-client', '../models/saison'], function (exports, _aureliaFetchClient, _saison) {
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

    ServiceSaisons.prototype.delete = function _delete(ligue) {
      return this.http.fetch('saison', {
        method: 'delete',
        body: json(ligue)
      });
    };

    return ServiceSaisons;
  }();
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./styles.css\"></require>\n  <header>\n    <nav>\n      <h1 id=\"logo\">T<span>ournois</span> S<span>ports</span></h1>\n      <ul class=\"nav-bar\">\n        <li repeat.for=\"route of router.navigation\" class=\"${route.isActive ? 'active' : ''}\">\n          <a href.bind=\"route.href\">${route.title}</a>\n        </li>\n      </ul>\n    </nav>\n  </header>\n  <section id=\"main\">\n    <router-view></router-view>\n  </section>\n  <footer></footer>\n</template>\n"; });
define('text!styles.css', ['module'], function(module) { module.exports = "html, body {\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  color: #333;\n  font-size: 16px;\n  background-color: #f2f2f2;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.title {\n  border-bottom: 1px solid #333;\n  padding: 5px;\n}\n\n.container {\n  width: 100%;\n  position: relative;\n}\n\nbutton {\n  margin: 0;\n}\n\n#mainTitle {\n  float: left;\n}\n\ninput {\n  padding: 5px;\n  border: 1px solid #aaa;\n  border-radius: 5px;\n  font-size: 14px;\n  width: 300px;\n}\n\nheader, footer {\n  margin: 0 auto;\n  width: 100%;\n}\n\n.nav-bar, section {\n  margin: 0 auto;\n  width: 1000px;\n}\n\nheader {\n  margin: 0;\n  padding: 0;\n  background-color: #006633;\n  box-shadow: 1px 1px 5px #222;\n  height: 50px;\n}\n\nnav {\n  margin: 0 auto;\n  padding: 0;\n  width: 1000px;\n}\n\nul, li {\n  padding: 0;\n  margin: 0;\n}\n\n.nav-bar {\n  list-style-type: none;\n  height: 50px;\n  float: right;\n  width: 800px;\n}\n\n.nav-bar li {\n  display: inline-block;\n  height: 50px;\n}\n\n.nav-bar li:hover a {\n  background-color: #004d28;\n}\n\n.nav-bar li a {\n  font-weight: bold;\n  display: block;\n  height: 100%;\n  padding: 15px 30px;\n  margin: 0;\n  text-decoration: none;\n  color: #fff;\n  text-shadow: 1px 1px 5px #222;\n  transition: background-color 0.2s;\n}\n\n.active, .nav-bar li.active:hover {\n  background-color: #00331a;\n}\n\n#main {\n  padding: 0;\n  margin: 0 auto;\n  min-height: 800px;\n  padding-bottom: 200px;\n  margin-bottom: -100px;\n  margin-top: 50px;\n}\n\nfooter {\n  background-color: #222;\n  height: 100px;\n}\n\n.icon-btn {\n  background-color: transparent;\n  border: none;\n}\n\n.left-section {\n  width: 700px;\n  height: 100%;\n  display: inline-block;\n}\n\n.right-section {\n  width: 300px;\n  padding: 15px;\n  display: inline-block;\n  background-color: #333;\n  height: 100%;\n  color: #fff;\n}\n\n.btn {\n  padding: 15px;\n  border-radius: 5px;\n  background-color: #006633;\n  color: #fff;\n  text-shadow: 1px 1px 5px #222;\n  box-shadow: 1px 1px 5px #222;\n  text-align: center;\n  font-size: 14px;\n  border: none;\n}\n\n#logo {\n  margin: 0;\n  float: left;\n  color: #fff;\n  line-height: 50px;\n  text-shadow: 1px 1px 5px #222;\n}\n\n#logo span {\n  font-size: 15px;\n}\n\nh1 { font-size: 2em; }\nh2 { font-size: 1.5em; }\nh3 { font-size: 1.3em; }\nh4 { font-size: 1em; }\nh5 { font-size: 0.8em; }\nh6 { font-size: 0.7em; }\n\n.search-bar {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 40px;\n  width: 500px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.search-bar input {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; \n  width: 400px;\n  margin: 0;\n  padding: 5px 15px;\n  height: 100%;\n}\n\n.search-bar button {\n  padding: 5px;\n  margin: 0;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px; \n  height: 100%;\n  width: 100px;\n  border: 1px solid #aaa;\n  background-color: #006633;\n  border-left: none;\n}\n\n.search-bar button .material-icons {\n  color: #fff;\n}\n\n.search-bar-container {\n  height: 75px;\n}\n\n.sort-list {\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 40px;\n  width: 300px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.sort-list label {\n  display: inline-block;\n  width: 50px;\n  height: 40px;\n  line-height: 40px;\n  font-weight: bold;\n}\n\n.sort-list select {\n  border: 1px solid #aaa;\n  border-radius: 5px;\n  width: 250px;\n  height: 40px;\n  padding: 5px 15px;\n  background-color: #fff;\n}\n\n.delete-btn {\n  background: none;\n  border: none;\n  height: 20px;\n}\n\n.top-right, .bottom-right, .top-left, .bottom-left {\n  position: absolute;\n}\n\n.top-right {\n  right: 10px;\n  top: 10px;\n}\n\n.bottom-right {\n  right: 10px;\n  bottom: 10px;\n}\n\n.top-left {\n  left: 10px;\n  top: 10px;\n}\n\n.bottom-left {\n  left: 10px;\n  bottom: 10px;\n}\n\n.space-evenly {\n  display: inline-flex;\n  justify-content: space-between;\n}\n\n.btn-inscription {\n  float: right;\n}\n\n.popup-background {\n  position: absolute;\n  background-color: rgba(0, 0, 0, .7);\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  bottom: 0;\n  z-index: 1;\n  overflow: hidden;\n}\n\n.popup-background .popup {\n  position: fixed;\n  top: 150px;\n  left: 50%;\n  margin-left: -300px;\n  width: 600px;\n  box-shadow: 1px 1px 10px #222;\n  border-radius: 5px;\n  z-index: 2;\n  padding: 20px;\n  background-color: #fff;\n  opacity: 1;\n}\n\n.popup input {\n  margin-bottom: 5px;\n}\n\n.popup .icon-btn {\n  float: right;\n}\n\n.icon-btn {\n  background: none;\n  border: none;\n}\n\n.btn-inscription-container {\n  height: 75px;\n}\n\n.btn-flotante {\n  background-color: #006633;\n  padding: 15px;\n  border-radius: 100%;\n  border: none;\n  box-shadow: 1px 1px 5px #222; \n  margin: 30px;\n  position: fixed;\n}\n\n.btn-flotante i.material-icons {\n  color: #fff;\n  font-size: 28px;\n}\n\n\n.list {\n  list-style-type: none;\n}\n\n.list li {\n  position: relative;\n  display: block;\n  padding: 20px;\n  margin-bottom: 10px;\n  background-color: #fff;\n  border-radius: 5px;\n  box-shadow: 1px 1px 5px #222;\n}\n\n.list li span {\n  margin-right: 30px;\n  display: inline-flex;\n  vertical-align: middle;\n}\n\n.list li span i {\n  margin-right: 10px;\n}\n\n.list h3 {\n\tmargin-top: 0;\n}\n\n.half-width {\n\twidth: 45%;\n\theight: 100%;\n\tdisplay: inline-block;\n\tmargin-right: 15px;\n}\n"; });
define('text!views/accueil/index.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./styles.css\"></require>\n  <section>\n  </section>\n</template>\n"; });
define('text!views/accueil/styles.css', ['module'], function(module) { module.exports = "#inscription {\n  width: 300px;\n  text-align: center;\n  background-color: #333;\n  display: inline-block;\n  padding: 15px;\n}\n\n#inscription input {\n  margin: 5px;\n  width: 100%;\n}\n\n#inscription .btn {\n  width: 100%;\n  color: #fff;\n  text-shadow: 1px 1px 5px #222;\n  background-color: #00994d;\n}\n\n.type-inscription {\n  text-align: left;\n  padding: 3px;\n  border-bottom: 1px solid #fff;\n}\n\n#mainTitle {\n  display: inline-block;\n  text-align: left;\n  margin: 0;\n  font-size: 50px;\n  margin-top: 50px;\n  margin-bottom: 10px;\n}\n\n#mainInstructions {\n  display: block;\n  float: left;\n}\n"; });
define('text!views/employes/styles.css', ['module'], function(module) { module.exports = ".employes {\n  list-style-type: none;\n}\n\n.employes li {\n  display: block;\n  border-bottom: 1px solid #333;\n  padding: 20px;\n  margin-bottom: 10px;\n  background-color: #fff;\n  border-radius: 5px;\n  box-shadow: 1px 1px 5px #222;\n}\n\n.employes li span {\n  margin-right: 30px;\n  display: inline-flex;\n  vertical-align: middle;\n}\n\n.employes li span i {\n  margin-right: 10px;\n}\n\n.employes a {\n  float: right;\n  text-decoration: none;\n  color: #333;\n  display: inline-flex;\n  vertical-align: middle;\n}\n"; });
define('text!views/employes/index.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./styles.css\"></require>\n  <section>\n    <h1>Employés</h1>\n    <div class=\"container search-bar-container\">\n      <form class=\"search-bar\">\n        <input type=\"text\" placeholder=\"Mots clés\" value.bind=\"query\" />\n        <button type=\"submit\" click.trigger=\"getEmployes()\"><i class=\"material-icons\">search</i></button>\n      </form>\n      <div class=\"sort-list\">\n        <label>Trier:</label>\n        <select value.bind=\"sort\" change.trigger=\"getEmployes()\">\n          <option value.bind=\"1\">Ascendante</option>\n          <option value.bind=\"-1\">Descendante</option>\n        </select>\n      </div>\n    </div>\n    <ul class=\"list\">\n      <li repeat.for=\"employe of employes\">\n        <h3>${employe.nom}, ${employe.prenom}</h3>\n        <span>${employe.role}</span>\n        <a href=\"\">Voir profile <i class=\"material-icons\">keyboard_arrow_right</i></a>\n      </li>\n    </ul>\n  </section>\n</template>\n"; });
define('text!views/equipes/index.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./styles.css\"></require>\n  <section>\n    <h1>Équipes</h1>\n    <div class=\"container search-bar-container\">\n      <form class=\"search-bar\">\n        <input type=\"text\" placeholder=\"Mots clés\" value.bind=\"query\" />\n        <button type=\"submit\" click.trigger=\"getEquipes()\"><i class=\"material-icons\">search</i></button>\n      </form>\n      <div class=\"sort-list\">\n        <label>Trier:</label>\n        <select value.bind=\"sort\" change.trigger=\"getEquipes()\">\n          <option value.bind=\"1\">Ascendante</option>\n          <option value.bind=\"-1\">Descendante</option>\n        </select>\n      </div>\n    </div>\n    <ul id=\"list\">\n      <li class=\"equipe\" repeat.for=\"equipe of equipes\">\n        <h3>${equipe.nom}</h3>\n        <ul id=\"joueurs\">\n          <li repeat.for=\"joueur of equipe.joueurs\">${joueur.nom}</li>\n        </ul>\n        <a href=\"\">Voir profile <i class=\"material-icons\">keyboard_arrow_right</i></a>\n      </li>\n    </ul>\n  </section>\n</template>\n"; });
define('text!views/equipes/styles.css', ['module'], function(module) { module.exports = "#equipe {\n  list-style-type: none;\n}\n\n.equipe {\n  display: block;\n  border-bottom: 1px solid #333;\n  padding: 20px;\n  margin-bottom: 10px;\n  background-color: #fff;\n  border-radius: 5px;\n  box-shadow: 1px 1px 5px #222;\n}\n\n.equipe h3 {\n  display: inline-block;\n  margin-top: 5px;\n}\n\n.equipe span {\n  margin-right: 30px;\n  display: inline-flex;\n  vertical-align: middle;\n}\n\n.equipe span i {\n  margin-right: 10px;\n}\n\n.equipe a {\n  float: right;\n  text-decoration: none;\n  color: #333;\n  display: inline-flex;\n  vertical-align: middle;\n}\n\n#joueurs {\n  margin-left: 50px;\n  list-style-type: none;\n  display: inline-block;\n  width: 200px;\n  height: 100%;\n}\n\n#joueurs li {\n  display: inline-block;\n  margin: 10px;\n}\n\n\n"; });
define('text!views/ligues/styles.css', ['module'], function(module) { module.exports = ".ligues {\n  list-style-type: none;\n}\n\n.ligues li {\n  display: block;\n  border-bottom: 1px solid #333;\n  padding: 20px;\n  margin-bottom: 10px;\n  background-color: #fff;\n  border-radius: 5px;\n  box-shadow: 1px 1px 5px #222;\n}\n\n.ligues li span {\n  margin-right: 30px;\n  display: inline-flex;\n  vertical-align: middle;\n}\n\n.ligues li span i {\n  margin-right: 10px;\n}\n\n.ligues a {\n  float: right;\n  text-decoration: none;\n  color: #333;\n  display: inline-flex;\n  vertical-align: middle;\n}\n"; });
define('text!views/ligues/index.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./styles.css\"></require>\n  <section>\n    <h1>${title}</h1>\n    <div class=\"container search-bar-container\">\n      <form class=\"search-bar\">\n        <input type=\"text\" placeholder=\"Mots clés\" value.bind=\"query\" />\n        <button type=\"submit\" click.trigger=\"getLigues()\"><i class=\"material-icons\">search</i></button>\n      </form>\n      <div class=\"sort-list\">\n        <label>Trier:</label>\n        <select value.bind=\"sort\" change.trigger=\"getLigues()\">\n          <option value.bind=\"1\">Ascendante</option>\n          <option value.bind=\"-1\">Descendante</option>\n        </select>\n      </div>\n    </div>\n    <ul class=\"list\">\n      <li repeat.for=\"ligue of ligues\">\n        <h3>${ligue.idligue}</h3>\n        <h4>${ligue.niveaudifficulte === 'C' ? 'Compétitive' : 'Récréative'}</h4>\n        <button class=\"icon-btn top-right\" click.trigger=\"retirer($index, ligue.idligue)\"><i class=\"material-icons\">clear</i></button>\n\t\t\t\t<a class=\"bottom-right\" href=\"/#/sports/ligue/${ligue.idligue}\"><i class=\"material-icons\">keyboard_arrow_right</i></a>\n      </li>\n    </ul>\n  </section>\n</template>\n"; });
define('text!views/liste-sports/styles.css', ['module'], function(module) { module.exports = ""; });
define('text!views/requetes/styles.css', ['module'], function(module) { module.exports = ""; });
define('text!views/sports/styles.css', ['module'], function(module) { module.exports = ""; });
define('text!views/tournois/styles.css', ['module'], function(module) { module.exports = ""; });
define('text!views/usagers/styles.css', ['module'], function(module) { module.exports = ""; });
define('text!views/liste-sports/index.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./styles.css\"></require>\n  <section>\n    <h1>Sports</h1>\n    <button class=\"btn-flotante bottom-right\" click.trigger=\"afficherInscription=true\">\n      <i class=\"material-icons\">add</i>\n    </button>\n    <div class=\"container search-bar-container\">\n      <form class=\"search-bar\">\n        <input type=\"text\" placeholder=\"Mots clés\" value.bind=\"query\" />\n        <button type=\"submit\" click.trigger=\"getSports()\"><i class=\"material-icons\">search</i></button>\n      </form>\n      <div class=\"sort-list\">\n        <label>Trier:</label>\n        <select value.bind=\"sort\" change.trigger=\"getSports()\">\n          <option value.bind=\"1\">Ascendante</option>\n          <option value.bind=\"-1\">Descendante</option>\n        </select>\n      </div>\n    </div>\n    <ul class=\"list\">\n      <li repeat.for=\"sport of sports\">\n        <h3>${sport.nom}</h3>\n        <a href=\"/#/sports/ligues/${sport.idsport}\">Ligues</a>\n        <a href=\"/#/sports/tournois/${sport.idsport}\">Tournois</a>\n      </li>\n    </ul>\n  </section>\n</template>\n"; });
define('text!views/requetes/index.html', ['module'], function(module) { module.exports = ""; });
define('text!views/sports/index.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./styles.css\"></require>\n  <section>\n    <router-view></router-view>\n  </section>\n</template>\n"; });
define('text!views/tournois/index.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./styles.css\"></require>\n  <section>\n    <h1>${title}</h1>\n    <div class=\"container search-bar-container\">\n      <form class=\"search-bar\">\n        <input type=\"text\" placeholder=\"Mots clés\" value.bind=\"query\" />\n        <button type=\"submit\" click.trigger=\"getTournois()\"><i class=\"material-icons\">search</i></button>\n      </form>\n      <div class=\"sort-list\">\n        <label>Trier:</label>\n        <select value.bind=\"sort\" change.trigger=\"getTournois()\">\n          <option value.bind=\"1\">Ascendante</option>\n          <option value.bind=\"-1\">Descendante</option>\n        </select>\n      </div>\n    </div>\n    <ul class=\"list\">\n      <li repeat.for=\"tournoi of tournois\">\n        <h3>${tournoi.oeuvreCharite}</h3>\n        <span>${tournoi.dateDebut} - ${tournoi.dateFin}</span>\n        <span>$ ${tournoi.fondsAccumules}</span>\n      </li>\n    </ul>\n  </section>\n</template>\n"; });
define('text!views/usagers/index.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./styles.css\"></require>\n  <section>\n    <h1>Usagers</h1>\n    <button class=\"btn-flotante bottom-right\" click.trigger=\"afficherInscription=true\">\n      <i class=\"material-icons\">add</i>\n    </button>\n    <div class=\"container search-bar-container\">\n      <form class=\"search-bar\">\n        <input type=\"text\" placeholder=\"Mots clés\" value.bind=\"query\" />\n        <button type=\"submit\" click.trigger=\"getUsagers()\"><i class=\"material-icons\">search</i></button>\n      </form>\n      <div class=\"sort-list\">\n        <label>Trier:</label>\n        <select value.bind=\"sort\" change.trigger=\"getUsagers()\">\n          <option value.bind=\"1\">Ascendante</option>\n          <option value.bind=\"-1\">Descendante</option>\n        </select>\n      </div>\n    </div>\n    <ul class=\"list\">\n      <li repeat.for=\"usager of usagers\">\n        <h3>${usager.nom}, ${usager.prenom}</h3>\n        <span if.bind=\"usager.courriel\"><i class=\"material-icons\">email</i> Courriel: ${usager.courriel}</span>\n        <span if.bind=\"usager.numtel\"><i class=\"material-icons\">phone</i> Numéro de téléphone: ${usager.numtel}</span>\n        <div class=\"top-right\">\n          <button class=\"icon-btn\" click.trigger=\"modifier(usager)\"><i class=\"material-icons\">edit</i></button>\n          <button class=\"icon-btn\" click.trigger=\"retirer($index, usager)\"><i class=\"material-icons\">clear</i></button>\n        </div>\n        <button class=\"icon-btn bottom-right\" click.trigger=\"usager.afficherProfile=!usager.afficherProfile\">\n          <i if.bind=\"!usager.afficherProfile\" class=\"material-icons\">expand_more</i>\n          <i if.bind=\"usager.afficherProfile\" class=\"material-icons\">expand_less</i>\n        </button>\n        <div class=\"profile-usager\" if.bind=\"usager.afficherProfile\">\n          <h4>Sports préférés</h4>\n          <ul>\n            <li repeat.for=\"sport of usager.sports\">\n              \n            </li>\n          </ul>\n\n          <h4>Équipes</h4>\n          <ul>\n            <li repeat.for=\"equipe of usager.equipes\">\n              \n            </li>\n          </ul>\n        </div>\n      </li>\n    </ul>\n   \n    <!-- Ajouter un usager -->\n    <div class=\"popup-background\" if.bind=\"afficherInscription\">\n      <div class=\"popup\">\n        <button class=\"icon-btn\" click.trigger=\"afficherInscription=false\"><i class=\"material-icons\">clear</i></button>\n        <h3>Inscription</h3>\n        <input value.bind=\"nouveauUsager.idusager\" placeholder=\"IDUsager\"/>\n        <input value.bind=\"nouveauUsager.nom\" placeholder=\"Nom\"/>\n        <input value.bind=\"nouveauUsager.prenom\" placeholder=\"Prénom\"/>\n        <input value.bind=\"nouveauUsager.courriel\" placeholder=\"example@gmail.com\"/>\n        <input value.bind=\"nouveauUsager.numtel\" placeholder=\"(XXX) XXX-XXXX\"/>\n        <button class=\"btn btn-inscription\" click.trigger=\"inscrire()\">INSCRIRE</button>\n      </div>\n    </div>\n\n    <!-- Modifier un usager -->\n    <div class=\"popup-background\" if.bind=\"afficherModification\">\n      <div class=\"popup\">\n        <button class=\"icon-btn\" click.trigger=\"afficherModification=false\"><i class=\"material-icons\">clear</i></button>\n        <h3>Modification de l'usager ${usagerAModifier.idusager}</h3>\n        <input value.bind=\"usagerAModifier.nom\" placeholder=\"Nom\"/>\n        <input value.bind=\"usagerAModifier.prenom\" placeholder=\"Prénom\"/>\n        <input value.bind=\"usagerAModifier.courriel\" placeholder=\"example@gmail.com\"/>\n        <input value.bind=\"usagerAModifier.numtel\" placeholder=\"(XXX) XXX-XXXX\"/>\n        <button class=\"btn btn-inscription\" click.trigger=\"sauvegarder()\">SAUVERGARDER</button>\n      </div>\n    </div>\n  </section>\n</template>\n"; });
define('text!views/tournoi/index.html', ['module'], function(module) { module.exports = ""; });
define('text!views/ligue/index.html', ['module'], function(module) { module.exports = "<template>\n\t<section>\n\t\t<h1>${title}</h1>\n\t\t<h4>${ligue.niveaudifficulte === 'C' ? 'Compétitive' : 'Récréative'}</h4>\n\t\t<div class=\"container\">\n\t\t\t<div class=\"half-width top-left\">\n\t\t\t\t<h3>Saisons</h3>\n\t\t\t\t<hr/>\n\t\t\t\t<ul class=\"list\">\n\t\t\t\t\t<li repeat.for=\"saison of saisons\">\n\t\t\t\t\t\t<h3>${saison.idsaison}</h3>\n\t\t\t\t\t\t<button class=\"icon-btn top-right\" click.trigger=\"retirerSaison($index, saison.idsaison)\"><i class=\"material-icons\">clear</i></button>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"half-width top-right\">\n\t\t\t\t<h3>Équipes</h3>\n\t\t\t\t<hr/>\n\t\t\t\t<ul class=\"list\">\n\t\t\t\t\t<li repeat.for=\"equipe of equipes\">\n\t\t\t\t\t\t<h3>${equipe.nom}</h3>\n\t\t\t\t\t\t<button class=\"icon-btn top-right\" click.trigger=\"retirerEquipe($index, saison.idequipe)\"><i class=\"material-icons\">clear</i></button>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map