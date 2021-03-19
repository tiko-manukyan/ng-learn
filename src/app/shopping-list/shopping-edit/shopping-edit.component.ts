import {Component, EventEmitter, ElementRef, OnInit, Output, ViewChild,} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(): void {
    const ingredient = {
      name: this.nameInput.nativeElement.value,
      amount: this.amountInput.nativeElement.value,
    };
    this.ingredientAdded.emit(ingredient);
  }


}
