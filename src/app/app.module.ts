import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddMovieFormComponent } from './add-movie-form/add-movie-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import{AppRoutingModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    NavBarComponent,
    AddMovieFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
