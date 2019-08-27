import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingriedient } from '../shared/ingreidient.model';
import { ShoppingService } from '../shopping-list/shopping.service';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected =new EventEmitter<Recipe>();

  recipes:Recipe[] =[
    new Recipe('A test Recipe',
    'This is simply a test',
    'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
    [
      new Ingriedient('Meat',1),
      new Ingriedient('French Fries',5),
    ]),
    new Recipe('A test Recipe2',
    'This is simply a test2',
    'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
    [
      new Ingriedient('Buns',5),
      new Ingriedient('Beans',2),
    ]),
  ];

  constructor(private slServie:ShoppingService) { }

  getRecipes(){
    return this.recipes.slice();
  }

  addingtoshopList(ingredients:Ingriedient[]){
    this.slServie.addIngredients(ingredients); 
  }
}
