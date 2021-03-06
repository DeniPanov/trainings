import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../models/movie';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  popular!: Movie[];
  theaters!: Movie[];
  kids!: Movie[];
  dramas!: Movie[];
  searchedText!: any;
  isSearched: boolean = false;

  onClick(movie: any) {
    this.router.navigateByUrl(`/movie/${movie.id}`)
  }

  search(myQuery: any){
    let value = myQuery["search"];
    
    this.moviesService.findAMovie(value).subscribe(data => {
      this.searchedText = data;
      this.isSearched = true;
      console.log(this.searchedText);      
    });    
  }

  constructor(
    private moviesService: MoviesService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.moviesService.getPopular().subscribe((data) => {
      this.popular = data.results;
    });

    this.moviesService.getTheaters().subscribe((data) => {
      this.theaters = data.results;
    });

    this.moviesService.getKids().subscribe((data) => {
      this.kids = data.results;
    });

    this.moviesService.getDramas().subscribe((data) => {
      this.dramas = data.results;
    });
  }
}
