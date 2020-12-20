import { Component, OnInit } from '@angular/core';
import { INGREDIENTS_STOCK } from '../mock-ingredient-stock';

@Component({
  selector: 'app-liste-ingredients',
  templateUrl: './liste-ingredients.component.html',
  styleUrls: ['./liste-ingredients.component.scss']
})
export class ListeIngredientsComponent implements OnInit {
  stock = INGREDIENTS_STOCK;
  constructor() { }

  ngOnInit(): void {
  }

}
