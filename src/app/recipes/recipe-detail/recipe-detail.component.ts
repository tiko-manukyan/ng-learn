import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(private recipeService: RecipeService, private shopping: ShoppingListService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.recipe = this.recipeService.getRecipe(+params.id);
    });
  }

  onAddToList(): void {
    this.recipe.ingredients.map((ing) => this.shopping.addIngredient(ing) );
  }

  onEditRecipe(): any {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
