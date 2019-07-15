import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recepies.model';
import { AlertController } from '@ionic/angular';

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
    private recipesService: RecipesService,
    private router: Router,
    private alrtCntrl: AlertController
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

  onDltRecipe() {
    this.alrtCntrl
      .create({
        header: 'Are you sure you want to delete',
        message: 'Do you really want to delte the recipe',
        buttons: [
          { text: 'Cancel', role: 'Cancel' },
          {
            text: 'Delete',
            handler: () => {
              this.recipesService.deleteRecipe(this.loadedRecipe.id);
              this.router.navigate(['/recepies']);
            }
          }
        ]
      })
      .then(alertEl => {
        alertEl.present();
      });
  }
}
