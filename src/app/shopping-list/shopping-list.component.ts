import { Component, OnInit } from '@angular/core';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients = this.shopping.getIngredients();

  constructor(private shopping: ShoppingListService) { }

  ngOnInit(): void {
  }



}
