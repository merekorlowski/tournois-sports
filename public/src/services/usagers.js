import {HttpClient, json} from 'aurelia-fetch-client';

import {Usager} from '../models/usager';

export class ServiceUsagers {
  constructor() {
    this.http = new HttpClient().configure(config => {
      config.withBaseUrl('http://localhost:3000/');
    });
  }

	/**
	 * Retourner tous les usagers qui match la valeur de recherche
	 * @param {string} query 
	 * @param {string} sort 
	 */

  get(query, sort) {
    return this.http
			.fetch(`usagers?query=${query}&sort=${sort}`)
			.then(response => response.json())
			.then(data => {
				return data.map(usager => {
					return new Usager(usager);
				}) || [];
			});
  }

	/**
	 * Retourner tous les gérants qui n'ont pas encore créé une équipe
	 */

	getGerantsLibres() {
		return this.http
			.fetch(`usagers/gerants`)
			.then(response => response.json())
			.then(data => {
				return data.map(gerant => {
					return new Usager(gerant);
				}) || [];
			});
	}

	/**
	 * Retirer un usager
	 * @param {Usager} usager 
	 */

  retirer(usager) {
    return this.http.fetch('usager', {
      method: 'delete',
      body: json(usager)
    });
  }

	/**
	 * Ajouter un usager
	 * @param {Usager} usager 
	 */

  ajouter(usager) {
    return this.http.fetch('usager', {
      method: 'post',
      body: json(usager)
    });
  }

	/**
	 * Modifier un usager
	 * @param {Usager} usager 
	 */

  modifier(usager) {
    return this.http.fetch('usager', {
      method: 'put',
      body: json(usager)
    });
  }

}
