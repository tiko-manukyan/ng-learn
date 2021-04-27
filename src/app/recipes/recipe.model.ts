import {Ingredient} from '../shared/ingredient.model';

export class Recipe {
  // public name: string;
  // public description: string;
  // public imagePath: string;

  constructor(public name: string, public id: number, public description: string, public imagePath: string, public ingredients: Ingredient[]) {
    // this.name = name;
    // this.description = description;
    // this.imagePath = imagePath;
  }
}
