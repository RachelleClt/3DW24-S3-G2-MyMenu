import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { IngredientComponent } from './ingredient/ingredient.component';

const routes: Routes = [
  { path: 'ingredients', component: IngredientsComponent },
  { path: 'stock', component: IngredientComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
