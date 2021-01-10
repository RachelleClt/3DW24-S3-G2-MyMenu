import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient';
import { IngredientService } from '../ingredient.service'
import { INGREDIENTS } from '../mock-ingredient';


@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  ingredients: Ingredient[] = [];
  selectedIngredient: Ingredient;

  constructor(  
    private ingredientService: IngredientService
    ) { 
    
  }

  ngOnInit() {
    this.getIngredients();
  }

  getIngredients(): void{
    this.ingredientService.getIngredients().subscribe(
      ingredients => this.ingredients = ingredients.data ?? [{"ingredient":"oskour"}]
    )
  }

  onSelect(ingredient: Ingredient): void {
    this.selectedIngredient = ingredient;
  }

}
