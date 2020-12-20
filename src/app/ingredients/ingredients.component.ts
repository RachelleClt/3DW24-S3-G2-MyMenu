import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient';
import { INGREDIENTS } from '../mock-ingredient';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  ingredients = INGREDIENTS;
  selectedIngredient: Ingredient;

  constructor() { }

  ngOnInit() {
  }

  onSelect(ingredient: Ingredient): void {
    this.selectedIngredient = ingredient;
  }

}
