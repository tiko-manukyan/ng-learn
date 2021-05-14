import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f') slForm;
  editMode = false;
  indexOfEditItem: number;
  editingItem: Ingredient;
  deleteItem: Ingredient;
  indexOfDeleteItem: number;

  constructor(private slService: ShoppingListService) {
  }

  ngOnInit() {
    this.slService.startEdit.subscribe((index: number) => {
      this.indexOfEditItem = index;
      this.editMode = true;
      this.editingItem = this.slService.getIngredient(index);
      this.slForm.setValue({
        name: this.editingItem.name,
        amount: this.editingItem.amount
      })
    });
    this.slService.startDelete.subscribe((index: number) => {
      this.indexOfDeleteItem = index;
      this.deleteItem = this.slService.getIngredient(index);
      console.log(this.deleteItem);
    })
  }

  onSubmit(form) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.slService.updateIngredient(this.indexOfEditItem, newIngredient);
    } else {
      this.slService.addIngredient(newIngredient)
    }
    this.editMode = false;
    form.reset();
  }

  onDeleteItem() {
    this.slService.onDeleteIngredient(this.indexOfDeleteItem)
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;

  }
}

