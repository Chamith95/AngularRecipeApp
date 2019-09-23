import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingriedient } from '../shared/ingreidient.model';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../shopping-list/store/shopiing-list.actions'


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

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

  constructor(private slServie:ShoppingService,private store:Store<any>) { }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index:number){
    return this.recipes.slice()[index];
  }
  addingtoshopList(ingredients:Ingriedient[]){
    this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients))
  }

  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice())
  }

  updateRecipe(index:number,newRecipe:Recipe){
    this.recipes[index]=newRecipe;
    this.recipesChanged.next(this.recipes.slice())
  }

  deleteRecipe(index:number){
    this.recipes.splice(index,1)
    this.recipesChanged.next(this.recipes.slice())
  }
}
