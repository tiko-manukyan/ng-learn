import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() public recipe: Recipe;
  @Output() selectRecipe = new EventEmitter<void>();



  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelect(): void {
    this.selectRecipe.emit();
  }

}
