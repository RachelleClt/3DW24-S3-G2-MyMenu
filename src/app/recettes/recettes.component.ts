import { Component, OnInit } from '@angular/core';
import { Recette } from '../recette';
import { RECETTES } from '../mock-recette';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.scss']
})
export class RecettesComponent implements OnInit {

  recettes = RECETTES;
  selectedRecette: Recette;

  constructor() { }

  ngOnInit() {
  }

  onSelect(recette: Recette): void {
    this.selectedRecette = recette;
  }

}
