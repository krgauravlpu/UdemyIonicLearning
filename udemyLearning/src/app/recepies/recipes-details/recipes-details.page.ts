import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recepies.model';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.page.html',
  styleUrls: ['./recipes-details.page.scss']
})
export class RecipesDetailsPage implements OnInit {
  loadedRecipe: Recipe;
  imageUrl: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService
  ) {}

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params.id);
    this.imageUrl = '../../../assets/images/food.jpeg';
    this.activatedRoute.paramMap.subscribe(data => {
      if (!data.has('recipeId')) {
        return;
      } else {
        const recipeId = data.get('recipeId');
        this.loadedRecipe = this.recipesService.getRecipe(recipeId);
        console.log('ddddd', this.loadedRecipe);
      }
    });
  }
}
