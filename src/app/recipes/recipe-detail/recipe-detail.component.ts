import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(private recipeService: RecipeService, private shopping: ShoppingListService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(recipe => this.recipe = recipe);
  }

  onAddToList(): void {
    this.recipe.ingredients.map((ing) => this.shopping.addIngredient(ing) );
  }

}
