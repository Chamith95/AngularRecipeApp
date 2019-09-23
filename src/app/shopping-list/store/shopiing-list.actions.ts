import {Action} from '@ngrx/store'
import { Ingriedient } from '../../shared/ingreidient.model';

export const ADD_INGREDIENT ='ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS'

export class AddIngredient implements Action {
    readonly type =ADD_INGREDIENT;
    constructor(public payload:Ingriedient){}
}

export class AddIngredients implements Action {
    readonly type =ADD_INGREDIENTS;
    constructor(public payload:Ingriedient[]){}
}

export type ShoppingListActions =AddIngredient |AddIngredients; 