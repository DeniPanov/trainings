import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movie';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-selected-movie',
  templateUrl: './selected-movie.component.html',
  styleUrls: ['./selected-movie.component.css']
})
export class SelectedMovieComponent implements OnInit {
  myMovie: any;

  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params["id"];
      console.log(params);      

      this.movieService.getMovieById(id).subscribe(movie => {
      this.myMovie = movie;
      });
    })
  }

}
