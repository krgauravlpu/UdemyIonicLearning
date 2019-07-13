import { Component, OnInit } from '@angular/core';
import { Recipe } from './recepies.model';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.page.html',
  styleUrls: ['./recepies.page.scss']
})
export class RecepiesPage implements OnInit {
  recipes: Recipe[] = [
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
      id: 'r2',
      title: 'Dish3',
      imageUrl: '../../assets/images/food.jpeg',
      ingrediends: ['Bread', 'Paneer', 'Rice']
    },
    {
      id: 'r2',
      title: 'Dish4',
      imageUrl: '../../assets/images/food.jpeg',
      ingrediends: ['Bread', 'Paneer', 'Rice']
    },
    {
      id: 'r2',
      title: 'Dish5',
      imageUrl: '../../assets/images/food.jpeg',
      ingrediends: ['Bread', 'Paneer', 'Rice']
    },
    {
      id: 'r2',
      title: 'Dish6',
      imageUrl: '../../assets/images/food.jpeg',
      ingrediends: ['Bread', 'Paneer', 'Rice']
    },
    {
      id: 'r2',
      title: 'Dish7',
      imageUrl: '../../assets/images/food.jpeg',
      ingrediends: ['Bread', 'Paneer', 'Rice']
    },
    {
      id: 'r2',
      title: 'Dish8',
      imageUrl: '../../assets/images/food.jpeg',
      ingrediends: ['Bread', 'Paneer', 'Rice']
    },
    {
      id: 'r2',
      title: 'Dish9',
      imageUrl: '../../assets/images/food.jpeg',
      ingrediends: ['Bread', 'Paneer', 'Rice']
    },
    {
      id: 'r2',
      title: 'Dish10',
      imageUrl: '../../assets/images/food.jpeg',
      ingrediends: ['Bread', 'Paneer', 'Rice']
    },
    {
      id: 'r2',
      title: 'Dish11',
      imageUrl: '../../assets/images/food.jpeg',
      ingrediends: ['Bread', 'Paneer', 'Rice']
    }
  ];
  constructor() {}

  ngOnInit() {}
}
