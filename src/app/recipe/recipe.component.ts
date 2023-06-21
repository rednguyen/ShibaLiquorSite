import { Component } from '@angular/core';
import recipedata  from './recipe';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {
  dataItem: Array<Recipe> = recipedata;

  constructor() { }

  ngOnInit(): void {
  }
}
