import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{filter, map, switchMap} from 'rxjs/operators'
import { MovieClientService } from '../movie-client.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _movieClientService: MovieClientService
  ) { }

  movie$ = this._activatedRoute.paramMap.pipe(
    map(params => HttpParams.get('MovieId')),
    filter(MovieId => MovieId !==null),
    map(MovieId => parseInt(MovieId as string, 10)),
    switchMap((MovieId: Number) => this._movieClientService.getMovie(MovieId)),
  )



  ngOnInit(): void {
    
  }
}
