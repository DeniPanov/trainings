import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  
  popular: Object = {};
  theaters: Object = {};

  constructor(private moviesService: MoviesService) {

   }

  ngOnInit(): void {
    this.moviesService
      .getPopular()
      .subscribe(data => {
        this.popular = data;     
      });

      this.moviesService
        .getTheaters()
        .subscribe(data => {
          this.theaters = data;
          console.log(data);          
        });
  }

}
