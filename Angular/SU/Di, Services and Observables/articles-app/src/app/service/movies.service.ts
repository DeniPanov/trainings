import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Movies } from '../models/movies';

const apiKey = "c10cb1115e8ef37eec2e52a2d5913bc3";

@Injectable({
  providedIn: 'root'
})
export class MoviesService { 
  path: string = 'https://api.themoviedb.org/3/';
  popular: string = 'discover/movie?sort_by=popularity.desc';
  theatres: string = "discover/movie?primary_release_date.gte=2019-09-15&primary_release_date.lte=2021-01-20";
  kids: string = "discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc";
  dramas: string = "discover/movie?with_genres=18&primary_release_year=2019";
  authentication: string = '&api_key=';
  movie: string = "movie/";
  movieAuth: string = '?api_key=';

  constructor(private http: HttpClient) {

   }

   getPopular() : Observable<Movies>{
     return this.http.get<Movies>(`${this.path}${this.popular}${this.authentication}${apiKey}`);
   }

   getTheaters() : Observable<Movies> {
    return this.http.get<Movies>(`${this.path}${this.theatres}${this.authentication}${apiKey}`);
   }

   getKids() : Observable<Movies> {
    return this.http.get<Movies>(`${this.path}${this.kids}${this.authentication}${apiKey}`);
   }

   getDramas() : Observable<Movies> {
    return this.http.get<Movies>(`${this.path}${this.dramas}${this.authentication}${apiKey}`);
   }

   getMovieById(id: number) : Observable<Movies> {
    return this.http.get<Movies>(`${this.path}${this.movie}` + id + `${this.movieAuth}${apiKey}`);
   }
}
