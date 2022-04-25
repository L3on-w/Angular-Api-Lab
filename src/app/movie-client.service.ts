import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{PostMovie, movie} from './models/Movie'

@Injectable({
  providedIn: 'root'
})
export class MovieClientService {

  constructor(private httpClient : HttpClient) { }
  baseUrl = "https://http://localhost:4200/Movie";

  getMovies(){
    return this.httpClient.get<Array<Movie>>(this.baseUrl);
  }

  getMovie(MovieId: number){
    return this.httpClient.get<Movie>(`${this.baseUrl}/${MovieId}`);

  }

  postMovie(movie : PostMovie){
    return this.httpClient.post<Movie>(this.baseUrl, movie);
    
  }
}
