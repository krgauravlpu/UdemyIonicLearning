import { Component, OnInit } from '@angular/core';
import { RecipesService } from './recipes.service';
import { Recipe } from './recepies.model';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.page.html',
  styleUrls: ['./recepies.page.scss']
})
export class RecepiesPage implements OnInit {
  recipes: Recipe[];
  constructor(private recepieService: RecipesService) {}

  ngOnInit() {
    this.recipes = this.recepieService.getAllRecipe();
  }
}
