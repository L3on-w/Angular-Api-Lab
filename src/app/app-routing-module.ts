import { NgModule } from "@angular/core";
import { AddMovieFormComponent } from "./add-movie-form/add-movie-form.component";
import { MovieComponent } from "./movie/movie.component";
import { RouterModule, Routes } from "@angular/router";



const routes: Routes = [
    {
        path: "movie/:movieId",
        component: MovieComponent
    },

    {
        path: "add-movie",
        component: AddMovieFormComponent
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}