import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export class ServiceUsagers {
  constructor(http) {
    this.http = http;
    this.http.configure(config => config.withBaseUrl('http://localhost:3000/usagers/'));
  }

  get(query) {
    this.http.fetch(`?query=${query}`).then(response => response.json()).then(data => {
      return data || [];
    });
  }

}
