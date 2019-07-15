import { Injectable } from '@angular/core';
import { Recipe } from './recepies.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Dish1',
      imageUrl: '../../assets/images/food.jpeg',
      ingrediends: ['Bread', 'Chicken', 'Rice']
    },
    {
      id: 'r2',
      title: 'Dish2',
      imageUrl: '../../assets/images/food.jpeg',
      ingrediends: ['Bread', 'Paneer', 'Rice']
    },
    {
      id: 'r3',
      title: 'Dish3',
      imageUrl: '../../assets/images/food.jpeg',
      ingrediends: ['Bread', 'Paneer', 'Rice']
    },
    {
      id: 'r4',
      title: 'Dish4',
      imageUrl: '../../assets/images/food.jpeg',
      ingrediends: ['Bread', 'Paneer', 'Rice']
    },
    {
      id: 'r5',
      title: 'Dish5',
      imageUrl: '../../assets/images/food.jpeg',
      ingrediends: ['Bread', 'Paneer', 'Rice']
    },
    {
      id: 'r6',
      title: 'Dish6',
      imageUrl: '../../assets/images/food.jpeg',
      ingrediends: ['Bread', 'Paneer', 'Rice']
    },
    {
      id: 'r7',
      title: 'Dish7',
      imageUrl: '../../assets/images/food.jpeg',
      ingrediends: ['Bread', 'Paneer', 'Rice']
    },
    {
      id: 'r8',
      title: 'Dish8',
      imageUrl: '../../assets/images/food.jpeg',
      ingrediends: ['Bread', 'Paneer', 'Rice']
    },
    {
      id: 'r9',
      title: 'Dish9',
      imageUrl: '../../assets/images/food.jpeg',
      ingrediends: ['Bread', 'Paneer', 'Rice']
    }
  ];
  constructor() {}

  getAllRecipe() {
    return [...this.recipes];
  }

  getRecipe(recipeId) {
    return { ...this.recipes.find(recipe => recipe.id === recipeId) };
  }

  deleteRecipe(recipeId) {
    this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId);
  }
}
