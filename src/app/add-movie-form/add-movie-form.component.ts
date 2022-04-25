import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieClientService } from '../movie-client.service';
import{PostMovie} from '../models/Movie';

@Component({
  selector: 'app-add-movie-form',
  templateUrl: './add-movie-form.component.html',
  styleUrls: ['./add-movie-form.component.css']
})
export class AddMovieFormComponent {

  constructor(private _movieClientService: MovieClientService) { }

  addMovieFormGroup = new FormGroup({
    title: new FormControl(''),
    actor: new FormControl(''),
  })

  submitMovie(){
    const postMovie: PostMovie = this.addMovieFormGroup.value;
  }

  ngOnInit(): void {
  }

}
