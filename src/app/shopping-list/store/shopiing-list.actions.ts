import {Action} from '@ngrx/store'
import { Ingriedient } from '../../shared/ingreidient.model';

export const ADD_INGREDIENT ='ADD_INGREDIENT';

export class AddIngredient implements Action {
    readonly type =ADD_INGREDIENT;
    constructor(public payload:Ingriedient){}
}

export type ShoppingListActions =AddIngredient; 