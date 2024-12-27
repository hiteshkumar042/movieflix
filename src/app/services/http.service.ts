import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  http = inject(HttpClient)
  API_URL = 'http://www.omdbapi.com/?apikey=dfe63285'
  constructor() { }



  SearchMovies(title: string) {
   let headers = new HttpHeaders({
      'Accept': 'application/json', // Expect JSON response
      'Content-Type': 'application/json', // Set the request content type to JSON
      'Referer': 'https://movieflixhk.netlify.app/', // Your Netlify app URL
    });
  
    return this.http.get(`${this.API_URL}&s=${title}`, { headers })
  }

  getMovieDetails(imdbId: string) {
    let headers = new HttpHeaders({
      'Accept': 'application/json', // Expect JSON response
      'Content-Type': 'application/json', // Set the request content type to JSON
      'Referer': 'https://movieflixhk.netlify.app/', // Your Netlify app URL
    });
    return this.http.get(`${this.API_URL}&i=${imdbId}`,{ headers })
  }
}
