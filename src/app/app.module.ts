import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { RecettesComponent } from './recettes/recettes.component';
import { FormsModule } from '@angular/forms';
import { ListeIngredientsComponent } from './liste-ingredients/liste-ingredients.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    IngredientsComponent,
    RecettesComponent,
    ListeIngredientsComponent,
    IngredientComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
