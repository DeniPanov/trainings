import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MoviesService } from './service/movies.service';

import {HttpClientModule} from "@angular/common/http";
import { MovieComponent } from './movie/movie.component';
import { RouterModule, Route } from '@angular/router';
import { SelectedMovieComponent } from './selected-movie/selected-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavigationComponent,
    MovieComponent,
    SelectedMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "", component: MoviesComponent},
      {path: "movie/:id", component: SelectedMovieComponent}
    ])
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
