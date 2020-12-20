import { Component, OnInit } from '@angular/core';
import { INGREDIENTS_STOCK } from '../mock-ingredient-stock';


@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {
  stock = INGREDIENTS_STOCK;
  constructor() { }

  ngOnInit(): void {
  }

}
