import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Spaghetti", "ItalianFood", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Spaghetti_spiral%2C_2008.jpg/126px-Spaghetti_spiral%2C_2008.jpg",
    ), new Recipe("Spaghetti", "ItalianFood", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Spaghetti_spiral%2C_2008.jpg/126px-Spaghetti_spiral%2C_2008.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
