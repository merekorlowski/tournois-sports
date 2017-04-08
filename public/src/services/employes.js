import {HttpClient, json} from 'aurelia-fetch-client';

import {Employe} from '../models/employe';

export class ServiceEmployes {
  constructor() {
    this.http = new HttpClient().configure(config => {
      config.withBaseUrl('http://localhost:3000/');
    });
  }

	/**
	 * Retourner tous les employes
	 * @param {string} query 
	 * @param {string} sort 
	 */

  get(query, sort) {
    return this.http
			.fetch(`employes?query=${query}&sort=${sort}`)
			.then(response => response.json())
			.then(data => {
				return data.map(employe => {
					return new Employe(employe);
				}) || [];
			});
  }

	/**
	 * Retirer un employe
	 * @param {Employe} employe 
	 */

	retirer(employe) {
    return this.http.fetch('employe', {
      method: 'delete',
      body: json(employe)
    });
  }

	/**
	 * Ajouter un employe
	 * @param {Employe} employe 
	 */

  ajouter(employe) {
    return this.http.fetch('employe', {
      method: 'post',
      body: json(employe)
    });
  }

	/**
	 * Modifier un employe
	 * @param {Employe} employe 
	 */

	modifier(employe) {
    return this.http.fetch('employe', {
      method: 'put',
      body: json(employe)
    });
  }

}
