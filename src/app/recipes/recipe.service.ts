import { Injectable, EventEmitter } from '@angular/core';
import {Recipe} from './recipe.model';
import { Ingredient} from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel',
      1,
      'A tasty schnitzel - Just Awesome',
      'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Big Fat Burger',
      2,
      'What Else You Need to Say?',
      'https://buy.am/media/image/c6/e0/3d/Veggie-burger-Pastrami-New.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  constructor( ) { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(id: number): any {
    return  this.recipes.find((rec) => rec.id === id);
  }


}
