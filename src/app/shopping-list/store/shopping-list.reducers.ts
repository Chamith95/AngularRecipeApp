import { Action } from '@ngrx/store';
import { Ingriedient } from '../../shared/ingreidient.model';
import * as ShoppingListActions from './shopiing-list.actions'


const initialState ={
    ingredients:[
        new Ingriedient('Apples',5),
        new Ingriedient('Tomato',10)
    ]    
}

export function shoppingListReducer(state =initialState,action:ShoppingListActions.ShoppingListActions){
    switch(action.type){
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients:[...state.ingredients,action.payload]
            };
        case ShoppingListActions.ADD_INGREDIENTS:
            return{
                ...state,
                ingredients:[...state.ingredients,...action.payload]
            }
        default:
            return state
    }

    return state; 
}