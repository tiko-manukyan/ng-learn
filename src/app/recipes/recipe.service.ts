import { Injectable, EventEmitter } from '@angular/core';
import {Recipe} from './recipe.model';
import { Ingredient} from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('A Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg', [ new Ingredient('potato', 3)]),
    // tslint:disable-next-line:max-line-length
    new Recipe('A New Recipe', 'This is simply a new test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg', [ new Ingredient('onion', 5)])
  ];

  constructor( ) { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }


}
