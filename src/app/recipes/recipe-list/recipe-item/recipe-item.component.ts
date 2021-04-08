import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../../recipe.model';
import {RecipeService} from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() public recipe: Recipe;



  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onRecipeSelect(): void {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
