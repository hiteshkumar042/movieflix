import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  http = inject(HttpClient)
  API_URL = 'http://www.omdbapi.com/?apikey=dfe63285'
  constructor() { }

  SearchMovies(title: string) {
    return this.http.get(`${this.API_URL}&s=${title}`)
  }

  getMovieDetails(imdbId: string) {
    return this.http.get(`${this.API_URL}&i=${imdbId}`)
  }
}
