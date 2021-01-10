import { Injectable } from '@angular/core';
import { Ingredient } from './ingredient';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IngredientService {


  private ingredientsUrl = "http://mymenu-api-public.matthieugiraud.fr/ingredients";
  constructor(private http: HttpClient) { }

  getIngredients(): Observable<any>{
    return this.http.get<any>(this.ingredientsUrl);
  }
}
