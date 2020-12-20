import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { ListeIngredientsComponent } from './liste-ingredients/liste-ingredients.component';
import { RecettesComponent } from './recettes/recettes.component';

const routes: Routes = [
  { path: 'ingredients', component: IngredientsComponent },
  { path: 'stock', component: ListeIngredientsComponent},
  { path: 'recettes', component: RecettesComponent},
  { path: '', redirectTo: '/ingredients', pathMatch: 'full'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
